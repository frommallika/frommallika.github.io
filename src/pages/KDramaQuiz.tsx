import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  kdramaQuizQuestions,
  selectRecommendations,
  type QuizQuestion,
  type ScoredShow,
} from '../lib/kdramaQuiz';

type AnswerState = Record<string, string>;

function ResultCard({
  label,
  result,
}: {
  label: string;
  result: ScoredShow;
}) {
  return (
    <article className="border border-stone-200 bg-white p-7 shadow-sm">
      <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-saffron">{label}</span>
      <h3 className="mb-3 font-display text-3xl leading-tight text-gray-900">{result.show.title}</h3>
      <p className="mb-4 text-sm font-bold text-emerald">{result.show.vibe}</p>
      <p className="font-body text-base font-light leading-relaxed text-gray-600">{result.show.synopsis}</p>
    </article>
  );
}

function QuizQuestionView({
  answers,
  currentQuestion,
  onAnswer,
  question,
}: {
  answers: AnswerState;
  currentQuestion: number;
  onAnswer: (questionId: string, answerId: string) => void;
  question: QuizQuestion;
}) {
  return (
    <div>
      <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-saffron">
        {question.category}
      </span>
      <h2 className="mb-10 font-display text-4xl leading-tight text-gray-900 md:text-5xl">{question.prompt}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {question.answers.map((answer) => {
          const isSelected = answers[question.id] === answer.id;

          return (
            <button
              aria-pressed={isSelected}
              className={`min-h-[124px] border p-6 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 focus:ring-offset-cream ${
                isSelected
                  ? 'border-saffron bg-saffron/10 shadow-sm'
                  : 'border-stone-200 bg-white hover:-translate-y-0.5 hover:border-saffron/60 hover:shadow-md'
              }`}
              key={answer.id}
              onClick={() => onAnswer(question.id, answer.id)}
              type="button"
            >
              <span className="block font-display text-2xl leading-snug text-gray-900">{answer.label}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-8 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
        {currentQuestion + 1} of {kdramaQuizQuestions.length}
      </p>
    </div>
  );
}

export function KDramaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [isComplete, setIsComplete] = useState(false);
  const quizPanelRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const question = kdramaQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + (isComplete ? 1 : 0)) / kdramaQuizQuestions.length) * 100;
  const result = useMemo(() => (isComplete ? selectRecommendations(answers) : null), [answers, isComplete]);

  const scrollToQuizPanel = () => {
    window.setTimeout(() => {
      if (!quizPanelRef.current) {
        return;
      }

      const top = quizPanelRef.current.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ behavior: shouldReduceMotion ? 'auto' : 'smooth', top });
    }, 0);
  };

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [questionId]: answerId }));

    window.setTimeout(
      () => {
        if (currentQuestion === kdramaQuizQuestions.length - 1) {
          setIsComplete(true);
        } else {
          setCurrentQuestion((index) => index + 1);
        }

        scrollToQuizPanel();
      },
      shouldReduceMotion ? 0 : 180,
    );
  };

  const goBack = () => {
    if (isComplete) {
      setIsComplete(false);
      setCurrentQuestion(kdramaQuizQuestions.length - 1);
      scrollToQuizPanel();
      return;
    }

    setCurrentQuestion((index) => Math.max(index - 1, 0));
    scrollToQuizPanel();
  };

  const retakeQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setIsComplete(false);
    scrollToQuizPanel();
  };

  return (
    <article className="min-h-screen bg-cream pb-24">
      <header className="container mx-auto max-w-5xl px-6 pt-32 pb-14 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-saffron">
            K-Drama Mood Finder
          </span>
          <h1 className="mx-auto mb-8 max-w-4xl font-display text-5xl leading-[0.95] text-gray-900 md:text-7xl">
            What K-Drama Should You Watch?
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            Answer a handful of tiny mood questions and I will match you with three dramas from shows I have watched.
          </p>
        </motion.div>
      </header>

      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 h-1.5 overflow-hidden bg-stone-200">
          <div className="h-full bg-saffron transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-saffron"
            to="/guides"
          >
            <ArrowLeft className="h-4 w-4" />
            Guides
          </Link>
          <button
            className="text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:text-gray-200"
            disabled={!isComplete && currentQuestion === 0}
            onClick={goBack}
            type="button"
          >
            Back
          </button>
        </div>

        <section
          className="border border-stone-200 bg-white/70 p-6 shadow-sm md:p-10"
          aria-live="polite"
          ref={quizPanelRef}
        >
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                key={question.id}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              >
                <QuizQuestionView
                  answers={answers}
                  currentQuestion={currentQuestion}
                  onAnswer={handleAnswer}
                  question={question}
                />
              </motion.div>
            ) : (
              result && (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  key="results"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                >
                  <div className="mb-10 text-center">
                    <Sparkles className="mx-auto mb-5 h-9 w-9 text-saffron" />
                    <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-emerald">
                      Your watchlist awaits
                    </span>
                    <h2 className="mb-5 font-display text-4xl leading-tight text-gray-900 md:text-5xl">
                      I have three picks for you.
                    </h2>
                    <p className="mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-gray-600">
                      Three dramas for the mood you are in.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    <ResultCard
                      label="Your match"
                      result={result.recommendations.match}
                    />
                    <ResultCard
                      label="Also try"
                      result={result.recommendations.alsoTry}
                    />
                    <ResultCard
                      label="Wildcard"
                      result={result.recommendations.wildcard}
                    />
                  </div>

                  <div className="mt-10 text-center">
                    <button
                      className="inline-flex items-center gap-2 border border-gray-900 bg-gray-900 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 focus:ring-offset-cream"
                      onClick={retakeQuiz}
                      type="button"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Retake quiz
                    </button>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </section>
      </div>
    </article>
  );
}
