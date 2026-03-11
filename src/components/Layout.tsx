import { Link, Outlet } from 'react-router-dom';
import { BrainCircuit, Beaker, FileText, Moon, Sun, Globe, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans dark:bg-stone-900 dark:text-stone-50 transition-colors duration-200 relative">
      <AnimatedBackground />
      <header className="border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md sticky top-0 z-50 bg-royal-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-stone-900 dark:text-stone-50 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
            <BrainCircuit className="w-6 h-6 text-royal-600 dark:text-royal-400" />
            <span className="font-serif text-xl font-semibold tracking-wide">Psychometrics<span className="text-royal-600 dark:text-royal-400">Pro</span></span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link to="/tests" className="text-base font-medium text-stone-700 dark:text-stone-300 hover:text-royal-600 dark:hover:text-royal-400 flex items-center gap-1.5 transition-colors">
                <FileText className="w-5 h-5" />
                {t('nav.assessments')}
              </Link>
              <Link to="/methodology" className="text-base font-medium text-stone-700 dark:text-stone-300 hover:text-royal-600 dark:hover:text-royal-400 flex items-center gap-1.5 transition-colors">
                <Beaker className="w-5 h-5" />
                {t('nav.methodology')}
              </Link>
            </nav>
            <div className="flex items-center gap-3 border-l border-stone-200 dark:border-stone-700 pl-6">
              <Link 
                to="/profile"
                className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-royal-600 dark:hover:text-royal-400 transition-colors rounded-full hover:bg-royal-50 dark:hover:bg-royal-900/20"
                title={t('nav.profile')}
              >
                <User className="w-4 h-4" />
              </Link>
              <button 
                onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                className="flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                title="Change Language"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
              <button 
                onClick={toggleTheme}
                className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-royal-600 dark:hover:text-royal-400 transition-colors rounded-full hover:bg-royal-50 dark:hover:bg-royal-900/20"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            className="absolute top-1/4 -right-40 text-royal-500/5 dark:text-royal-400/5"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 30" />
            <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 40" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 15" />
          </motion.svg>
        </div>
        <Outlet />
      </main>

      <footer className="bg-stone-900 dark:bg-black text-stone-400 py-12 mt-24 bg-royal-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-stone-100 mb-4">
              <BrainCircuit className="w-5 h-5 text-royal-500" />
              <span className="font-serif text-lg font-semibold tracking-wide">PsychometricsPro</span>
            </div>
            <p className="text-base leading-relaxed max-w-xs text-stone-300">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-stone-100 font-medium mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-3 text-base text-stone-300">
              <li><Link to="/tests" className="hover:text-stone-100 transition-colors">{t('footer.allAssessments')}</Link></li>
              <li><Link to="/methodology" className="hover:text-stone-100 transition-colors">{t('footer.ourMethodology')}</Link></li>
              <li><Link to="/research-standards" className="hover:text-stone-100 transition-colors">{t('footer.researchStandards')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-100 font-medium mb-4">{t('footer.legalEthics')}</h4>
            <ul className="space-y-3 text-base text-stone-300">
              <li><Link to="/privacy-policy" className="hover:text-stone-100 transition-colors">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-stone-100 transition-colors">{t('footer.termsOfService')}</Link></li>
              <li><Link to="/data-anonymization" className="hover:text-stone-100 transition-colors">{t('footer.dataAnonymization')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-stone-400 text-center">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </footer>
    </div>
  );
}
