export type QuizDimension =
  | 'emotionalIntensity'
  | 'romance'
  | 'comedy'
  | 'suspense'
  | 'pace'
  | 'comfort'
  | 'fantasy';

export type DimensionProfile = Record<QuizDimension, number>;

export interface KDramaShow {
  title: string;
  synopsis: string;
  rating: 'loved' | 'liked' | 'fine';
  recommend: 'enthusiastically' | 'yes' | 'maybe';
  note: string;
  vibe: string;
  rawProfile: {
    emotionalIntensity: string;
    romance: string;
    comedy: string;
    suspense: string;
    pace: string;
    comfort: string;
    fantasy: string;
  };
}

export interface QuizAnswer {
  id: string;
  label: string;
  signal: Partial<DimensionProfile>;
}

export interface QuizQuestion {
  id: string;
  category: string;
  prompt: string;
  answers: QuizAnswer[];
}

export interface ScoredShow {
  show: KDramaShow;
  profile: DimensionProfile;
  score: number;
  distance: number;
}

export const QUIZ_SCORING = {
  neutralPreference: 3,
  fitScale: 1.7,
  preferenceContrast: 2,
  questionWeights: {
    color: 1,
    food: 1,
    drink: 1,
    dessert: 1,
    weather: 2,
    travel: 1,
    evening: 2,
    'story-hook': 4,
  },
  dimensionWeights: {
    emotionalIntensity: 1,
    romance: 1,
    comedy: 0.9,
    suspense: 1,
    pace: 0.85,
    comfort: 1,
    fantasy: 0.8,
  },
  diversity: {
    alsoTryMinimumProfileDistance: 0.75,
    alsoTryMaxScoreGap: 1.35,
    wildcardMinimumProfileDistance: 1,
    wildcardAlignmentWeight: 0.42,
    wildcardStretchWeight: 0.22,
  },
} satisfies {
  neutralPreference: number;
  fitScale: number;
  preferenceContrast: number;
  questionWeights: Record<string, number>;
  dimensionWeights: DimensionProfile;
  diversity: {
    alsoTryMinimumProfileDistance: number;
    alsoTryMaxScoreGap: number;
    wildcardMinimumProfileDistance: number;
    wildcardAlignmentWeight: number;
    wildcardStretchWeight: number;
  };
};

export const quizDimensions: QuizDimension[] = [
  'emotionalIntensity',
  'romance',
  'comedy',
  'suspense',
  'pace',
  'comfort',
  'fantasy',
];

export const dimensionLabels: Record<QuizDimension, string> = {
  emotionalIntensity: 'big feelings',
  romance: 'romance',
  comedy: 'humor',
  suspense: 'tension',
  pace: 'momentum',
  comfort: 'comfort',
  fantasy: 'escapism',
};

