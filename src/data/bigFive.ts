export interface Question {
  id: string;
  text: string;
  trait: string;
  direction: 1 | -1;
}

export const bigFiveQuestions: Question[] = [
  { id: 'e1', text: 'I am the life of the party.', trait: 'E', direction: 1 },
  { id: 'a1', text: 'I feel little concern for others.', trait: 'A', direction: -1 },
  { id: 'c1', text: 'I am always prepared.', trait: 'C', direction: 1 },
  { id: 'n1', text: 'I get stressed out easily.', trait: 'N', direction: 1 },
  { id: 'o1', text: 'I have a rich vocabulary.', trait: 'O', direction: 1 },
  { id: 'e2', text: "I don't talk a lot.", trait: 'E', direction: -1 },
  { id: 'a2', text: 'I am interested in people.', trait: 'A', direction: 1 },
  { id: 'c2', text: 'I leave my belongings around.', trait: 'C', direction: -1 },
  { id: 'n2', text: 'I am relaxed most of the time.', trait: 'N', direction: -1 },
  { id: 'o2', text: 'I have difficulty understanding abstract ideas.', trait: 'O', direction: -1 },
  { id: 'e3', text: 'I feel comfortable around people.', trait: 'E', direction: 1 },
  { id: 'a3', text: 'I insult people.', trait: 'A', direction: -1 },
  { id: 'c3', text: 'I pay attention to details.', trait: 'C', direction: 1 },
  { id: 'n3', text: 'I worry about things.', trait: 'N', direction: 1 },
  { id: 'o3', text: 'I have a vivid imagination.', trait: 'O', direction: 1 },
  { id: 'e4', text: 'I keep in the background.', trait: 'E', direction: -1 },
  { id: 'a4', text: "I sympathize with others' feelings.", trait: 'A', direction: 1 },
  { id: 'c4', text: 'I make a mess of things.', trait: 'C', direction: -1 },
  { id: 'n4', text: 'I seldom feel blue.', trait: 'N', direction: -1 },
  { id: 'o4', text: 'I am not interested in abstract ideas.', trait: 'O', direction: -1 },
  { id: 'e5', text: 'I start conversations.', trait: 'E', direction: 1 },
  { id: 'a5', text: "I am not interested in other people's problems.", trait: 'A', direction: -1 },
  { id: 'c5', text: 'I get chores done right away.', trait: 'C', direction: 1 },
  { id: 'n5', text: 'I am easily disturbed.', trait: 'N', direction: 1 },
  { id: 'o5', text: 'I have excellent ideas.', trait: 'O', direction: 1 },
  { id: 'e6', text: 'I have little to say.', trait: 'E', direction: -1 },
  { id: 'a6', text: 'I have a soft heart.', trait: 'A', direction: 1 },
  { id: 'c6', text: 'I often forget to put things back in their proper place.', trait: 'C', direction: -1 },
  { id: 'n6', text: 'I get upset easily.', trait: 'N', direction: 1 },
  { id: 'o6', text: 'I do not have a good imagination.', trait: 'O', direction: -1 },
  { id: 'e7', text: 'I talk to a lot of different people at parties.', trait: 'E', direction: 1 },
  { id: 'a7', text: 'I am not really interested in others.', trait: 'A', direction: -1 },
  { id: 'c7', text: 'I like order.', trait: 'C', direction: 1 },
  { id: 'n7', text: 'I change my mood a lot.', trait: 'N', direction: 1 },
  { id: 'o7', text: 'I am quick to understand things.', trait: 'O', direction: 1 },
  { id: 'e8', text: "I don't like to draw attention to myself.", trait: 'E', direction: -1 },
  { id: 'a8', text: 'I take time out for others.', trait: 'A', direction: 1 },
  { id: 'c8', text: 'I shirk my duties.', trait: 'C', direction: -1 },
  { id: 'n8', text: 'I have frequent mood swings.', trait: 'N', direction: 1 },
  { id: 'o8', text: 'I use difficult words.', trait: 'O', direction: 1 },
  { id: 'e9', text: "I don't mind being the center of attention.", trait: 'E', direction: 1 },
  { id: 'a9', text: "I feel others' emotions.", trait: 'A', direction: 1 },
  { id: 'c9', text: 'I follow a schedule.', trait: 'C', direction: 1 },
  { id: 'n9', text: 'I get irritated easily.', trait: 'N', direction: 1 },
  { id: 'o9', text: 'I spend time reflecting on things.', trait: 'O', direction: 1 },
  { id: 'e10', text: 'I am quiet around strangers.', trait: 'E', direction: -1 },
  { id: 'a10', text: 'I make people feel at ease.', trait: 'A', direction: 1 },
  { id: 'c10', text: 'I am exacting in my work.', trait: 'C', direction: 1 },
  { id: 'n10', text: 'I often feel blue.', trait: 'N', direction: 1 },
  { id: 'o10', text: 'I am full of ideas.', trait: 'O', direction: 1 },
];

