export interface SavedTestResult {
  id: string;
  testId: string;
  date: string;
  answers: Record<string, number>;
}

const STORAGE_KEY = 'psychometricspro_results';

export function saveTestResult(testId: string, answers: Record<string, number>) {
  const results = getSavedTestResults();
  
  // Check if this exact result was just saved (prevent duplicate saves on re-renders)
  const lastResult = results[0];
  if (
    lastResult && 
    lastResult.testId === testId && 
    JSON.stringify(lastResult.answers) === JSON.stringify(answers) &&
    (Date.now() - new Date(lastResult.date).getTime() < 5000) // within 5 seconds
  ) {
    return;
  }

  const newResult: SavedTestResult = {
    id: crypto.randomUUID(),
    testId,
    date: new Date().toISOString(),
    answers,
  };

  results.unshift(newResult);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function getSavedTestResults(): SavedTestResult[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse saved results', e);
    return [];
  }
}

export function clearSavedTestResults() {
  localStorage.removeItem(STORAGE_KEY);
}

export function deleteTestResult(id: string) {
  const results = getSavedTestResults();
  const filtered = results.filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