export const kdramaQuizQuestions: QuizQuestion[] = [
  {
    id: 'color',
    category: 'Color',
    prompt: 'Pick a color.',
    answers: [
      {
        id: 'cherry-red',
        label: '🍒 Cherry red',
        signal: { romance: 5, emotionalIntensity: 4, pace: 4, comedy: 3 },
      },
      {
        id: 'butter-yellow',
        label: '🧈 Butter yellow',
        signal: { comfort: 5, comedy: 4, emotionalIntensity: 1, suspense: 1, pace: 2 },
      },
      {
        id: 'deep-blue',
        label: '🌊 Deep blue',
        signal: { emotionalIntensity: 4, suspense: 3, comfort: 2, pace: 2, fantasy: 3, romance: 2 },
      },
      {
        id: 'forest-green',
        label: '🌿 Forest green',
        signal: { comfort: 4, pace: 2, emotionalIntensity: 2, fantasy: 1, romance: 3 },
      },
    ],
  },
  {
    id: 'food',
    category: 'Food',
    prompt: 'What are you ordering?',
    answers: [
      {
        id: 'ramen',
        label: '🍜 Ramen',
        signal: { comfort: 5, romance: 3, pace: 2, emotionalIntensity: 2, suspense: 1 },
      },
      {
        id: 'burger-fries',
        label: '🍔 Burger & fries',
        signal: { comfort: 4, comedy: 3, pace: 3, emotionalIntensity: 2, fantasy: 2 },
      },
      {
        id: 'pizza',
        label: '🍕 Pizza',
        signal: { comedy: 5, comfort: 4, emotionalIntensity: 1, suspense: 1, pace: 2 },
      },
      {
        id: 'tacos',
        label: '🌮 Tacos',
        signal: { comedy: 4, pace: 4, fantasy: 3, suspense: 2, romance: 3 },
      },
    ],
  },
  {
    id: 'drink',
    category: 'Drink',
    prompt: 'What are you drinking?',
    answers: [
      {
        id: 'iced-coffee',
        label: '🧊 Iced coffee',
        signal: { pace: 4, comedy: 3, suspense: 2, comfort: 2, fantasy: 2 },
      },
      {
        id: 'wine',
        label: '🍷 Wine',
        signal: { romance: 5, emotionalIntensity: 4, suspense: 3, comedy: 2, comfort: 2 },
      },
      {
        id: 'hot-chocolate',
        label: '☕ Hot chocolate',
        signal: { comfort: 5, romance: 4, emotionalIntensity: 2, suspense: 1, pace: 2 },
      },
      {
        id: 'tropical-cocktail',
        label: '🍹 Tropical cocktail',
        signal: { fantasy: 4, comedy: 5, pace: 4, romance: 3, suspense: 2 },
      },
    ],
  },
  {
    id: 'dessert',
    category: 'Dessert',
    prompt: 'Pick dessert.',
    answers: [
      {
        id: 'warm-brownie',
        label: '🍫 Warm brownie',
        signal: { comfort: 5, emotionalIntensity: 3, romance: 3, pace: 2, suspense: 1 },
      },
      {
        id: 'strawberry-shortcake',
        label: '🍓 Strawberry shortcake',
        signal: { romance: 4, comedy: 3, comfort: 4, emotionalIntensity: 1, suspense: 1 },
      },
      {
        id: 'creme-brulee',
        label: '🍮 Crème brûlée',
        signal: { romance: 5, emotionalIntensity: 4, suspense: 3, pace: 3, comfort: 2 },
      },
      {
        id: 'raspberry-sorbet',
        label: '🍧 Raspberry sorbet',
        signal: { comedy: 5, pace: 4, emotionalIntensity: 2, comfort: 2, fantasy: 2 },
      },
    ],
  },
  {
    id: 'weather',
    category: 'Weather',
    prompt: "How's your internal weather?",
    answers: [
      {
        id: 'sunny',
        label: '☀️ Sunny',
        signal: { comfort: 5, comedy: 4, emotionalIntensity: 1, suspense: 1, romance: 3 },
      },
      {
        id: 'cloudy',
        label: '☁️ Cloudy',
        signal: { emotionalIntensity: 3, comfort: 4, pace: 2, romance: 3, suspense: 2 },
      },
      {
        id: 'stormy',
        label: '⛈️ Stormy',
        signal: { emotionalIntensity: 5, suspense: 4, romance: 4, comfort: 2, pace: 4 },
      },
      {
        id: 'cold-crisp',
        label: '❄️ Cold & crisp',
        signal: { suspense: 5, pace: 4, emotionalIntensity: 4, comedy: 1, comfort: 1, romance: 1, fantasy: 2 },
      },
    ],
  },
  {
    id: 'travel',
    category: 'Travel',
    prompt: 'Where do you want to disappear?',
    answers: [
      {
        id: 'seaside-town',
        label: '🌊 A little seaside town',
        signal: { comfort: 5, pace: 2, romance: 4, suspense: 1, fantasy: 1 },
      },
      {
        id: 'big-city',
        label: '🏙️ Big city',
        signal: { romance: 4, pace: 4, comedy: 3, comfort: 3, fantasy: 2 },
      },
      {
        id: 'historic-place',
        label: '🏯 A historic place',
        signal: { fantasy: 4, suspense: 3, emotionalIntensity: 3, romance: 3, pace: 3 },
      },
      {
        id: 'mountain-cabin',
        label: '🌲 A remote mountain cabin',
        signal: { suspense: 4, emotionalIntensity: 4, pace: 2, comfort: 2, fantasy: 3, romance: 2, comedy: 1 },
      },
    ],
  },
  {
    id: 'evening',
    category: 'Evening vibe',
    prompt: 'What sounds best?',
    answers: [
      {
        id: 'bookstore',
        label: '📚 Wander a bookstore',
        signal: { pace: 2, comfort: 4, emotionalIntensity: 3, suspense: 1, fantasy: 1 },
      },
      {
        id: 'bar',
        label: '🍸 Hang out at a bar',
        signal: { romance: 5, comedy: 5, pace: 4, comfort: 3, emotionalIntensity: 2 },
      },
      {
        id: 'bath-bedtime',
        label: '🛁 Bath + early bedtime',
        signal: { comfort: 5, suspense: 1, emotionalIntensity: 1, pace: 1, romance: 3 },
      },
      {
        id: 'one-more-episode',
        label: '📺 "One more episode" until 2 a.m.',
        signal: { pace: 5, suspense: 5, emotionalIntensity: 4, comfort: 1, fantasy: 3, romance: 2, comedy: 2 },
      },
    ],
  },
  {
    id: 'story-hook',
    category: 'Story hook',
    prompt: "There's an exciting envelope on your desk. What's in it?",
    answers: [
      {
        id: 'love-letter',
        label: '💌 A love letter',
        signal: { romance: 5, emotionalIntensity: 3, comfort: 4, suspense: 1, comedy: 3 },
      },
      {
        id: 'tickets',
        label: '🎟️ Tickets to somewhere',
        signal: { fantasy: 4, pace: 4, comedy: 4, comfort: 3, romance: 2, emotionalIntensity: 2 },
      },
      {
        id: 'old-key',
        label: '🗝️ A strange old key',
        signal: { fantasy: 5, suspense: 4, emotionalIntensity: 3, pace: 3, comedy: 2, romance: 2, comfort: 1 },
      },
      {
        id: 'secret-info',
        label: '📁 Information I was definitely not supposed to see',
        signal: { suspense: 5, emotionalIntensity: 5, pace: 5, comfort: 1, comedy: 1, romance: 1, fantasy: 2 },
      },
    ],
  },
];

