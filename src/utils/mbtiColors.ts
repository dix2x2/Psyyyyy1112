export const getFunctionColorClass = (func: string) => {
  if (func.includes('Te') || func.includes('Ti')) return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30';
  if (func.includes('Fe') || func.includes('Fi')) return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/30';
  if (func.includes('Se') || func.includes('Si')) return 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/30';
  if (func.includes('Ne') || func.includes('Ni')) return 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800/30';
  return 'text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-900/20 border-stone-200 dark:border-stone-800/30';
};

export const getFunctionTextColorClass = (func: string) => {
  if (func.includes('Te') || func.includes('Ti')) return 'text-blue-600 dark:text-blue-400';
  if (func.includes('Fe') || func.includes('Fi')) return 'text-emerald-600 dark:text-emerald-400';
  if (func.includes('Se') || func.includes('Si')) return 'text-amber-600 dark:text-amber-400';
  if (func.includes('Ne') || func.includes('Ni')) return 'text-purple-600 dark:text-purple-400';
  return 'text-stone-600 dark:text-stone-400';
};

export const getTypeColorClass = (type: string) => {
  if (type.includes('NT')) return 'text-purple-500 dark:text-purple-400';
  if (type.includes('NF')) return 'text-emerald-500 dark:text-emerald-400';
  if (type.includes('SJ')) return 'text-blue-500 dark:text-blue-400';
  if (type.includes('SP')) return 'text-amber-500 dark:text-amber-400';
  return 'text-emerald-500 dark:text-emerald-400';
};

export const getTypeBgColorClass = (type: string) => {
  if (type.includes('NT')) return 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400';
  if (type.includes('NF')) return 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400';
  if (type.includes('SJ')) return 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400';
  if (type.includes('SP')) return 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400';
  return 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400';
};

export const getTypeCardClasses = (type: string) => {
  if (type.includes('NT')) return {
    bg: 'bg-purple-900 dark:bg-purple-950',
    blob1: 'bg-purple-800 dark:bg-purple-900',
    blob2: 'bg-purple-950 dark:bg-black',
    label: 'text-purple-300 dark:text-purple-400',
    title: 'text-purple-100 dark:text-purple-200',
    desc: 'text-purple-50 dark:text-purple-100/80',
    text: 'text-white'
  };
  if (type.includes('NF')) return {
    bg: 'bg-emerald-900 dark:bg-emerald-950',
    blob1: 'bg-emerald-800 dark:bg-emerald-900',
    blob2: 'bg-emerald-950 dark:bg-black',
    label: 'text-emerald-300 dark:text-emerald-400',
    title: 'text-emerald-100 dark:text-emerald-200',
    desc: 'text-emerald-50 dark:text-emerald-100/80',
    text: 'text-white'
  };
  if (type.includes('SJ')) return {
    bg: 'bg-blue-900 dark:bg-blue-950',
    blob1: 'bg-blue-800 dark:bg-blue-900',
    blob2: 'bg-blue-950 dark:bg-black',
    label: 'text-blue-300 dark:text-blue-400',
    title: 'text-blue-100 dark:text-blue-200',
    desc: 'text-blue-50 dark:text-blue-100/80',
    text: 'text-white'
  };
  if (type.includes('SP')) return {
    bg: 'bg-amber-900 dark:bg-amber-950',
    blob1: 'bg-amber-800 dark:bg-amber-900',
    blob2: 'bg-amber-950 dark:bg-black',
    label: 'text-amber-300 dark:text-amber-400',
    title: 'text-amber-100 dark:text-amber-200',
    desc: 'text-amber-50 dark:text-amber-100/80',
    text: 'text-white'
  };
  return {
    bg: 'bg-emerald-900 dark:bg-emerald-950',
    blob1: 'bg-emerald-800 dark:bg-emerald-900',
    blob2: 'bg-emerald-950 dark:bg-black',
    label: 'text-emerald-300 dark:text-emerald-400',
    title: 'text-emerald-100 dark:text-emerald-200',
    desc: 'text-emerald-50 dark:text-emerald-100/80',
    text: 'text-white'
  };
};

export const formatCognitiveFunction = (funcString: string) => {
  // e.g., "Introverted Intuition (Ni)" -> { name: "Introverted Intuition", code: "Ni" }
  const match = funcString.match(/(.*?)\s*\((.*?)\)/);
  if (match) {
    return { name: match[1].trim(), code: match[2].trim() };
  }
  return { name: funcString, code: '' };
};