export const bigFiveBreakdown = {
  O: {
    name: 'Openness to Experience',
    description: 'Measures your willingness to try new things, your imagination, and your intellectual curiosity.',
    low: 'You tend to be pragmatic, data-driven, and prefer routine over novelty. You likely value tradition and the "tried-and-true" methods over abstract or theoretical concepts. While this makes you reliable and grounded, you might sometimes miss out on creative solutions.',
    medium: 'You strike a balance between the practical and the abstract. You are open to new experiences when they make sense, but you don\'t seek novelty just for the sake of it. You appreciate both tradition and innovation.',
    high: 'You are highly imaginative, curious, and open-minded. You likely enjoy art, abstract concepts, and exploring new ideas or places. You are a creative thinker who thrives on variety, though you might sometimes struggle with highly repetitive or mundane tasks.',
    implications: 'In the workplace, high Openness correlates with success in creative or strategic roles, while low Openness excels in operational, detail-oriented roles requiring consistency.'
  },
  C: {
    name: 'Conscientiousness',
    description: 'Measures your reliability, organization, and goal-directed behavior.',
    low: 'You are flexible, spontaneous, and adaptable. You likely prefer to "go with the flow" rather than stick to a rigid schedule. While this makes you great at handling sudden changes, you might struggle with long-term planning, deadlines, or maintaining deep focus on tedious tasks.',
    medium: 'You are reasonably organized but not obsessive about it. You can meet deadlines and keep things in order, but you also know when to relax your standards and be spontaneous.',
    high: 'You are highly organized, disciplined, and detail-oriented. You prefer planned rather than spontaneous behavior. You are reliable and driven by a strong sense of duty. However, you might sometimes be perceived as stubborn or overly perfectionistic.',
    implications: 'Conscientiousness is the strongest predictor of occupational performance across all job types. High scorers are excellent at execution, while lower scorers may need external structures to stay on track.'
  },
  E: {
    name: 'Extraversion',
    description: 'Measures your sociability, assertiveness, and the extent to which you draw energy from social interactions.',
    low: 'You are introverted. You draw energy from solitary activities or small, intimate gatherings. You likely prefer listening over speaking in large groups and think before you act. You are not necessarily anti-social, but social stimulation drains your battery faster.',
    medium: 'You are an ambivert. You enjoy social interaction but also require alone time to recharge. You can adapt to being the center of attention or staying in the background depending on the context and your current energy levels.',
    high: 'You are highly extraverted. You draw energy from being around others, enjoy being the center of attention, and are likely assertive and talkative. You thrive in fast-paced, highly social environments and tend to act quickly.',
    implications: 'Extraverts often excel in sales, leadership, and public-facing roles. Introverts often excel in roles requiring deep, uninterrupted focus, analytical thinking, and one-on-one relationship building.'
  },
  A: {
    name: 'Agreeableness',
    description: 'Measures your tendency to be compassionate, cooperative, and trusting toward others.',
    low: 'You are competitive, critical, and skeptical. You prioritize objective truth and your own interests over group harmony. While this can make you an excellent negotiator or critical thinker who isn\'t afraid to challenge the status quo, you might sometimes be perceived as blunt or uncooperative.',
    medium: 'You are generally warm and cooperative, but you know how to stand your ground when necessary. You value harmony but won\'t compromise your core boundaries just to please others.',
    high: 'You are highly empathetic, altruistic, and cooperative. You value social harmony and are likely very trusting and forgiving. You are a natural team player and caregiver. However, you might sometimes struggle to assert your own needs or engage in necessary conflict.',
    implications: 'High agreeableness is excellent for caregiving, teaching, and collaborative roles. Low agreeableness can be advantageous in highly competitive environments, negotiations, or roles requiring objective, tough decisions.'
  },
  N: {
    name: 'Neuroticism (Emotional Stability)',
    description: 'Measures your tendency to experience negative emotions like anxiety, anger, or depression in response to stress.',
    low: 'You are emotionally stable, resilient, and calm under pressure. You rarely experience severe mood swings and tend to bounce back quickly from setbacks. You handle stress well, though you might sometimes under-react to genuine threats.',
    medium: 'You experience a normal range of human emotions. You get stressed by genuinely stressful situations but generally maintain your composure. You have a balanced emotional reactivity.',
    high: 'You are highly sensitive to stress and environmental stimuli. You likely experience emotions intensely and may frequently feel anxious, frustrated, or sad. While this means you might struggle with stress management, it also often correlates with high empathy, vigilance, and a deep capacity for emotional understanding.',
    implications: 'Lower neuroticism is generally beneficial for high-stress jobs. However, higher neuroticism can be an asset in roles requiring high vigilance, risk assessment, or deep emotional attunement to others.'
  }
};

export function calculateBigFiveScore(answers: Record<string, number>) {
  const scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  const maxScorePerTrait = 10 * 5; // 10 questions, max 5 points each
  const minScorePerTrait = 10 * 1; // 10 questions, min 1 point each

  bigFiveQuestions.forEach(q => {
    const answer = answers[q.id];
    if (answer) {
      // If direction is 1, score is answer (1-5)
      // If direction is -1, score is reversed (6 - answer)
      const score = q.direction === 1 ? answer : 6 - answer;
      scores[q.trait as keyof typeof scores] += score;
    }
  });

  // Normalize to 0-100 percentage
  const normalized = {
    O: Math.round(((scores.O - minScorePerTrait) / (maxScorePerTrait - minScorePerTrait)) * 100),
    C: Math.round(((scores.C - minScorePerTrait) / (maxScorePerTrait - minScorePerTrait)) * 100),
    E: Math.round(((scores.E - minScorePerTrait) / (maxScorePerTrait - minScorePerTrait)) * 100),
    A: Math.round(((scores.A - minScorePerTrait) / (maxScorePerTrait - minScorePerTrait)) * 100),
    N: Math.round(((scores.N - minScorePerTrait) / (maxScorePerTrait - minScorePerTrait)) * 100),
  };

  return normalized;
}