export const kdramaShows: KDramaShow[] = [
  {
    title: 'Hometown Cha-Cha-Cha',
    synopsis: 'A city dentist opens a clinic in a seaside village, where a resourceful local handyman keeps getting under her skin. Between nosy neighbors and unexpected friendships, starting over takes a romantic turn.',
    rating: 'loved',
    recommend: 'enthusiastically',
    note:
      "This show is lighthearted, human, and adorable. There isn't really intense drama and it's relaxing and heartwarming to watch.",
    vibe: 'Romantic, relaxing, bit of slice of life',
    rawProfile: {
      emotionalIntensity: '1 - Very light',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '1 - Very low',
      pace: 'Easygoing',
      comfort: '5 - Cozy',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Crash Course in Romance',
    synopsis: "A devoted mother enters the fiercely competitive world of private tutoring to help her daughter succeed. An unlikely connection with a celebrity math teacher brings romance, schoolyard politics, and trouble to her doorstep.",
    rating: 'loved',
    recommend: 'yes',
    note: 'Lovely show with unique characters, family dynamics, and some social commentary.',
    vibe: 'Romance, family',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '4',
      comedy: '3',
      suspense: '3',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Business Proposal',
    synopsis: 'A woman impersonates her friend on a blind date, determined to scare the man away. Discovering that he is her boss turns one outrageous favor into a tangled workplace romance.',
    rating: 'loved',
    recommend: 'yes',
    note: 'Really crazy plot, sort of silly, funny, entertaining.',
    vibe: 'Comedy, romance, fun',
    rawProfile: {
      emotionalIntensity: '1 - Very light',
      romance: '5 - Romance-forward',
      comedy: '5 - Very funny',
      suspense: '1 - Very low',
      pace: 'Fast',
      comfort: '4',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Mr. Queen',
    synopsis: 'A modern-day chef wakes up in the body of a queen in the Joseon era. Navigating a royal marriage and dangerous palace politics becomes a very unconventional mission to get home.',
    rating: 'loved',
    recommend: 'enthusiastically',
    note: 'A pretty out there premise, very funny and entertaining. The characters stay with you.',
    vibe: 'Romance + historical, comedy',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '4',
      comedy: '5 - Very funny',
      suspense: '4',
      pace: 'Fast',
      comfort: '3',
      fantasy: 'Some fantasy',
    },
  },
  {
    title: 'Extraordinary Attorney Woo',
    synopsis: 'A gifted autistic lawyer starts her career at a prestigious law firm, bringing an extraordinary perspective to unusual cases. Courtroom victories are only part of the story as she navigates colleagues, friendships, and first love.',
    rating: 'loved',
    recommend: 'yes',
    note:
      "This show explores a different court case and theme for each episode. It's really engaging and well made.",
    vibe: 'Engaging',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '2',
      comedy: '3',
      suspense: '2',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'King the Land',
    synopsis: 'A wealthy hotel heir who distrusts smiles clashes with an employee whose sunny hospitality is her greatest strength. An inheritance battle complicates the romance growing behind their professional rivalry.',
    rating: 'loved',
    recommend: 'maybe',
    note: 'I enjoyed the characters in this romance. Lots of steamy scenes and great chemistry.',
    vibe: 'Romance, comedy',
    rawProfile: {
      emotionalIntensity: '1 - Very light',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '1 - Very low',
      pace: 'Easygoing',
      comfort: '5 - Cozy',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Agent Kim Reactivated',
    synopsis: 'When his daughter disappears, an apparently ordinary father returns to the dangerous skills he thought he had left behind. His rescue mission exposes a past that powerful enemies would rather keep buried.',
    rating: 'loved',
    recommend: 'yes',
    note: 'This is an intense action show with a good amount of comedy thrown in.',
    vibe: 'Action, comedy, some intensity',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '1 - Barely any',
      comedy: '3',
      suspense: '5 - High',
      pace: 'Binge-y / propulsive',
      comfort: '2',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Our Sticky Love',
    synopsis: 'A prosecutor with amnesia finds herself in a rural village with a boxing coach who insists he is her boyfriend. Rebuilding her life means untangling his story, her missing memories, and a dangerous mystery.',
    rating: 'liked',
    recommend: 'maybe',
    note: 'A romance with lots of action, fun to watch.',
    vibe: 'Action, romance',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '3',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'When Life Gives You Tangerines',
    synopsis: 'On Jeju Island, a spirited young woman and her steadfast first love build a life through poverty, parenthood, and changing times. Their story spans decades, tracing the dreams and sacrifices that shape a family.',
    rating: 'loved',
    recommend: 'maybe',
    note:
      'This was an intense family saga that explored various relationships over a long period of time. Great acting. You will probably cry.',
    vibe: 'Emotional, touching',
    rawProfile: {
      emotionalIntensity: '5 - Intense',
      romance: '4',
      comedy: '2',
      suspense: '2',
      pace: 'Slow & lingering',
      comfort: '3',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Squid Game',
    synopsis: 'People drowning in debt enter a secret competition promising a life-changing fortune. Familiar childhood games become lethal contests, forcing desperate players to weigh survival against loyalty and humanity.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      "This show became an international phenoma, it's gritty, intense, and explores various deeper themes.",
    vibe: 'Gritty, intense',
    rawProfile: {
      emotionalIntensity: '5 - Intense',
      romance: '1 - Barely any',
      comedy: '1 - Not funny',
      suspense: '5 - High',
      pace: 'Binge-y / propulsive',
      comfort: '1 - Not comforting',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Queen of Tears',
    synopsis: 'A department-store heiress and her small-town lawyer husband have a marriage that looks perfect from the outside. As a crisis upends their lives, family ambitions and old wounds complicate a second chance at love.',
    rating: 'loved',
    recommend: 'yes',
    note: 'A unique post-wedding romance with lots of drama and intensity. An engaging watch with strong leads.',
    vibe: 'Romance, emotional',
    rawProfile: {
      emotionalIntensity: '5 - Intense',
      romance: '5 - Romance-forward',
      comedy: '3',
      suspense: '4',
      pace: 'Balanced',
      comfort: '2',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Teach You a Lesson',
    synopsis: 'A team of unconventional inspectors steps into schools where bullying, corruption, and powerful parents have overwhelmed the system. Their confrontational methods turn the fight to protect students and teachers into an action-packed reckoning.',
    rating: 'loved',
    recommend: 'maybe',
    note:
      'This show was so cathartic because it takes up the idea of righting wrongs in different contexts relating to the education system. Unrealistic but fun.',
    vibe: 'Cathartic, action, comedy',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '1 - Barely any',
      comedy: '2',
      suspense: '4',
      pace: 'Fast',
      comfort: '1 - Not comforting',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Crash Landing on You',
    synopsis: 'A South Korean heiress is blown across the border during a paragliding trip. A North Korean officer hides her while they search for a way home, risking far more than either expected.',
    rating: 'loved',
    recommend: 'enthusiastically',
    note: 'A classic for a reason. Memorable characters, ludicrous premise, intense in moments, lots of fun.',
    vibe: 'Romance, comedy',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '4',
      pace: 'Binge-y / propulsive',
      comfort: '4',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Bon Appétit, Your Majesty',
    synopsis: 'A French-trained chef is transported to the Joseon era and must cook for a feared king with an exacting palate. Modern recipes become her tools for surviving the royal kitchen and an unexpected romance.',
    rating: 'loved',
    recommend: 'enthusiastically',
    note:
      'This show has a time travel component mixed with a heavy amount of cooking and exploration of food. Very engaging watch, easy to binge.',
    vibe: 'Food + romance + historical drama',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '4',
      comedy: '4',
      suspense: '4',
      pace: 'Fast',
      comfort: '4',
      fantasy: 'Some fantasy',
    },
  },
  {
    title: 'Tastefully Yours',
    synopsis: 'An ambitious restaurant heir seeking culinary prestige meets a stubborn chef running a small restaurant on her own terms. Their competing ideas about food lead to collaboration, conflict, and a romance neither planned.',
    rating: 'loved',
    recommend: 'yes',
    note:
      'A enjoyable watch about a chef and an entrepreneur figuring out what matters to them and create their own successful restaurant.',
    vibe: 'Food + romance',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '4',
      comedy: '3',
      suspense: '2',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Doctor Cha',
    synopsis: 'After twenty years spent caring for her family, a woman returns to medicine as a first-year resident. Reclaiming her career forces her to reconsider her marriage and the life she put on hold.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      "A unique show centered on a more mature character finding herself after finding out about her spouse having an affair. It's enjoyable watching her evolve.",
    vibe: 'Family, personal growth',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '2',
      comedy: '4',
      suspense: '2',
      pace: 'Balanced',
      comfort: '3',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Little Women',
    synopsis: 'Three sisters determined to escape poverty become entangled with a wealthy and politically powerful family. Hidden fortunes and dangerous secrets test their loyalty as they try to find a way out of a sprawling conspiracy.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      "I don't remember the plot clearly any more as it was sort of complicated, but it was definitely an intense show. There were characters to root for and it was binge worthy.",
    vibe: 'Drama, family, crime',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '1 - Barely any',
      comedy: '1 - Not funny',
      suspense: '5 - High',
      pace: 'Binge-y / propulsive',
      comfort: '1 - Not comforting',
      fantasy: 'Mostly grounded',
    },
  },
  {
    title: 'Doctor Slump',
    synopsis: 'Two former school rivals reunite just as their successful medical careers fall apart. Living nearby, they find unexpected comfort in each other while learning how to rebuild their lives beyond achievement and ambition.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      "This was a intriguing premise where 2 high achieving medical professionals go through a mental health slump and find their way and each other. It's heart warming and enjoyable to see their unique chemistry.",
    vibe: 'Romance, mental health',
    rawProfile: {
      emotionalIntensity: '3 - Medium',
      romance: '4',
      comedy: '4',
      suspense: '2',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'When the Camellia Blooms',
    synopsis: 'A single mother running a small-town bar faces relentless gossip and the attention of an earnest local policeman. As their romance grows, a serial killer casts a shadow over her hard-won independence.',
    rating: 'loved',
    recommend: 'yes',
    note:
      'There are some fun characters in a small town with certain simplicity, yet there is a serial killer on the loose and it gets intense. Amazing acting by the kid. Binge worthy.',
    vibe: 'Romance, suspense',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '4',
      comedy: '3',
      suspense: '4',
      pace: 'Balanced',
      comfort: '4',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'When the Phone Rings',
    synopsis: 'A political spokesman and his nonverbal wife maintain a carefully controlled marriage of convenience. A threatening phone call shatters that arrangement, drawing them into a kidnapping mystery and secrets neither can keep hidden.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      'This was a decent watch which involved mysterious phone calls, a conspiracy, and a romance against all odds.',
    vibe: 'Romance, suspense',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '5 - Romance-forward',
      comedy: '1 - Not funny',
      suspense: '5 - High',
      pace: 'Binge-y / propulsive',
      comfort: '2',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Welcome to Samdal-ri',
    synopsis: 'After her photography career collapses, a woman returns to her hometown on Jeju Island. Reuniting with her family and the childhood sweetheart she left behind opens a complicated path toward a fresh start.',
    rating: 'liked',
    recommend: 'maybe',
    note:
      "This show explores a lot of interesting themes around family, self, and forgiveness. It's intense, funny at times. Set in Jeju.",
    vibe: 'Romance, family, home',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '4',
      comedy: '3',
      suspense: '1 - Very low',
      pace: 'Easygoing',
      comfort: '4',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Dynamite Kiss',
    synopsis: 'A brief romance on Jeju ends before either person can explain what it meant. They meet again at work, where she has posed as a married mother to land a job and he is her boss.',
    rating: 'fine',
    recommend: 'maybe',
    note: 'Decent, sort of funny/entertaining show which has some drama in parts.',
    vibe: 'Romance',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '1 - Very low',
      pace: 'Fast',
      comfort: '4',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Love to Hate You',
    synopsis: 'A fiercely independent lawyer and a famous actor have equally strong reasons to distrust romance. Forced into a dating arrangement, their competitive sparring starts to undermine everything they think they know about each other.',
    rating: 'liked',
    recommend: 'maybe',
    note: 'I enjoyed the reversal of gender stereotypes with the main characters in this show. It was a fun watch.',
    vibe: 'Quirky romance',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '5 - Romance-forward',
      comedy: '5 - Very funny',
      suspense: '1 - Very low',
      pace: 'Fast',
      comfort: '4',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'The Potato Lab',
    synopsis: 'A passionate scientist has built her life around a rural potato research lab. The arrival of a rigid new director threatens her familiar world and sparks an unexpected workplace romance.',
    rating: 'fine',
    recommend: 'maybe',
    note:
      "Unique setting around a potato agriculture research lab and a workplace romance. This was engaging, but the end was quite abrupt and didn't have much of a pay off.",
    vibe: 'Quirky romance',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '4',
      comedy: '4',
      suspense: '1 - Very low',
      pace: 'Easygoing',
      comfort: '4',
      fantasy: 'Heightened / quirky',
    },
  },
  {
    title: 'Typhoon Family',
    synopsis: "During the 1997 financial crisis, a carefree young man takes over his father's struggling trading company. Keeping the business alive becomes a crash course in responsibility, loyalty, and the people who make a family.",
    rating: 'loved',
    recommend: 'yes',
    note:
      "This was a unique show centered around a young man navigating an economic crisis while learning the ropes of his father's business. It can be intense in moments, but a very fun show. Binge worthy.",
    vibe: 'Business, family, drama',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '3',
      comedy: '2',
      suspense: '3',
      pace: 'Balanced',
      comfort: '3',
      fantasy: 'Grounded',
    },
  },
  {
    title: 'Memories of the Alhambra',
    synopsis: 'A tech executive travels to Granada to pursue a revolutionary augmented-reality game and meets a young hostel owner. As the game begins crossing into real life, the search for its missing creator becomes a fight for survival.',
    rating: 'fine',
    recommend: 'maybe',
    note: 'A very unique premise around a game developer/investor getting increasingly sucked in a very realistic game.',
    vibe: 'Fantasy, drama',
    rawProfile: {
      emotionalIntensity: '4',
      romance: '3',
      comedy: '1 - Not funny',
      suspense: '4',
      pace: 'Binge-y / propulsive',
      comfort: '1 - Not comforting',
      fantasy: 'Full fantasy / speculative',
    },
  },
  {
    title: 'Her Private Life',
    synopsis: 'An accomplished art curator keeps her devotion to a K-pop idol carefully hidden from her professional life. A new gallery director and an unexpected romantic arrangement threaten the boundaries between her two worlds.',
    rating: 'fine',
    recommend: 'maybe',
    note:
      "Unique glimpse into the art world and an interesting exploration of what's under the surface for our characters. Fun romance.",
    vibe: 'Romance, drama',
    rawProfile: {
      emotionalIntensity: '2',
      romance: '5 - Romance-forward',
      comedy: '4',
      suspense: '1 - Very low',
      pace: 'Easygoing',
      comfort: '4',
      fantasy: 'Mostly grounded',
    },
  },
];

function parseNumber(value: string) {
  const match = value.match(/[1-5]/);
  return match ? Number(match[0]) : QUIZ_SCORING.neutralPreference;
}

function parsePace(value: string) {
  const paceValues: Record<string, number> = {
    'Slow & lingering': 1,
    Easygoing: 2,
    Balanced: 3,
    Fast: 4,
    'Binge-y / propulsive': 5,
  };

  return paceValues[value] ?? QUIZ_SCORING.neutralPreference;
}

function parseFantasy(value: string) {
  const fantasyValues: Record<string, number> = {
    Grounded: 1,
    'Mostly grounded': 2,
    'Heightened / quirky': 3,
    'Some fantasy': 4,
    'Full fantasy / speculative': 5,
  };

  return fantasyValues[value] ?? QUIZ_SCORING.neutralPreference;
}

export function normalizeShowProfile(show: KDramaShow): DimensionProfile {
  return {
    emotionalIntensity: parseNumber(show.rawProfile.emotionalIntensity),
    romance: parseNumber(show.rawProfile.romance),
    comedy: parseNumber(show.rawProfile.comedy),
    suspense: parseNumber(show.rawProfile.suspense),
    pace: parsePace(show.rawProfile.pace),
    comfort: parseNumber(show.rawProfile.comfort),
    fantasy: parseFantasy(show.rawProfile.fantasy),
  };
}

export function buildPreferenceProfile(answerIds: Record<string, string>): DimensionProfile {
  const totals = Object.fromEntries(quizDimensions.map((dimension) => [dimension, 0])) as DimensionProfile;
  const counts = Object.fromEntries(quizDimensions.map((dimension) => [dimension, 0])) as DimensionProfile;

  kdramaQuizQuestions.forEach((question) => {
    const answer = question.answers.find((candidate) => candidate.id === answerIds[question.id]);

    if (!answer) {
      return;
    }

    const weight = QUIZ_SCORING.questionWeights[question.id as keyof typeof QUIZ_SCORING.questionWeights] ?? 1;

    quizDimensions.forEach((dimension) => {
      const value = answer.signal[dimension];

      if (typeof value === 'number') {
        totals[dimension] += value * weight;
        counts[dimension] += weight;
      }
    });
  });

  return Object.fromEntries(
    quizDimensions.map((dimension) => {
      const average = counts[dimension] > 0 ? totals[dimension] / counts[dimension] : QUIZ_SCORING.neutralPreference;
      // Preserve distinct moods instead of flattening varied answers toward the midpoint.
      const preference = QUIZ_SCORING.neutralPreference +
        (average - QUIZ_SCORING.neutralPreference) * QUIZ_SCORING.preferenceContrast;

      return [dimension, Math.max(1, Math.min(5, preference))];
    }),
  ) as DimensionProfile;
}

export function profileDistance(firstProfile: DimensionProfile, secondProfile: DimensionProfile) {
  const totalWeight = quizDimensions.reduce((sum, dimension) => sum + QUIZ_SCORING.dimensionWeights[dimension], 0);

  return (
    quizDimensions.reduce((sum, dimension) => {
      const difference = Math.abs(firstProfile[dimension] - secondProfile[dimension]);
      return sum + difference * QUIZ_SCORING.dimensionWeights[dimension];
    }, 0) / totalWeight
  );
}

export function scoreShows(preferenceProfile: DimensionProfile): ScoredShow[] {
  return kdramaShows
    .map((show) => {
      const profile = normalizeShowProfile(show);
      const distance = profileDistance(preferenceProfile, profile);
      const score = 10 - distance * QUIZ_SCORING.fitScale;

      return { show, profile, score, distance };
    })
    .sort((first, second) => second.score - first.score);
}

export function getStrongestDimensions(preferenceProfile: DimensionProfile, limit = 3) {
  return [...quizDimensions]
    .map((dimension) => ({
      dimension,
      strength: Math.abs(preferenceProfile[dimension] - QUIZ_SCORING.neutralPreference),
      direction: preferenceProfile[dimension] >= QUIZ_SCORING.neutralPreference ? 'higher' : 'lower',
    }))
    .sort((first, second) => second.strength - first.strength)
    .slice(0, limit);
}

export function selectRecommendations(answerIds: Record<string, string>) {
  const preferenceProfile = buildPreferenceProfile(answerIds);
  const scoredShows = scoreShows(preferenceProfile);
  const match = scoredShows[0];
  const alsoTry =
    scoredShows.find((candidate) => {
      if (candidate.show.title === match.show.title) {
        return false;
      }

      const distanceFromMatch = profileDistance(candidate.profile, match.profile);

      return (
        distanceFromMatch >= QUIZ_SCORING.diversity.alsoTryMinimumProfileDistance &&
        match.score - candidate.score <= QUIZ_SCORING.diversity.alsoTryMaxScoreGap
      );
    }) ?? scoredShows.find((candidate) => candidate.show.title !== match.show.title)!;

  const strongestDimension = getStrongestDimensions(preferenceProfile, 1)[0]?.dimension ?? 'comfort';
  const wildcard =
    scoredShows
      .filter((candidate) => ![match.show.title, alsoTry.show.title].includes(candidate.show.title))
      .map((candidate) => {
        const distanceFromMatch = profileDistance(candidate.profile, match.profile);
        const distinctiveAlignment = 5 - Math.abs(candidate.profile[strongestDimension] - preferenceProfile[strongestDimension]);
        const wildcardScore =
          candidate.score +
          distinctiveAlignment * QUIZ_SCORING.diversity.wildcardAlignmentWeight +
          Math.max(distanceFromMatch, QUIZ_SCORING.diversity.wildcardMinimumProfileDistance) *
            QUIZ_SCORING.diversity.wildcardStretchWeight;

        return { candidate, wildcardScore };
      })
      .sort((first, second) => second.wildcardScore - first.wildcardScore)[0]?.candidate ??
    scoredShows.find((candidate) => ![match.show.title, alsoTry.show.title].includes(candidate.show.title))!;

  return {
    preferenceProfile,
    strongestDimensions: getStrongestDimensions(preferenceProfile),
    recommendations: {
      match,
      alsoTry,
      wildcard,
    },
  };
}
