export interface MBTIQuestion {
  id: string;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  direction: 1 | -1; // 1 means Agree favors the first letter (E, S, T, J). -1 means Agree favors the second letter (I, N, F, P).
}

export const mbtiQuestions: MBTIQuestion[] = [
  // Extraversion (E) vs Introversion (I)
  { id: 'mbti1', text: 'You regularly make new friends and enjoy interacting with large groups.', dimension: 'EI', direction: 1 },
  { id: 'mbti2', text: 'You feel exhausted after spending time in highly stimulating social environments.', dimension: 'EI', direction: -1 },
  { id: 'mbti3', text: 'At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.', dimension: 'EI', direction: -1 },
  { id: 'mbti4', text: 'You usually initiate conversations and don\'t mind being the center of attention.', dimension: 'EI', direction: 1 },
  { id: 'mbti5', text: 'You prefer quiet, intimate environments over loud, bustling ones.', dimension: 'EI', direction: -1 },
  { id: 'mbti6', text: 'You process your thoughts by talking them out loud with others.', dimension: 'EI', direction: 1 },

  // Sensing (S) vs Intuition (N)
  { id: 'mbti7', text: 'You often spend time exploring unrealistic yet intriguing ideas.', dimension: 'SN', direction: -1 },
  { id: 'mbti8', text: 'You prefer to rely on concrete facts and direct experience rather than abstract theories.', dimension: 'SN', direction: 1 },
  { id: 'mbti9', text: 'You are more of a detail-oriented person than a "big picture" person.', dimension: 'SN', direction: 1 },
  { id: 'mbti10', text: 'You often wonder how things are connected and look for underlying meanings or patterns.', dimension: 'SN', direction: -1 },
  { id: 'mbti11', text: 'You prefer instructions to be extremely specific and step-by-step.', dimension: 'SN', direction: 1 },
  { id: 'mbti12', text: 'You are drawn to creative, open-ended projects rather than highly structured tasks.', dimension: 'SN', direction: -1 },

  // Thinking (T) vs Feeling (F)
  { id: 'mbti13', text: 'When making a decision, you prioritize objective logic over how it affects people\'s emotions.', dimension: 'TF', direction: 1 },
  { id: 'mbti14', text: 'You are highly empathetic and easily absorb the emotions of those around you.', dimension: 'TF', direction: -1 },
  { id: 'mbti15', text: 'You believe that objective truth should be more important than people\'s sensitivities.', dimension: 'TF', direction: 1 },
  { id: 'mbti16', text: 'You often let your heart guide your decisions rather than your head.', dimension: 'TF', direction: -1 },
  { id: 'mbti17', text: 'In an argument, you care more about being factually correct than keeping the peace.', dimension: 'TF', direction: 1 },
  { id: 'mbti18', text: 'You prioritize social harmony and try to avoid conflict whenever possible.', dimension: 'TF', direction: -1 },

  // Judging (J) vs Perceiving (P)
  { id: 'mbti19', text: 'You prefer to have a detailed plan before starting a project or going on a trip.', dimension: 'JP', direction: 1 },
  { id: 'mbti20', text: 'You often leave things until the last minute and thrive under the pressure of a deadline.', dimension: 'JP', direction: -1 },
  { id: 'mbti21', text: 'You like to keep your options open rather than committing to a strict schedule.', dimension: 'JP', direction: -1 },
  { id: 'mbti22', text: 'You feel more comfortable when things are decided, settled, and finalized.', dimension: 'JP', direction: 1 },
  { id: 'mbti23', text: 'Your workspace and living areas are highly organized and tidy.', dimension: 'JP', direction: 1 },
  { id: 'mbti24', text: 'You prefer to adapt to situations as they happen rather than planning ahead.', dimension: 'JP', direction: -1 },
  
  // Extended Questions (EI)
  { id: 'mbti25', text: 'You enjoy participating in group activities.', dimension: 'EI', direction: 1 },
  { id: 'mbti26', text: 'You prefer reading a book or watching a movie alone rather than attending a social gathering.', dimension: 'EI', direction: -1 },
  { id: 'mbti27', text: 'You find it easy to mingle with people you have never met before.', dimension: 'EI', direction: 1 },
  { id: 'mbti28', text: 'You often feel drained after socializing and need time alone to recharge.', dimension: 'EI', direction: -1 },
  { id: 'mbti29', text: 'You are usually the one to start conversations in social settings.', dimension: 'EI', direction: 1 },
  { id: 'mbti30', text: 'You tend to avoid drawing attention to yourself.', dimension: 'EI', direction: -1 },
  { id: 'mbti31', text: 'You feel energized when you are surrounded by a lot of people.', dimension: 'EI', direction: 1 },
  { id: 'mbti32', text: 'You prefer one-on-one conversations over group discussions.', dimension: 'EI', direction: -1 },
  { id: 'mbti33', text: 'You are quick to share your thoughts and feelings with others.', dimension: 'EI', direction: 1 },

  // Extended Questions (SN)
  { id: 'mbti34', text: 'You often get lost in your thoughts and ignore your surroundings.', dimension: 'SN', direction: -1 },
  { id: 'mbti35', text: 'You pay close attention to the physical details of your environment.', dimension: 'SN', direction: 1 },
  { id: 'mbti36', text: 'You are more interested in what could be rather than what is.', dimension: 'SN', direction: -1 },
  { id: 'mbti37', text: 'You prefer practical, hands-on tasks over theoretical discussions.', dimension: 'SN', direction: 1 },
  { id: 'mbti38', text: 'You often spend time thinking about the future and various possibilities.', dimension: 'SN', direction: -1 },
  { id: 'mbti39', text: 'You trust your past experiences more than sudden inspirations.', dimension: 'SN', direction: 1 },
  { id: 'mbti40', text: 'You enjoy discussing philosophical or abstract concepts.', dimension: 'SN', direction: -1 },
  { id: 'mbti41', text: 'You prefer to focus on the present moment and tangible realities.', dimension: 'SN', direction: 1 },
  { id: 'mbti42', text: 'You often find yourself daydreaming about fantastical scenarios.', dimension: 'SN', direction: -1 },

  // Extended Questions (TF)
  { id: 'mbti43', text: 'You believe it is more important to be tactful than to tell the blunt truth.', dimension: 'TF', direction: -1 },
  { id: 'mbti44', text: 'You base your decisions primarily on logic and objective analysis.', dimension: 'TF', direction: 1 },
  { id: 'mbti45', text: 'You are deeply affected by the emotional pain of others.', dimension: 'TF', direction: -1 },
  { id: 'mbti46', text: 'You value rationality and consistency over emotional considerations.', dimension: 'TF', direction: 1 },
  { id: 'mbti47', text: 'You often prioritize the needs and feelings of others above your own.', dimension: 'TF', direction: -1 },
  { id: 'mbti48', text: 'You find it easy to remain calm and objective during emotional situations.', dimension: 'TF', direction: 1 },
  { id: 'mbti49', text: 'You believe that compassion is more important than strict justice.', dimension: 'TF', direction: -1 },
  { id: 'mbti50', text: 'You prefer to analyze a problem from a detached, impersonal perspective.', dimension: 'TF', direction: 1 },
  { id: 'mbti51', text: 'You often make decisions based on what feels right in your heart.', dimension: 'TF', direction: -1 },

  // Extended Questions (JP)
  { id: 'mbti52', text: 'You prefer to go with the flow rather than having a strict schedule.', dimension: 'JP', direction: -1 },
  { id: 'mbti53', text: 'You like to complete your work well before the deadline.', dimension: 'JP', direction: 1 },
  { id: 'mbti54', text: 'You often change your plans at the last minute.', dimension: 'JP', direction: -1 },
  { id: 'mbti55', text: 'You feel anxious when things are left undecided or up in the air.', dimension: 'JP', direction: 1 },
  { id: 'mbti56', text: 'You enjoy the spontaneity of not knowing what will happen next.', dimension: 'JP', direction: -1 },
  { id: 'mbti57', text: 'You prefer to have a clear structure and routine in your daily life.', dimension: 'JP', direction: 1 },
  { id: 'mbti58', text: 'You find it easy to adapt to unexpected changes in your schedule.', dimension: 'JP', direction: -1 },
  { id: 'mbti59', text: 'You like to make to-do lists and check off completed tasks.', dimension: 'JP', direction: 1 },
  { id: 'mbti60', text: 'You prefer to keep your options open as long as possible before making a choice.', dimension: 'JP', direction: -1 },
];

