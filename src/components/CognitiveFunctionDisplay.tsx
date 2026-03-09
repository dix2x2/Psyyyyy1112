import React from 'react';
import { formatCognitiveFunction, getFunctionColorClass } from '../utils/mbtiColors';

interface CognitiveFunctionDisplayProps {
  label: string;
  funcString: string;
}

export function CognitiveFunctionDisplay({ label, funcString }: CognitiveFunctionDisplayProps) {
  const { name, code } = formatCognitiveFunction(funcString);
  const colorClass = getFunctionColorClass(code || name);

  return (
    <div className="flex flex-col items-start">
      <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">{label}</span>
      <div className="flex flex-wrap items-center gap-2 mt-0.5">
        <span className="text-stone-900 dark:text-stone-100 font-medium leading-tight">{name}</span>
        {code && (
          <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${colorClass}`}>
            {code}
          </span>
        )}
      </div>
    </div>
  );
}
