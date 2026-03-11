import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute top-20 -right-20 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M150,0 L300,150 L150,300 L0,150 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" />
          <path d="M150,30 L270,150 L150,270 L30,150 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </motion.svg>

        <motion.svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          className="absolute bottom-40 -left-10 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="125" cy="125" r="100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 15" />
          <circle cx="125" cy="125" r="75" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" />
        </motion.svg>
      </div>

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
                  <CheckCircle2 className="w-6 h-6 text-royal-600 dark:text-royal-500 shrink-0 mt-0.5 transition-colors" />
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
                  <CheckCircle2 className="w-6 h-6 text-royal-600 dark:text-royal-500 shrink-0 mt-0.5 transition-colors" />
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
