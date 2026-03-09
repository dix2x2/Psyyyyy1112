export interface Question {
  id: string;
  text: string;
  distortion: string;
}

export const cognitiveDistortionsQuestions: Question[] = [
  { id: 'cd1', text: 'I often assume that others are reacting negatively to me, even when there is no definite evidence.', distortion: 'Mind Reading' },
  { id: 'cd2', text: 'I tend to predict that things will turn out badly, treating my prediction as a fact.', distortion: 'Fortune Telling' },
  { id: 'cd3', text: 'If I fall short of perfection, I view myself as a total failure.', distortion: 'All-or-Nothing Thinking' },
  { id: 'cd4', text: 'I often dwell on a single negative detail, ignoring all the positive things that happened.', distortion: 'Mental Filter' },
  { id: 'cd5', text: 'When something good happens, I tell myself it doesn\'t count or was just luck.', distortion: 'Discounting the Positive' },
  { id: 'cd6', text: 'I exaggerate the importance of my mistakes and minimize the importance of my achievements.', distortion: 'Magnification/Minimization' },
  { id: 'cd7', text: 'I assume that my negative emotions reflect the way things really are ("I feel it, therefore it must be true").', distortion: 'Emotional Reasoning' },
  { id: 'cd8', text: 'I frequently use words like "should," "must," or "ought" to motivate myself or judge others.', distortion: 'Should Statements' },
  { id: 'cd9', text: 'I attach a negative label to myself or others based on a single mistake (e.g., "I\'m a loser").', distortion: 'Labeling' },
  { id: 'cd10', text: 'I blame myself for things that are not entirely under my control.', distortion: 'Personalization' },
  { id: 'cd11', text: 'I view a single negative event as a never-ending pattern of defeat.', distortion: 'Overgeneralization' },
  { id: 'cd12', text: 'I believe I know what others are thinking about me without asking them.', distortion: 'Mind Reading' },
  { id: 'cd13', text: 'I feel that if I am not completely successful, I am completely worthless.', distortion: 'All-or-Nothing Thinking' },
  { id: 'cd14', text: 'I hold myself responsible for other people\'s feelings or behaviors.', distortion: 'Personalization' },
  { id: 'cd15', text: 'I expect disaster to strike, no matter what.', distortion: 'Fortune Telling' }
];

export const cognitiveDistortionsBreakdown = {
  'Mind Reading': {
    description: 'Assuming you know what people think without having sufficient evidence of their thoughts.',
    implications: 'This can lead to unnecessary social anxiety, defensiveness, and strained relationships. Try asking people directly instead of assuming.'
  },
  'Fortune Telling': {
    description: 'Predicting the future negatively: expecting that things will turn out badly and feeling convinced that your prediction is an already-established fact.',
    implications: 'This creates a self-fulfilling prophecy of anxiety and avoidance. Remember that the future is uncertain and past failures do not guarantee future ones.'
  },
  'All-or-Nothing Thinking': {
    description: 'Viewing situations in only two categories instead of on a continuum (e.g., if a performance falls short of perfect, you see yourself as a total failure).',
    implications: 'This perfectionistic mindset can lead to severe procrastination, low self-esteem, and giving up easily. Try to find the "gray areas" in situations.'
  },
  'Mental Filter': {
    description: 'Dwelling on a single negative detail exclusively so that your vision of all reality becomes darkened.',
    implications: 'This prevents you from enjoying successes and keeps you stuck in a negative mood. Practice actively listing positive events to balance your perspective.'
  },
  'Discounting the Positive': {
    description: 'Unreasonably telling yourself that positive experiences, deeds, or qualities do not count.',
    implications: 'This strips the joy from your achievements and maintains a negative self-image despite evidence to the contrary. Accept compliments with a simple "thank you."'
  },
  'Magnification/Minimization': {
    description: 'Exaggerating the importance of things (such as your goof-up) or inappropriately shrinking things until they appear tiny (your own desirable qualities).',
    implications: 'This distorts your self-evaluation. Try to look at your mistakes and successes through the eyes of a neutral observer.'
  },
  'Emotional Reasoning': {
    description: 'Assuming that because you feel a certain way, it must be true (e.g., "I feel like an idiot, so I must be one").',
    implications: 'Emotions are not facts. They are reactions to your thoughts. When you feel overwhelmed, try to identify the thought causing the emotion and test its validity.'
  },
  'Should Statements': {
    description: 'Trying to motivate yourself with "shoulds" and "shouldn\'ts," as if you had to be whipped and punished before you could be expected to do anything.',
    implications: 'This leads to guilt and frustration. When directed at others, it leads to anger and resentment. Try replacing "should" with "prefer" or "would like to."'
  },
  'Labeling': {
    description: 'An extreme form of overgeneralization. Instead of describing your error, you attach a negative label to yourself.',
    implications: 'Labels are highly irrational because you are not your behavior. You are a human being who makes mistakes. Focus on the specific behavior, not the person.'
  },
  'Personalization': {
    description: 'Seeing yourself as the cause of some negative external event which in fact you were not primarily responsible for.',
    implications: 'This leads to immense guilt and a crushing sense of responsibility. Recognize that other people\'s actions are their own responsibility, not yours.'
  },
  'Overgeneralization': {
    description: 'Seeing a single negative event as a never-ending pattern of defeat.',
    implications: 'This turns a temporary setback into a permanent state. Use precise language (e.g., "I failed this specific test" rather than "I always fail").'
  }
};

export function calculateCognitiveDistortionsScore(answers: Record<string, number>) {
  const scores: Record<string, number> = {};
  let totalScore = 0;
  const maxPossibleTotal = 15 * 5; // 15 questions, max score 5 each

  // Initialize scores
  Object.keys(cognitiveDistortionsBreakdown).forEach(key => {
    scores[key] = 0;
  });

  cognitiveDistortionsQuestions.forEach(q => {
    const answer = answers[q.id];
    if (answer) {
      scores[q.distortion] += answer;
      totalScore += answer;
    }
  });

  // Calculate top 3 distortions
  const sortedDistortions = Object.entries(scores)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([distortion, score]) => ({
      distortion,
      score,
      details: cognitiveDistortionsBreakdown[distortion as keyof typeof cognitiveDistortionsBreakdown]
    }));

  const severity = 
    totalScore < 30 ? 'Low' :
    totalScore < 45 ? 'Moderate' :
    totalScore < 60 ? 'High' : 'Severe';

  return {
    totalScore,
    maxPossibleTotal,
    severity,
    topDistortions: sortedDistortions
  };
}
