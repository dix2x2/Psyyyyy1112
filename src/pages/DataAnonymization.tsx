import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DataAnonymization() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif text-stone-900 dark:text-stone-50 mb-6 transition-colors">{t('dataAnonymization.title')}</h1>
        <p className="text-2xl text-stone-700 dark:text-stone-300 mb-12 leading-relaxed transition-colors">
          {t('dataAnonymization.subtitle')}
        </p>

        <div className="space-y-8 text-lg text-stone-800 dark:text-stone-300 leading-relaxed transition-colors">
          <p>{t('dataAnonymization.p1')}</p>
          <p>{t('dataAnonymization.p2')}</p>
          <p>{t('dataAnonymization.p3')}</p>
        </div>
      </motion.div>
    </div>
  );
}
