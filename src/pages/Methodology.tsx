import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif text-stone-900 dark:text-stone-50 mb-6 transition-colors">{t('methodology.title')}</h1>
        <p className="text-2xl text-stone-700 dark:text-stone-300 mb-12 leading-relaxed transition-colors">
          {t('methodology.subtitle')}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2 transition-colors">{t('methodology.foundation.title')}</h2>
            <p className="text-stone-800 dark:text-stone-300 text-lg leading-relaxed mb-4 transition-colors">
              {t('methodology.foundation.p1')}
            </p>
            <ul className="space-y-3 mt-6">
              {Array.isArray(t('methodology.foundation.list')) && (t('methodology.foundation.list') as unknown as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-800 dark:text-stone-300 text-lg transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5 transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2 transition-colors">{t('methodology.breakdown.title')}</h2>
            <p className="text-stone-800 dark:text-stone-300 text-lg leading-relaxed mb-4 transition-colors">
              {t('methodology.breakdown.p1')}
            </p>
            <p className="text-stone-800 dark:text-stone-300 text-lg leading-relaxed transition-colors">
              {t('methodology.breakdown.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2 transition-colors">{t('methodology.forms.title')}</h2>
            <p className="text-stone-800 dark:text-stone-300 text-lg leading-relaxed mb-4 transition-colors">
              {t('methodology.forms.p1')}
            </p>
            <ul className="space-y-3 mt-6">
              {Array.isArray(t('methodology.forms.list')) && (t('methodology.forms.list') as unknown as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-800 dark:text-stone-300 text-lg transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5 transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-stone-100 dark:bg-stone-900 p-8 rounded-2xl mt-12 transition-colors border border-transparent dark:border-stone-800">
            <h3 className="text-xl font-serif font-medium text-stone-900 dark:text-stone-50 mb-3 transition-colors">{t('methodology.disclaimer.title')}</h3>
            <p className="text-stone-700 dark:text-stone-400 text-base leading-relaxed transition-colors">
              {t('methodology.disclaimer.text')}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