export const mbtiTypes: Record<string, { 
  title: string; 
  description: string; 
  strengths: string[]; 
  weaknesses: string[];
  cognitiveFunctions: { dominant: string; auxiliary: string; tertiary: string; inferior: string };
  researchInsights: string[];
  interestingFacts: string[];
}> = {
  'INTJ': {
    title: 'The Architect',
    description: 'Imaginative and strategic thinkers, with a plan for everything. INTJs are highly analytical, objective, and logical. They value knowledge, competence, and structure, often seeing the world as a complex system to be optimized.',
    strengths: ['Rational and objective', 'Independent and decisive', 'Highly strategic and visionary', 'Determined and hard-working'],
    weaknesses: ['Can be overly critical or arrogant', 'May dismiss emotions as irrelevant', 'Overly analytical in romance', 'Struggle with highly structured environments they didn\'t create'],
    cognitiveFunctions: { dominant: 'Introverted Intuition (Ni)', auxiliary: 'Extraverted Thinking (Te)', tertiary: 'Introverted Feeling (Fi)', inferior: 'Extraverted Sensing (Se)' },
    researchInsights: [
      'Research indicates INTJs are highly overrepresented in STEM fields, particularly engineering and computer science.',
      'Studies show they often score highest among all types in academic achievement and IQ testing.',
      'Under extreme stress, they may fall into the grip of their inferior function (Se), leading to overindulgence in sensory experiences (e.g., binge eating, overspending).'
    ],
    interestingFacts: [
      'Often referred to as "Systems Builders" due to their natural affinity for complex strategy.',
      'Statistically one of the types most likely to enjoy chess and strategy games.',
      'Despite being introverts, they often rise to leadership roles due to their competence and vision.'
    ]
  },
  'INTP': {
    title: 'The Logician',
    description: 'Innovative inventors with an unquenchable thirst for knowledge. INTPs are brilliant theoreticians who love exploring abstract concepts. They are driven by a desire to understand how the universe works at a fundamental level.',
    strengths: ['Great analysts and abstract thinkers', 'Imaginative and original', 'Open-minded', 'Enthusiastic about ideas'],
    weaknesses: ['Very private and withdrawn', 'Insensitive to emotional nuances', 'Absent-minded', 'Condescending to those they deem illogical'],
    cognitiveFunctions: { dominant: 'Introverted Thinking (Ti)', auxiliary: 'Extraverted Intuition (Ne)', tertiary: 'Introverted Sensing (Si)', inferior: 'Extraverted Feeling (Fe)' },
    researchInsights: [
      'Statistically, INTPs are among the most likely types to study foreign languages and theoretical sciences.',
      'Research shows they often score very high on the Openness to Experience trait in the Big Five personality model.',
      'They frequently report lower levels of job satisfaction in highly structured, bureaucratic environments.'
    ],
    interestingFacts: [
      'Frequently over-represented in mathematics, philosophy, and theoretical physics.',
      'Known for their "chameleon" ability to blend in socially when necessary, despite being highly introverted.',
      'Often have a highly precise and pedantic use of language.'
    ]
  },
  'ENTJ': {
    title: 'The Commander',
    description: 'Bold, imaginative, and strong-willed leaders, always finding a way—or making one. ENTJs are natural-born leaders who project authority and confidence. They are highly efficient and driven to achieve their goals.',
    strengths: ['Efficient and energetic', 'Self-confident', 'Strong-willed', 'Strategic thinkers'],
    weaknesses: ['Stubborn and dominant', 'Intolerant of inefficiency', 'Impatient', 'Can be cold and ruthless'],
    cognitiveFunctions: { dominant: 'Extraverted Thinking (Te)', auxiliary: 'Introverted Intuition (Ni)', tertiary: 'Extraverted Sensing (Se)', inferior: 'Introverted Feeling (Fi)' },
    researchInsights: [
      'ENTJs are statistically the highest earners among all MBTI types according to multiple demographic studies.',
      'They are highly overrepresented in executive leadership and management positions.',
      'Research indicates they tend to have high stress tolerance but may struggle with emotional burnout if their Fi is neglected.'
    ],
    interestingFacts: [
      'Statistically the highest-earning MBTI type on average.',
      'Often referred to as "Field Marshals" for their ability to mobilize resources and people.',
      'Highly resilient to stress compared to other types.'
    ]
  },
  'ENTP': {
    title: 'The Debater',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are the ultimate devil\'s advocates, thriving on the process of shredding arguments and beliefs to see what\'s left.',
    strengths: ['Knowledgeable and quick thinkers', 'Excellent brainstormers', 'Charismatic', 'Energetic'],
    weaknesses: ['Very argumentative', 'Insensitive', 'Find it difficult to focus on practical matters', 'Dislike practical execution'],
    cognitiveFunctions: { dominant: 'Extraverted Intuition (Ne)', auxiliary: 'Introverted Thinking (Ti)', tertiary: 'Extraverted Feeling (Fe)', inferior: 'Introverted Sensing (Si)' },
    researchInsights: [
      'ENTPs show a strong correlation with entrepreneurial ventures and self-employment.',
      'Studies suggest they are highly adaptable and often score high on measures of creative problem-solving.',
      'They frequently struggle with task completion, often preferring the ideation phase over execution.'
    ],
    interestingFacts: [
      'Often called the "Devil\'s Advocate" because they enjoy arguing points they don\'t even believe in just for the intellectual exercise.',
      'Highly represented among entrepreneurs and startup founders.',
      'Known for having many unfinished projects due to their preference for idea generation over execution.'
    ]
  },
  'INFJ': {
    title: 'The Advocate',
    description: 'Quiet and mystical, yet very inspiring and tireless idealists. INFJs are driven by a deep sense of idealism and morality, but they are not idle dreamers—they take concrete steps to realize their goals and make a lasting positive impact.',
    strengths: ['Creative and insightful', 'Inspiring and convincing', 'Decisive', 'Determined and passionate'],
    weaknesses: ['Sensitive to criticism', 'Extremely private', 'Perfectionistic', 'Always need to have a cause'],
    cognitiveFunctions: { dominant: 'Introverted Intuition (Ni)', auxiliary: 'Extraverted Feeling (Fe)', tertiary: 'Introverted Thinking (Ti)', inferior: 'Extraverted Sensing (Se)' },
    researchInsights: [
      'INFJs are statistically the rarest MBTI type, making up roughly 1-2% of the population.',
      'Research shows they are highly represented in counseling, psychology, and teaching professions.',
      'They are particularly prone to "burnout" due to their high empathy and tendency to absorb others\' emotional burdens.'
    ],
    interestingFacts: [
      'Statistically the rarest MBTI type, making up only 1-2% of the population.',
      'Often described as having a "sixth sense" about people\'s true motives.',
      'Highly prone to perfectionism and burnout due to their deep empathy combined with high standards.'
    ]
  },
  'INFP': {
    title: 'The Mediator',
    description: 'Poetic, kind, and altruistic people, always eager to help a good cause. INFPs are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better.',
    strengths: ['Idealistic and empathetic', 'Seek and value harmony', 'Open-minded and flexible', 'Very creative'],
    weaknesses: ['Too idealistic', 'Can be too altruistic', 'Impractical', 'Dislike dealing with data and hard facts'],
    cognitiveFunctions: { dominant: 'Introverted Feeling (Fi)', auxiliary: 'Extraverted Intuition (Ne)', tertiary: 'Introverted Sensing (Si)', inferior: 'Extraverted Thinking (Te)' },
    researchInsights: [
      'INFPs consistently score highest on measures of empathy and emotional intelligence in comparative studies.',
      'They are highly represented in creative writing, arts, and humanities.',
      'Research indicates they may struggle with depression or anxiety more frequently than other types, often due to a mismatch between their ideals and reality.'
    ],
    interestingFacts: [
      'Consistently score the highest on measures of empathy and emotional intelligence.',
      'Highly represented in creative writing, poetry, and the arts.',
      'Often struggle with feeling misunderstood due to their deeply internal value system.'
    ]
  },
  'ENFJ': {
    title: 'The Protagonist',
    description: 'Charismatic and inspiring leaders, able to mesmerize their listeners. ENFJs are natural-born leaders, full of passion and charisma. They radiate authenticity, concern, and altruism, unafraid to stand up and speak when they feel something needs to be said.',
    strengths: ['Tolerant and reliable', 'Charismatic and natural leaders', 'Altruistic', 'Strong communicators'],
    weaknesses: ['Overly idealistic', 'Too sensitive', 'Fluctuating self-esteem', 'Struggle to make tough decisions'],
    cognitiveFunctions: { dominant: 'Extraverted Feeling (Fe)', auxiliary: 'Introverted Intuition (Ni)', tertiary: 'Extraverted Sensing (Se)', inferior: 'Introverted Thinking (Ti)' },
    researchInsights: [
      'ENFJs are frequently found in educational leadership, HR, and public relations roles.',
      'Studies show they have highly developed interpersonal skills and are often perceived as highly persuasive.',
      'They tend to base their self-worth heavily on their ability to help others, which can lead to boundary issues.'
    ],
    interestingFacts: [
      'Often referred to as "The Protagonist" or "The Teacher" due to their natural charisma and desire to guide others.',
      'Highly persuasive and often found in roles involving public speaking or counseling.',
      'Can struggle with setting boundaries because they are so attuned to others\' needs.'
    ]
  },
  'ENFP': {
    title: 'The Campaigner',
    description: 'Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile. ENFPs are fiercely independent, and much more than stability and security, they crave creativity and freedom.',
    strengths: ['Curious and observant', 'Energetic and enthusiastic', 'Excellent communicators', 'Know how to relax'],
    weaknesses: ['Poor practical skills', 'Find it difficult to focus', 'Overthink things', 'Get stressed easily'],
    cognitiveFunctions: { dominant: 'Extraverted Intuition (Ne)', auxiliary: 'Introverted Feeling (Fi)', tertiary: 'Extraverted Thinking (Te)', inferior: 'Introverted Sensing (Si)' },
    researchInsights: [
      'ENFPs are highly represented in journalism, counseling, and the arts.',
      'Research suggests they are highly adaptable to change but struggle significantly with routine and micromanagement.',
      'They often score very high on verbal fluency and divergent thinking tests.'
    ],
    interestingFacts: [
      'Known for their infectious enthusiasm and ability to see potential in almost anything.',
      'Highly adaptable but often struggle with strict routines and micromanagement.',
      'Often score very high on tests of verbal fluency and divergent thinking.'
    ]
  },
  'ISTJ': {
    title: 'The Logistician',
    description: 'Practical and fact-minded individuals, whose reliability cannot be doubted. ISTJs are the backbone of many societies, utilizing their time and energy to complete tasks with accuracy and patience.',
    strengths: ['Honest and direct', 'Strong-willed and dutiful', 'Very responsible', 'Calm and practical'],
    weaknesses: ['Stubborn', 'Insensitive', 'Always by the book', 'Often unreasonably blame themselves'],
    cognitiveFunctions: { dominant: 'Introverted Sensing (Si)', auxiliary: 'Extraverted Thinking (Te)', tertiary: 'Introverted Feeling (Fi)', inferior: 'Extraverted Intuition (Ne)' },
    researchInsights: [
      'ISTJs are one of the most common types, making up about 13% of the population.',
      'They are highly overrepresented in accounting, law enforcement, and military roles.',
      'Studies show they have the highest retention rates in corporate jobs due to their strong sense of duty and loyalty.'
    ],
    interestingFacts: [
      'One of the most common types, making up about 13% of the population.',
      'Often referred to as "The Inspector" for their meticulous attention to detail and rules.',
      'Have the highest retention rate in corporate jobs due to their strong sense of duty.'
    ]
  },
  'ISFJ': {
    title: 'The Defender',
    description: 'Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are true altruists, meeting kindness with kindness-in-excess and engaging the work and people they believe in with enthusiasm and generosity.',
    strengths: ['Supportive and reliable', 'Patient and imaginative', 'Observant and analytical', 'Hard-working and loyal'],
    weaknesses: ['Humble and shy', 'Take things too personally', 'Repress their feelings', 'Reluctant to change'],
    cognitiveFunctions: { dominant: 'Introverted Sensing (Si)', auxiliary: 'Extraverted Feeling (Fe)', tertiary: 'Introverted Thinking (Ti)', inferior: 'Extraverted Intuition (Ne)' },
    researchInsights: [
      'ISFJs are the most common MBTI type, particularly among women.',
      'They are highly represented in healthcare, teaching, and administrative support roles.',
      'Research indicates they have excellent memory for details, particularly those related to people and past experiences.'
    ],
    interestingFacts: [
      'The most common MBTI type, especially among women.',
      'Often referred to as "The Defender" or "The Nurturer" due to their deep loyalty and protective nature.',
      'Have an excellent memory for details, especially those related to people and past experiences.'
    ]
  },
  'ESTJ': {
    title: 'The Executive',
    description: 'Excellent administrators, unsurpassed at managing things—or people. ESTJs represent tradition and order, utilizing their understanding of what is right, wrong, and socially acceptable to bring families and communities together.',
    strengths: ['Dedicated and strong-willed', 'Direct and honest', 'Loyal, patient, and reliable', 'Excellent organizers'],
    weaknesses: ['Inflexible and stubborn', 'Uncomfortable with unconventional situations', 'Judgmental', 'Focus too much on social status'],
    cognitiveFunctions: { dominant: 'Extraverted Thinking (Te)', auxiliary: 'Introverted Sensing (Si)', tertiary: 'Extraverted Intuition (Ne)', inferior: 'Introverted Feeling (Fi)' },
    researchInsights: [
      'ESTJs are highly represented in management, law, and business administration.',
      'Studies show they are highly effective at implementing systems and maintaining order in chaotic environments.',
      'They may struggle with sudden changes or abstract theories that lack immediate practical application.'
    ],
    interestingFacts: [
      'Highly represented in management, law enforcement, and business administration.',
      'Often referred to as "The Executive" for their ability to bring order to chaotic environments.',
      'Value tradition and often take on roles that uphold societal structures.'
    ]
  },
  'ESFJ': {
    title: 'The Consul',
    description: 'Extraordinarily caring, social, and popular people, always eager to help. ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight, and leading their teams forward to victory and fame.',
    strengths: ['Strong practical skills', 'Warm and sensitive', 'Loyal and dutiful', 'Good at connecting with others'],
    weaknesses: ['Worried about their social status', 'Inflexible', 'Reluctant to innovate or improvise', 'Vulnerable to criticism'],
    cognitiveFunctions: { dominant: 'Extraverted Feeling (Fe)', auxiliary: 'Introverted Sensing (Si)', tertiary: 'Extraverted Intuition (Ne)', inferior: 'Introverted Thinking (Ti)' },
    researchInsights: [
      'ESFJs are highly represented in nursing, teaching, and social work.',
      'Research shows they place a very high value on social harmony and community involvement.',
      'They often report high levels of satisfaction in roles that allow them to directly help others in a structured environment.'
    ],
    interestingFacts: [
      'Highly represented in nursing, teaching, and social work.',
      'Often referred to as "The Consul" or "The Provider" due to their focus on community and social harmony.',
      'Place a very high value on social validation and group cohesion.'
    ]
  },
  'ISTP': {
    title: 'The Virtuoso',
    description: 'Bold and practical experimenters, masters of all kinds of tools. ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity.',
    strengths: ['Optimistic and energetic', 'Creative and practical', 'Spontaneous and rational', 'Know how to prioritize'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private and reserved', 'Easily bored'],
    cognitiveFunctions: { dominant: 'Introverted Thinking (Ti)', auxiliary: 'Extraverted Sensing (Se)', tertiary: 'Introverted Intuition (Ni)', inferior: 'Extraverted Feeling (Fe)' },
    researchInsights: [
      'ISTPs are highly represented in mechanics, engineering, and applied sciences.',
      'Studies suggest they have excellent spatial reasoning and mechanical aptitude.',
      'They often prefer hands-on learning and may struggle in traditional, lecture-based educational settings.'
    ],
    interestingFacts: [
      'Often referred to as "The Virtuoso" or "The Mechanic" due to their natural affinity for tools and physical systems.',
      'Highly represented in engineering, mechanics, and applied sciences.',
      'Known for their cool-headedness in a crisis and ability to troubleshoot on the fly.'
    ]
  },
  'ISFP': {
    title: 'The Adventurer',
    description: 'Flexible and charming artists, always ready to explore and experience something new. ISFPs live in a colorful, sensual world, inspired by connections with people and ideas.',
    strengths: ['Charming and sensitive to others', 'Imaginative and passionate', 'Curious', 'Artistic'],
    weaknesses: ['Fiercely independent', 'Unpredictable', 'Easily stressed', 'Overly competitive'],
    cognitiveFunctions: { dominant: 'Introverted Feeling (Fi)', auxiliary: 'Extraverted Sensing (Se)', tertiary: 'Introverted Intuition (Ni)', inferior: 'Extraverted Thinking (Te)' },
    researchInsights: [
      'ISFPs are highly represented in the fine arts, design, and healthcare.',
      'Research indicates they are highly attuned to their physical environment and aesthetics.',
      'They often report a strong need for personal freedom and autonomy in their work.'
    ],
    interestingFacts: [
      'Often referred to as "The Adventurer" or "The Artist" due to their strong aesthetic sense.',
      'Highly sensitive to their physical environment and often express themselves through action or art rather than words.',
      'Fiercely independent and often report a strong need for autonomy in their work.'
    ]
  },
  'ESTP': {
    title: 'The Entrepreneur',
    description: 'Smart, energetic, and very perceptive people, who truly enjoy living on the edge. ESTPs always have an impact on their immediate surroundings—the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group.',
    strengths: ['Bold and rational', 'Original and perceptive', 'Direct', 'Sociable'],
    weaknesses: ['Insensitive', 'Impatient', 'Risk-prone', 'May miss the bigger picture'],
    cognitiveFunctions: { dominant: 'Extraverted Sensing (Se)', auxiliary: 'Introverted Thinking (Ti)', tertiary: 'Extraverted Feeling (Fe)', inferior: 'Introverted Intuition (Ni)' },
    researchInsights: [
      'ESTPs are highly represented in sales, marketing, and entrepreneurship.',
      'Studies show they are highly observant and quick to react to their immediate environment.',
      'They often prefer action over planning and may struggle with long-term strategic thinking.'
    ],
    interestingFacts: [
      'Often referred to as "The Entrepreneur" or "The Dynamo" due to their high energy and action-oriented nature.',
      'Highly observant and quick to react to their immediate environment.',
      'Often prefer hands-on learning and may struggle in traditional, lecture-based educational settings.'
    ]
  },
  'ESFP': {
    title: 'The Entertainer',
    description: 'Spontaneous, energetic, and enthusiastic people—life is never boring around them. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too.',
    strengths: ['Bold and original', 'Aesthetics and showmanship', 'Practical and observant', 'Excellent people skills'],
    weaknesses: ['Easily bored', 'Poor long-term planners', 'Unfocused', 'Highly sensitive to criticism'],
    cognitiveFunctions: { dominant: 'Extraverted Sensing (Se)', auxiliary: 'Introverted Feeling (Fi)', tertiary: 'Extraverted Thinking (Te)', inferior: 'Introverted Intuition (Ni)' },
    researchInsights: [
      'ESFPs are highly represented in performing arts, hospitality, and event planning.',
      'Research suggests they are highly empathetic and skilled at reading the emotional states of others in real-time.',
      'They often struggle with delayed gratification and long-term planning.'
    ],
    interestingFacts: [
      'Often referred to as "The Entertainer" due to their spontaneous and enthusiastic nature.',
      'Highly empathetic and skilled at reading the emotional states of others in real-time.',
      'Often struggle with delayed gratification and long-term planning.'
    ]
  }
};

export function calculateMBTIScore(answers: Record<string, number>) {
  // Each dimension has 6 questions.
  // We calculate a score from 0 to 100 for the first letter (E, S, T, J).
  // 50 is the midpoint.
  
  const scores = {
    EI: 50,
    SN: 50,
    TF: 50,
    JP: 50
  };

  const rawScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const questionsPerDimension = mbtiQuestions.length / 4;
  const maxRaw = questionsPerDimension * 2; // max deviation is 2 per question (5-3 = 2)

  mbtiQuestions.forEach(q => {
    const answer = answers[q.id];
    if (answer) {
      // answer is 1-5. Midpoint is 3.
      // deviation is -2 to +2.
      const deviation = answer - 3;
      // If direction is 1, positive deviation favors first letter.
      // If direction is -1, positive deviation favors second letter (so we subtract).
      rawScores[q.dimension] += (deviation * q.direction);
    }
  });

  // Convert raw scores (-12 to +12) to percentages (0 to 100)
  scores.EI = Math.round(((rawScores.EI + maxRaw) / (maxRaw * 2)) * 100);
  scores.SN = Math.round(((rawScores.SN + maxRaw) / (maxRaw * 2)) * 100);
  scores.TF = Math.round(((rawScores.TF + maxRaw) / (maxRaw * 2)) * 100);
  scores.JP = Math.round(((rawScores.JP + maxRaw) / (maxRaw * 2)) * 100);

  // Determine the 4-letter type
  const type = [
    scores.EI >= 50 ? 'E' : 'I',
    scores.SN >= 50 ? 'S' : 'N',
    scores.TF >= 50 ? 'T' : 'F',
    scores.JP >= 50 ? 'J' : 'P'
  ].join('');

  // Calculate match percentage for all 16 types
  const allTypesMatch = Object.keys(mbtiTypes).map(t => {
    const eMatch = t[0] === 'E' ? scores.EI : 100 - scores.EI;
    const sMatch = t[1] === 'S' ? scores.SN : 100 - scores.SN;
    const tMatch = t[2] === 'T' ? scores.TF : 100 - scores.TF;
    const jMatch = t[3] === 'J' ? scores.JP : 100 - scores.JP;
    const matchPercentage = Math.round((eMatch + sMatch + tMatch + jMatch) / 4);
    return { type: t, matchPercentage };
  });

  // Sort by match percentage descending and exclude the primary type
  const closestTypes = allTypesMatch
    .filter(t => t.type !== type)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 3);

  return {
    scores,
    type,
    details: mbtiTypes[type],
    closestTypes
  };
}
