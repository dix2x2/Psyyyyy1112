export interface EnneagramQuestion {
  id: string;
  text: string;
  type: number; // 1-9
}

export const enneagramQuestions: EnneagramQuestion[] = [
  // Type 1: The Reformer
  { id: 'enn1_1', text: 'I have a strong inner critic that tells me when I am doing things wrong.', type: 1 },
  { id: 'enn1_2', text: 'I strive for perfection and feel frustrated when things fall short of my standards.', type: 1 },
  { id: 'enn1_3', text: 'It is very important to me to be ethical, responsible, and do the "right" thing.', type: 1 },
  { id: 'enn1_4', text: 'I often feel resentful when others don\'t take their responsibilities as seriously as I do.', type: 1 },
  
  // Type 2: The Helper
  { id: 'enn2_1', text: 'I am highly attuned to the needs of others and often put them before my own.', type: 2 },
  { id: 'enn2_2', text: 'I want to be liked and needed by the people I care about.', type: 2 },
  { id: 'enn2_3', text: 'I sometimes feel unappreciated for all the things I do for others.', type: 2 },
  { id: 'enn2_4', text: 'I find it difficult to ask for help or express my own needs directly.', type: 2 },

  // Type 3: The Achiever
  { id: 'enn3_1', text: 'I am highly driven to succeed and achieve my goals.', type: 3 },
  { id: 'enn3_2', text: 'I care a lot about how others perceive me and want to appear successful.', type: 3 },
  { id: 'enn3_3', text: 'I am very adaptable and can change my persona to fit different situations.', type: 3 },
  { id: 'enn3_4', text: 'I sometimes fear that I am only valued for what I accomplish, not who I am.', type: 3 },

  // Type 4: The Individualist
  { id: 'enn4_1', text: 'I feel fundamentally different from other people and often feel misunderstood.', type: 4 },
  { id: 'enn4_2', text: 'I experience emotions very deeply and value authenticity above all else.', type: 4 },
  { id: 'enn4_3', text: 'I often long for what is missing in my life and can be prone to melancholy.', type: 4 },
  { id: 'enn4_4', text: 'I want to express my unique identity and avoid being ordinary.', type: 4 },

  // Type 5: The Investigator
  { id: 'enn5_1', text: 'I need a lot of alone time to recharge and process my thoughts.', type: 5 },
  { id: 'enn5_2', text: 'I want to understand how the world works and gather as much knowledge as possible.', type: 5 },
  { id: 'enn5_3', text: 'I often feel overwhelmed by the emotional demands of others.', type: 5 },
  { id: 'enn5_4', text: 'I prefer to observe situations from the sidelines rather than jumping right in.', type: 5 },

  // Type 6: The Loyalist
  { id: 'enn6_1', text: 'I am always anticipating potential problems and thinking about what could go wrong.', type: 6 },
  { id: 'enn6_2', text: 'I value security, loyalty, and having a support system I can trust.', type: 6 },
  { id: 'enn6_3', text: 'I often struggle with self-doubt and look to external authorities for guidance.', type: 6 },
  { id: 'enn6_4', text: 'I can be very skeptical and questioning, especially of new people or ideas.', type: 6 },

  // Type 7: The Enthusiast
  { id: 'enn7_1', text: 'I am always looking for the next exciting experience or adventure.', type: 7 },
  { id: 'enn7_2', text: 'I dislike feeling trapped, bored, or limited in my options.', type: 7 },
  { id: 'enn7_3', text: 'I tend to focus on the positive and reframe negative situations to avoid pain.', type: 7 },
  { id: 'enn7_4', text: 'I have many interests and sometimes struggle to commit to just one thing.', type: 7 },

  // Type 8: The Challenger
  { id: 'enn8_1', text: 'I am strong-willed, assertive, and not afraid of confrontation.', type: 8 },
  { id: 'enn8_2', text: 'I want to be in control of my own life and resist being controlled by others.', type: 8 },
  { id: 'enn8_3', text: 'I instinctively protect the weak and stand up against injustice.', type: 8 },
  { id: 'enn8_4', text: 'I sometimes struggle to show vulnerability or admit when I am wrong.', type: 8 },

  // Type 9: The Peacemaker
  { id: 'enn9_1', text: 'I strive for inner peace and try to avoid conflict at all costs.', type: 9 },
  { id: 'enn9_2', text: 'I can easily see all sides of an issue and often merge with others\' opinions.', type: 9 },
  { id: 'enn9_3', text: 'I sometimes struggle to assert my own wants and needs, preferring to go with the flow.', type: 9 },
  { id: 'enn9_4', text: 'I can be prone to procrastination or numbing out when I feel overwhelmed.', type: 9 },
];

