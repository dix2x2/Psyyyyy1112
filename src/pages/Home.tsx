import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, LineChart, BookOpenCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-royal-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-400/10 via-stone-50 to-stone-50 dark:from-royal-400/10 dark:via-stone-900 dark:to-stone-900 -z-10 transition-colors duration-200" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute -top-20 -right-20 text-royal-500/5 dark:text-royal-400/5"
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" />
            <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="20 40" />
          </motion.svg>
          
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="absolute bottom-10 left-10 text-royal-500/10 dark:text-royal-400/10"
            animate={{
              y: [0, -30, 0],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect width="100" height="100" x="50" y="50" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(45 100 100)" />
            <rect width="60" height="60" x="70" y="70" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-45 100 100)" />
          </motion.svg>

          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-royal-500/5 dark:text-royal-400/5"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <polygon points="150,0 300,150 150,300 0,150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            <polygon points="150,30 270,150 150,270 30,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          </motion.svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl relative"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-royal-400/20 dark:bg-royal-400/10 rounded-full blur-2xl -z-10" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-100 dark:bg-royal-900/40 text-royal-600 dark:text-royal-400 text-xs font-medium mb-6 transition-colors border border-royal-200 dark:border-royal-800/50">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-tight mb-6 transition-colors">
              {t('home.hero.title')} <span className="italic text-royal-600 dark:text-royal-400">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-stone-700 dark:text-stone-300 mb-10 max-w-2xl leading-relaxed transition-colors">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tests" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-medium hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-lg shadow-royal-500/10 dark:shadow-royal-400/10 border border-transparent dark:border-stone-200">
                {t('home.hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/methodology" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-full font-medium hover:bg-royal-50 dark:hover:bg-stone-700 transition-colors hover:border-royal-200 dark:hover:border-royal-800">
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
              <div className="w-12 h-12 rounded-2xl bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-400 flex items-center justify-center mb-6 transition-colors">
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
