import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Calendar, ArrowRight, Trash2, Activity, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getSavedTestResults, deleteTestResult, SavedTestResult } from '../utils/storage';
import { calculateMBTIScore } from '../data/mbti';
import { calculateBigFiveScore } from '../data/bigFive';
import { calculateCognitiveDistortionsScore } from '../data/cognitiveDistortions';
import { calculateEnneagramScore } from '../data/enneagram';
import { getTypeBgColorClass, getTypeColorClass } from '../utils/mbtiColors';
import { CognitiveFunctionDisplay } from '../components/CognitiveFunctionDisplay';

export default function Profile() {
  const { t } = useLanguage();
  const [results, setResults] = useState<SavedTestResult[]>([]);

  useEffect(() => {
    setResults(getSavedTestResults());
  }, []);

  const handleDelete = (id: string) => {
    deleteTestResult(id);
    setResults(getSavedTestResults());
  };

  const getTestTitle = (testId: string) => {
    switch (testId) {
      case 'mbti': return t('tests.mbti.title');
      case 'big-five': return t('tests.big-five.title');
      case 'cbt-cognitive-distortions': return t('tests.cbt-cognitive-distortions.title');
      case 'enneagram': return t('tests.enneagram.title', 'Enneagram Personality Typology');
      default: return testId;
    }
  };

  const getTestSummary = (result: SavedTestResult) => {
    try {
      if (result.testId === 'mbti') {
        const score = calculateMBTIScore(result.answers);
        return <span className={`font-bold ${getTypeColorClass(score.type)}`}>{score.type}</span>;
      }
      if (result.testId === 'cbt-cognitive-distortions') {
        const score = calculateCognitiveDistortionsScore(result.answers);
        return <span>{score.totalScore} / {score.maxPossibleTotal} ({score.severity})</span>;
      }
      if (result.testId === 'enneagram') {
        const score = calculateEnneagramScore(result.answers);
        return <span className="font-bold text-indigo-600 dark:text-indigo-400">{t('common.type', 'Type')} {score.primaryType}</span>;
      }
      if (result.testId === 'big-five') {
        return <span className="text-stone-500 dark:text-stone-400">{t('profile.completed')}</span>;
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  const latestMBTI = results.find(r => r.testId === 'mbti');
  let mbtiProfile = null;
  if (latestMBTI) {
    try {
      mbtiProfile = calculateMBTIScore(latestMBTI.answers);
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute -top-20 -left-20 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
        </motion.svg>

        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute bottom-20 right-10 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, -180],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <polygon points="150,0 300,150 150,300 0,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <polygon points="150,30 270,150 150,270 30,150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </motion.svg>
      </div>

      <div className="flex items-center gap-4 mb-12 relative">
        <div className="w-16 h-16 bg-royal-100 dark:bg-royal-900/40 rounded-full flex items-center justify-center text-royal-600 dark:text-royal-400 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-royal-200/50 dark:bg-royal-800/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <User className="w-8 h-8 relative z-10" />
        </div>
        <div>
          <h1 className="text-3xl font-serif text-stone-900 dark:text-stone-50 transition-colors">{t('profile.title')}</h1>
          <p className="text-stone-600 dark:text-stone-400 transition-colors">{t('profile.subtitle')}</p>
        </div>
      </div>

      {mbtiProfile && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-stone-900 rounded-3xl p-8 border border-stone-200 dark:border-stone-800 mb-12 shadow-sm transition-colors relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <BrainCircuit className="w-64 h-64 text-stone-900 dark:text-stone-50" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className={`w-32 h-32 ${getTypeBgColorClass(mbtiProfile.type)} rounded-full flex items-center justify-center shrink-0 shadow-inner`}>
              <span className="text-4xl font-serif font-bold tracking-wider">{mbtiProfile.type}</span>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs font-medium tracking-wide uppercase mb-3">
                <BrainCircuit className="w-3.5 h-3.5" />
                {t('profile.personalityProfile')}
              </div>
              <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-2 transition-colors">{mbtiProfile.details.title}</h2>
              <p className="text-stone-600 dark:text-stone-400 mb-8 transition-colors max-w-2xl leading-relaxed">{mbtiProfile.details.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                  <CognitiveFunctionDisplay label={t('profile.dominant')} funcString={mbtiProfile.details.cognitiveFunctions.dominant} />
                </div>
                <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                  <CognitiveFunctionDisplay label={t('profile.auxiliary')} funcString={mbtiProfile.details.cognitiveFunctions.auxiliary} />
                </div>
                <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                  <CognitiveFunctionDisplay label={t('profile.tertiary')} funcString={mbtiProfile.details.cognitiveFunctions.tertiary} />
                </div>
                <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-100 dark:border-stone-800 transition-colors">
                  <CognitiveFunctionDisplay label={t('profile.inferior')} funcString={mbtiProfile.details.cognitiveFunctions.inferior} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-6">
        <h2 className="text-xl font-serif text-stone-900 dark:text-stone-50 flex items-center gap-2 transition-colors">
          <Activity className="w-5 h-5 text-royal-600 dark:text-royal-500" />
          {t('profile.recentAssessments')}
        </h2>

        {results.length === 0 ? (
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-12 text-center border border-stone-200 dark:border-stone-800 transition-colors">
            <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-xl font-medium text-stone-900 dark:text-stone-50 mb-2 transition-colors">{t('profile.noResults')}</h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6 transition-colors">{t('profile.noResultsDesc')}</p>
            <Link 
              to="/tests" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-royal-600 text-white rounded-full font-medium hover:bg-royal-700 transition-colors"
            >
              {t('profile.takeTest')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {results.map((result, index) => (
              <motion.div 
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium text-stone-900 dark:text-stone-50 transition-colors">
                      {getTestTitle(result.testId)}
                    </h3>
                    <div className="text-sm px-2.5 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full transition-colors">
                      {getTestSummary(result)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 transition-colors">
                    <Calendar className="w-4 h-4" />
                    {new Date(result.date).toLocaleDateString(undefined, { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleDelete(result.id)}
                    className="p-2 text-stone-400 hover:text-red-500 dark:hover:text-red-400 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                    title="Delete Result"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <Link 
                    to={`/tests/${result.testId}/results`}
                    state={{ answers: result.answers, isHistory: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-full font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                  >
                    {t('profile.viewDetails')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