export const enneagramTypes: Record<number, {
  name: string;
  role: string;
  description: string;
  coreDesire: string;
  coreFear: string;
  coreMotivation: string;
  strengths: string[];
  weaknesses: string[];
  researchInsights: string[];
}> = {
  1: {
    name: 'Type 1',
    role: 'The Reformer',
    description: 'Principled, purposeful, self-controlled, and perfectionistic. Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake.',
    coreDesire: 'To be good, to have integrity, to be balanced.',
    coreFear: 'Of being corrupt/evil, defective.',
    coreMotivation: 'Want to be right, to strive higher and improve everything, to be consistent with their ideals, to justify themselves, to be beyond criticism so as not to be condemned by anyone.',
    strengths: ['Ethical and reliable', 'Detail-oriented and organized', 'Idealistic and driven to improve', 'Self-disciplined'],
    weaknesses: ['Prone to perfectionism and rigidity', 'Can be highly critical of self and others', 'Struggle with repressed anger (resentment)', 'May have unrealistic expectations'],
    researchInsights: [
      'Research links Type 1 to high Conscientiousness in the Big Five model, particularly the facets of Orderliness and Dutifulness.',
      'Studies suggest Ones often use reaction formation as a defense mechanism, turning unacceptable impulses into their opposites.',
      'Clinical observations note that Ones are susceptible to obsessive-compulsive tendencies when under severe stress.'
    ]
  },
  2: {
    name: 'Type 2',
    role: 'The Helper',
    description: 'Generous, demonstrative, people-pleasing, and possessive. Twos are empathetic, sincere, and warm-hearted. They are driven to be close to others, and often do things for others in order to be needed.',
    coreDesire: 'To feel loved.',
    coreFear: 'Of being unwanted, unworthy of being loved.',
    coreMotivation: 'Want to be loved, to express their feelings for others, to be needed and appreciated, to get others to respond to them, to vindicate their claims about themselves.',
    strengths: ['Highly empathetic and caring', 'Generous and supportive', 'Excellent at building relationships', 'Warm and approachable'],
    weaknesses: ['Can be overly accommodating and neglect own needs', 'May become possessive or manipulative if feeling unloved', 'Struggle with acknowledging their own negative emotions', 'Prone to burnout from over-helping'],
    researchInsights: [
      'Type 2 strongly correlates with high Agreeableness and Extraversion in the Big Five personality model.',
      'Psychological studies indicate Twos often use repression to hide their own needs and negative feelings, focusing entirely on others.',
      'Research shows Twos are highly motivated by social approval and fear of rejection, which drives their helping behavior.'
    ]
  },
  3: {
    name: 'Type 3',
    role: 'The Achiever',
    description: 'Adaptable, excelling, driven, and image-conscious. Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement.',
    coreDesire: 'To feel valuable and worthwhile.',
    coreFear: 'Of being worthless.',
    coreMotivation: 'Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others.',
    strengths: ['Highly motivated and goal-oriented', 'Adaptable and efficient', 'Confident and charismatic', 'Excellent at networking and presenting themselves'],
    weaknesses: ['Can be overly focused on image and status', 'May struggle with authenticity and vulnerability', 'Prone to workaholism and burnout', 'Can be competitive and dismissive of feelings'],
    researchInsights: [
      'Type 3 shows strong positive correlations with Extraversion and Conscientiousness (specifically achievement striving) in the Big Five.',
      'Studies suggest Threes often use identification as a defense mechanism, adopting the traits of successful figures or roles to ensure their own value.',
      'Research indicates Threes are highly susceptible to "imposter syndrome" despite outward success, driven by their core fear of worthlessness.'
    ]
  },
  4: {
    name: 'Type 4',
    role: 'The Individualist',
    description: 'Expressive, dramatic, self-absorbed, and temperamental. Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious.',
    coreDesire: 'To find themselves and their significance (to create an identity).',
    coreFear: 'Of having no identity or personal significance.',
    coreMotivation: 'Want to express themselves and their individuality, to create and surround themselves with beauty, to maintain certain moods and feelings, to withdraw to protect their self-image.',
    strengths: ['Highly creative and expressive', 'Deeply empathetic and emotionally aware', 'Authentic and introspective', 'Appreciate beauty and meaning'],
    weaknesses: ['Prone to melancholy and mood swings', 'Can be self-absorbed and withdrawn', 'Struggle with feelings of envy and inadequacy', 'May romanticize suffering or the past'],
    researchInsights: [
      'Type 4 is strongly associated with high Neuroticism and high Openness to Experience in the Big Five model.',
      'Psychological research links Type 4 to the defense mechanism of introjection, internalizing feelings of loss or abandonment.',
      'Studies show Fours often experience a "missing piece" phenomenon, leading to a lifelong search for identity and meaning.'
    ]
  },
  5: {
    name: 'Type 5',
    role: 'The Investigator',
    description: 'Perceptive, innovative, secretive, and isolated. Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs.',
    coreDesire: 'To be capable and competent.',
    coreFear: 'Of being useless, helpless, or incapable.',
    coreMotivation: 'Want to possess knowledge, to understand the environment, to have everything figured out as a way of defending the self from threats from the environment.',
    strengths: ['Highly analytical and observant', 'Objective and rational', 'Independent and self-sufficient', 'Deeply knowledgeable in their areas of interest'],
    weaknesses: ['Can be emotionally detached and isolated', 'Prone to overthinking and analysis paralysis', 'May struggle to engage in the physical world', 'Can be stingy with their time and energy'],
    researchInsights: [
      'Type 5 correlates strongly with Introversion (low Extraversion) and high Openness to Experience (specifically intellect/ideas) in the Big Five.',
      'Research suggests Fives use isolation (of affect) as a primary defense mechanism, separating thoughts from the feelings associated with them.',
      'Studies indicate Fives often experience the world as intrusive and demanding, leading to a strategy of withdrawal and knowledge accumulation for protection.'
    ]
  },
  6: {
    name: 'Type 6',
    role: 'The Loyalist',
    description: 'Engaging, responsible, anxious, and suspicious. Sixes are reliable, hard-working, and organized, but they can also be defensive, evasive, and highly anxious—running on stress while complaining about it.',
    coreDesire: 'To have security and support.',
    coreFear: 'Of being without support and guidance.',
    coreMotivation: 'Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity.',
    strengths: ['Highly loyal and committed', 'Responsible and hardworking', 'Excellent troubleshooters and problem solvers', 'Protective of their community'],
    weaknesses: ['Prone to anxiety and worst-case scenario thinking', 'Can be overly suspicious or skeptical', 'Struggle with self-doubt and indecision', 'May become reactive or defensive under stress'],
    researchInsights: [
      'Type 6 shows a strong positive correlation with Neuroticism (specifically anxiety and vulnerability) in the Big Five personality model.',
      'Psychological studies link Type 6 to the defense mechanism of projection, attributing their own unacknowledged feelings (often fear or doubt) to others.',
      'Research distinguishes between "phobic" Sixes (who retreat from fear) and "counter-phobic" Sixes (who aggressively confront fear), demonstrating the type\'s complex relationship with anxiety.'
    ]
  },
  7: {
    name: 'Type 7',
    role: 'The Enthusiast',
    description: 'Spontaneous, versatile, acquisitive, and scattered. Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined.',
    coreDesire: 'To be happy and fully satisfied.',
    coreFear: 'Of being deprived and in pain.',
    coreMotivation: 'Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain.',
    strengths: ['Highly optimistic and enthusiastic', 'Versatile and quick-thinking', 'Spontaneous and adventurous', 'Excellent at synthesizing ideas'],
    weaknesses: ['Prone to impulsivity and distraction', 'Struggle to commit or follow through', 'Avoid negative emotions and difficult conversations', 'Can be self-centered or gluttonous for experiences'],
    researchInsights: [
      'Type 7 correlates very strongly with high Extraversion and high Openness to Experience in the Big Five model.',
      'Research indicates Sevens primarily use rationalization as a defense mechanism, reframing negative experiences into positive ones to avoid pain.',
      'Studies suggest the "gluttony" of Type 7 is often a coping mechanism for underlying anxiety, using constant stimulation to distract from internal discomfort.'
    ]
  },
  8: {
    name: 'Type 8',
    role: 'The Challenger',
    description: 'Self-confident, decisive, willful, and confrontational. Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering.',
    coreDesire: 'To protect themselves (to be in control of their own life and destiny).',
    coreFear: 'Of being harmed or controlled by others.',
    coreMotivation: 'Want to be self-reliant, to prove their strength and resist weakness, to be important in their world, to dominate the environment, and to stay in control of their situation.',
    strengths: ['Strong, assertive, and decisive', 'Natural leaders and protectors', 'Direct and honest communicators', 'Highly resilient and resourceful'],
    weaknesses: ['Can be domineering and confrontational', 'Struggle with vulnerability and admitting weakness', 'May intimidate others unintentionally', 'Prone to excess and pushing boundaries'],
    researchInsights: [
      'Type 8 shows correlations with low Agreeableness (specifically low compliance) and high Extraversion (specifically assertiveness) in the Big Five.',
      'Psychological studies link Type 8 to the defense mechanism of denial, particularly the denial of vulnerability, weakness, or fear.',
      'Research suggests Eights often have a heightened sensitivity to power dynamics and injustice, driving their need to protect themselves and the "underdog."'
    ]
  },
  9: {
    name: 'Type 9',
    role: 'The Peacemaker',
    description: 'Receptive, reassuring, agreeable, and complacent. Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace.',
    coreDesire: 'To have inner stability "peace of mind."',
    coreFear: 'Of loss and separation.',
    coreMotivation: 'Want to create harmony in their environment, to avoid conflicts and tension, to preserve things as they are, to resist whatever would upset or disturb them.',
    strengths: ['Highly empathetic and accepting', 'Excellent mediators and peacemakers', 'Calm and steady presence', 'Supportive and easygoing'],
    weaknesses: ['Prone to conflict avoidance and passive-aggression', 'Struggle to assert their own needs and opinions', 'May become complacent or stubborn', 'Can "numb out" to avoid dealing with problems'],
    researchInsights: [
      'Type 9 strongly correlates with high Agreeableness and often lower Extraversion (specifically lower assertiveness) in the Big Five model.',
      'Research indicates Nines use "narcotization" (numbing out through routines, food, TV, etc.) as a primary defense mechanism to avoid conflict and maintain internal peace.',
      'Studies suggest Nines often struggle with "self-forgetting," merging with the agendas of others to the detriment of their own identity and desires.'
    ]
  }
};

export function calculateEnneagramScore(answers: Record<string, number>): {
  primaryType: number;
  scores: Record<number, number>;
  closestTypes: { type: number; matchPercentage: number }[];
} {
  const scores: Record<number, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  };

  for (const [questionId, score] of Object.entries(answers)) {
    const question = enneagramQuestions.find(q => q.id === questionId);
    if (question) {
      // Score is 1-5. We map it to 0-4 to add to the type's total.
      scores[question.type] += (score - 1);
    }
  }

  let primaryType = 1;
  let maxScore = -1;

  for (const [typeStr, score] of Object.entries(scores)) {
    const type = parseInt(typeStr, 10);
    if (score > maxScore) {
      maxScore = score;
      primaryType = type;
    }
  }

  // Calculate percentage match for all types (max score is 16)
  const allTypesMatch = Object.entries(scores).map(([typeStr, score]) => {
    const type = parseInt(typeStr, 10);
    const matchPercentage = Math.round((score / 16) * 100);
    return { type, matchPercentage };
  });

  // Sort by match percentage descending and exclude the primary type
  const closestTypes = allTypesMatch
    .filter(t => t.type !== primaryType)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 2);

  return { primaryType, scores, closestTypes };
}
