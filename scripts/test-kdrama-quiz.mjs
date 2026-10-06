import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../src/lib/kdramaQuiz.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const quiz = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const { kdramaShows, kdramaQuizQuestions, selectRecommendations, scoreShows, normalizeShowProfile } = quiz;

function answerPath(ids) {
  assert.equal(ids.length, kdramaQuizQuestions.length);
  return Object.fromEntries(kdramaQuizQuestions.map((question, index) => {
    assert.ok(question.answers.some((answer) => answer.id === ids[index]));
    return [question.id, ids[index]];
  }));
}

test('Personal ratings and recommendation flags never affect the ranking', () => {
  const preference = normalizeShowProfile(kdramaShows[0]);
  const snapshot = () => scoreShows(preference).map(({ show, score }) => [show.title, score]);
  const baseline = snapshot();
  const originalRatings = kdramaShows.map(({ rating, recommend }) => ({ rating, recommend }));

  try {
    kdramaShows.forEach((show, index) => {
      show.rating = index % 2 ? 'fine' : 'loved';
      show.recommend = index % 2 ? 'maybe' : 'enthusiastically';
    });
    assert.deepEqual(snapshot(), baseline);
  } finally {
    kdramaShows.forEach((show, index) => Object.assign(show, originalRatings[index]));
  }
});

test('Cozy, thriller, fantasy, and comedy choices produce distinct primary matches', () => {
  const paths = {
    cozy: ['butter-yellow', 'ramen', 'hot-chocolate', 'warm-brownie', 'sunny', 'seaside-town', 'bath-bedtime', 'love-letter'],
    thriller: ['deep-blue', 'tacos', 'iced-coffee', 'raspberry-sorbet', 'cold-crisp', 'mountain-cabin', 'one-more-episode', 'secret-info'],
    fantasy: ['cherry-red', 'tacos', 'tropical-cocktail', 'raspberry-sorbet', 'sunny', 'historic-place', 'bar', 'old-key'],
    comedy: ['cherry-red', 'tacos', 'tropical-cocktail', 'raspberry-sorbet', 'sunny', 'big-city', 'bar', 'tickets'],
  };
  const results = Object.fromEntries(Object.entries(paths).map(([mood, ids]) => [mood, selectRecommendations(answerPath(ids))]));
  assert.equal(new Set(Object.values(results).map((result) => result.recommendations.match.show.title)).size, 4);
  assert.ok(results.cozy.recommendations.match.profile.comfort >= 4);
  assert.ok(results.cozy.recommendations.match.profile.suspense <= 2);
  assert.ok(results.thriller.recommendations.match.profile.suspense >= 4);
  assert.ok(results.thriller.recommendations.match.profile.romance <= 2);
  assert.ok(results.fantasy.recommendations.match.profile.fantasy >= 4);
  assert.ok(results.comedy.recommendations.match.profile.comedy >= 4);
  for (const [mood, result] of Object.entries(results)) {
    console.log(`${mood}: ${Object.values(result.recommendations).map((entry) => entry.show.title).join(' | ')}`);
  }
});

test('All shows are reachable as the primary match and every path returns three distinct shows', () => {
  const combinations = kdramaQuizQuestions.reduce((total, question) => total * question.answers.length, 1);
  const counts = new Map(kdramaShows.map((show) => [show.title, 0]));

  for (let index = 0; index < combinations; index += 1) {
    let remaining = index;
    const answers = {};
    for (const question of kdramaQuizQuestions) {
      answers[question.id] = question.answers[remaining % question.answers.length].id;
      remaining = Math.floor(remaining / question.answers.length);
    }
    const result = selectRecommendations(answers);
    const primaryTitle = result.recommendations.match.show.title;
    counts.set(primaryTitle, counts.get(primaryTitle) + 1);
    assert.equal(new Set(Object.values(result.recommendations).map((entry) => entry.show.title)).size, 3);
    assert.ok(Object.values(result.preferenceProfile).every((value) => Number.isFinite(value) && value >= 1 && value <= 5));
  }

  assert.deepEqual([...counts].filter(([, count]) => count === 0), []);
  const [title, count] = [...counts].sort((first, second) => second[1] - first[1])[0];
  console.log(`Audited ${combinations} paths; all ${counts.size} shows can be the primary match. Most frequent: ${title} (${(count / combinations * 100).toFixed(1)}%).`);
});
