import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, LineChart, BookOpenCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-stone-50 to-stone-50 dark:from-emerald-900/20 dark:via-stone-900 dark:to-stone-900 -z-10 transition-colors duration-200" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-6 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-tight mb-6 transition-colors">
              {t('home.hero.title')} <span className="italic text-emerald-800 dark:text-emerald-400">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-stone-700 dark:text-stone-300 mb-10 max-w-2xl leading-relaxed transition-colors">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tests" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 dark:bg-emerald-600 text-white rounded-full font-medium hover:bg-stone-800 dark:hover:bg-emerald-500 transition-colors">
                {t('home.hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/methodology" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-full font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
                {t('home.hero.methodology')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-white dark:bg-stone-950 border-y border-stone-200 dark:border-stone-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t('home.principles.title')}</h2>
            <p className="text-stone-700 dark:text-stone-300 text-lg transition-colors">{t('home.principles.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-6 transition-colors">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-50 mb-3 transition-colors">{t('home.principles.research.title')}</h3>
              <p className="text-stone-700 dark:text-stone-300 text-base leading-relaxed transition-colors">
                {t('home.principles.research.desc')}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-6 transition-colors">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-50 mb-3 transition-colors">{t('home.principles.data.title')}</h3>
              <p className="text-stone-700 dark:text-stone-300 text-base leading-relaxed transition-colors">
                {t('home.principles.data.desc')}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-6 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 dark:text-stone-50 mb-3 transition-colors">{t('home.principles.privacy.title')}</h3>
              <p className="text-stone-700 dark:text-stone-300 text-base leading-relaxed transition-colors">
                {t('home.principles.privacy.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
