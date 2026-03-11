export const phq9Questions = [
  { id: 'phq9_1', text: 'Little interest or pleasure in doing things', category: 'cognitive' },
  { id: 'phq9_2', text: 'Feeling down, depressed, or hopeless', category: 'cognitive' },
  { id: 'phq9_3', text: 'Trouble falling or staying asleep, or sleeping too much', category: 'somatic' },
  { id: 'phq9_4', text: 'Feeling tired or having little energy', category: 'somatic' },
  { id: 'phq9_5', text: 'Poor appetite or overeating', category: 'somatic' },
  { id: 'phq9_6', text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down', category: 'cognitive' },
  { id: 'phq9_7', text: 'Trouble concentrating on things, such as reading the newspaper or watching television', category: 'cognitive' },
  { id: 'phq9_8', text: 'Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual', category: 'somatic' },
  { id: 'phq9_9', text: 'Thoughts that you would be better off dead, or of hurting yourself in some way', category: 'cognitive' }
];

export function calculatePHQ9Score(answers: Record<string, number>) {
  let totalScore = 0;
  let somaticScore = 0;
  let cognitiveScore = 0;
  
  phq9Questions.forEach(q => {
    const score = answers[q.id] || 0;
    totalScore += score;
    if (q.category === 'somatic') {
      somaticScore += score;
    } else {
      cognitiveScore += score;
    }
  });

  let severity = 'Minimal';
  if (totalScore >= 20) severity = 'Severe';
  else if (totalScore >= 15) severity = 'Moderately Severe';
  else if (totalScore >= 10) severity = 'Moderate';
  else if (totalScore >= 5) severity = 'Mild';

  // Max somatic score: 4 questions * 3 = 12
  // Max cognitive score: 5 questions * 3 = 15
  const somaticPercentage = Math.round((somaticScore / 12) * 100);
  const cognitivePercentage = Math.round((cognitiveScore / 15) * 100);

  return {
    totalScore,
    severity,
    somaticScore,
    cognitiveScore,
    somaticPercentage,
    cognitivePercentage,
    suicideRisk: (answers['phq9_9'] || 0) > 0
  };
}
