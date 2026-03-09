import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import ru from '../locales/ru';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, paramsOrFallback?: Record<string, string | number> | string | any[], params?: Record<string, string | number>) => any;
}

const translations = { en, ru };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ru') return saved;
    return (navigator.language || '').startsWith('ru') ? 'ru' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, paramsOrFallback?: Record<string, string | number> | string | any[], params?: Record<string, string | number>) => {
    let value: any = translations[language]?.[key];
    
    if (value === undefined) {
      const keys = key.split('.');
      value = translations[language];
      for (const k of keys) {
        if (value === undefined) break;
        value = value[k];
      }
    }
    
    if (value === undefined) {
      if (paramsOrFallback !== undefined && (typeof paramsOrFallback === 'string' || Array.isArray(paramsOrFallback))) {
        return paramsOrFallback;
      }
      return key;
    }
    
    const actualParams = (typeof paramsOrFallback === 'string' || Array.isArray(paramsOrFallback)) ? params : paramsOrFallback;
    
    if (typeof value === 'string' && actualParams && !Array.isArray(actualParams)) {
      return value.replace(/\{(\w+)\}/g, (_, k) => String((actualParams as Record<string, string | number>)[k] ?? `{${k}}`));
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
