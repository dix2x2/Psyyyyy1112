import React from 'react';
import { formatCognitiveFunction, getFunctionColorClass } from '../utils/mbtiColors';
import { useLanguage } from '../contexts/LanguageContext';

interface CognitiveFunctionDisplayProps {
  label: string;
  funcString: string;
}

export function CognitiveFunctionDisplay({ label, funcString }: CognitiveFunctionDisplayProps) {
  const { name, code } = formatCognitiveFunction(funcString);
  const colorClass = getFunctionColorClass(code || name);
  const { t } = useLanguage();

  const description = code ? t(`mbti.functionDesc.${code}`, '') : '';

  return (
    <div className="flex flex-col items-start">
      <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">{label}</span>
      <div className="flex flex-wrap items-center gap-2 mt-0.5">
        <span className="text-stone-900 dark:text-stone-100 font-medium leading-tight">{name}</span>
        {code && (
          <div className="relative group flex items-center">
            <span className={`px-2 py-0.5 rounded-md text-xs font-bold border cursor-help ${colorClass}`}>
              {code}
            </span>
            {description && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-sm rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                {description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900 dark:border-t-stone-100" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
