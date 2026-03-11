import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { bigFiveQuestions } from '../data/bigFive';
import { cognitiveDistortionsQuestions } from '../data/cognitiveDistortions';
import { mbtiQuestions } from '../data/mbti';
import { enneagramQuestions } from '../data/enneagram';
import { phq9Questions } from '../data/phq9';
import { npi40Questions } from '../data/npi40';
import { useLanguage } from '../contexts/LanguageContext';

const TESTS: Record<string, any> = {
  'npi-40': {
    titleKey: 'tests.npi40.title',
    questions: npi40Questions,
    descriptionKey: 'tests.npi40.description',
    options: [] // Options are defined per-question for forced choice
  },
  'phq9': {
    titleKey: 'tests.phq9.title',
    questions: phq9Questions,
    descriptionKey: 'tests.phq9.description',
    options: [
      { value: 0, labelKey: 'testRunner.options.notAtAll' },
      { value: 1, labelKey: 'testRunner.options.severalDays' },
      { value: 2, labelKey: 'testRunner.options.moreThanHalf' },
      { value: 3, labelKey: 'testRunner.options.nearlyEveryDay' }
    ]
  },
  'big-five': {
    titleKey: 'tests.big-five.title',
    questions: bigFiveQuestions,
    descriptionKey: 'tests.big-five.description',
    options: [
      { value: 1, labelKey: 'testRunner.options.veryInaccurate' },
      { value: 2, labelKey: 'testRunner.options.moderatelyInaccurate' },
      { value: 3, labelKey: 'testRunner.options.neutral' },
      { value: 4, labelKey: 'testRunner.options.moderatelyAccurate' },
      { value: 5, labelKey: 'testRunner.options.veryAccurate' }
    ]
  },
  'mbti': {
    titleKey: 'tests.mbti.title',
    questions: mbtiQuestions,
    descriptionKey: 'tests.mbti.description',
    options: [
      { value: 1, labelKey: 'testRunner.options.stronglyDisagree' },
      { value: 2, labelKey: 'testRunner.options.disagree' },
      { value: 3, labelKey: 'testRunner.options.neutralMBTI' },
      { value: 4, labelKey: 'testRunner.options.agree' },
      { value: 5, labelKey: 'testRunner.options.stronglyAgree' }
    ]
  },
  'cbt-cognitive-distortions': {
    titleKey: 'tests.cbt-cognitive-distortions.title',
    questions: cognitiveDistortionsQuestions,
    descriptionKey: 'tests.cbt-cognitive-distortions.description',
    options: [
      { value: 1, labelKey: 'testRunner.options.never' },
      { value: 2, labelKey: 'testRunner.options.rarely' },
      { value: 3, labelKey: 'testRunner.options.sometimes' },
      { value: 4, labelKey: 'testRunner.options.often' },
      { value: 5, labelKey: 'testRunner.options.almostAlways' }
    ]
  },
  'enneagram': {
    titleKey: 'tests.enneagram.title',
    questions: enneagramQuestions,
    descriptionKey: 'tests.enneagram.description',
    options: [
      { value: 1, labelKey: 'testRunner.options.stronglyDisagree' },
      { value: 2, labelKey: 'testRunner.options.disagree' },
      { value: 3, labelKey: 'testRunner.options.neutralMBTI' },
      { value: 4, labelKey: 'testRunner.options.agree' },
      { value: 5, labelKey: 'testRunner.options.stronglyAgree' }
    ]
  }
};

const QUESTIONS_PER_PAGE = 5;

export default function TestRunner() {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const test = testId ? TESTS[testId] : null;

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (!test) {
    return <div className="p-12 text-center text-stone-600 dark:text-stone-400">Test not found.</div>;
  }

  const totalPages = Math.ceil(test.questions.length / QUESTIONS_PER_PAGE);
  const currentQuestions = test.questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isPageComplete = currentQuestions.every((q: any) => answers[q.id] !== undefined);
  const progress = (Object.keys(answers).length / test.questions.length) * 100;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      // Submit test
      // In a real app, we'd save to a backend. Here we pass via state.
      navigate(`/tests/${testId}/results`, { state: { answers } });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute -top-40 -right-40 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M200,0 L400,200 L200,400 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 20" />
          <path d="M200,50 L350,200 L200,350 L50,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        </motion.svg>

        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute top-1/2 -left-20 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            y: [0, -50, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <rect width="200" height="200" x="50" y="50" rx="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" />
          <rect width="140" height="140" x="80" y="80" rx="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </motion.svg>
      </div>

      <div className="mb-8 relative">
        <h1 className="text-3xl font-serif text-stone-900 dark:text-stone-50 mb-2 transition-colors">{t(test.titleKey)}</h1>
        <p className="text-stone-600 dark:text-stone-400 transition-colors">{t(test.descriptionKey)}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 font-medium mb-2 transition-colors">
          <span>{t('testRunner.progress')}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden transition-colors">
          <div 
            className="h-full bg-royal-500 dark:bg-royal-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-12 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {currentQuestions.map((q: any, index: number) => {
              const globalIndex = currentPage * QUESTIONS_PER_PAGE + index + 1;
              return (
                <div key={q.id} className="bg-white dark:bg-stone-900 p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm transition-colors duration-200">
                  <h3 className="text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-50 mb-8 leading-relaxed transition-colors">
                    <span className="text-stone-400 dark:text-stone-500 mr-3">{globalIndex}.</span>
                    {t(`question.${q.id}`, q.text)}
                  </h3>
                  
                  <div className="flex flex-col sm:grid sm:grid-flow-col sm:auto-cols-fr gap-3 sm:gap-0">
                    {(q.options || test.options).map((opt: any) => {
                      const isSelected = answers[q.id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(q.id, opt.value)}
                          className={`
                            relative flex items-center justify-center py-4 px-3 text-base font-medium transition-all h-full
                            border-y border-x sm:border-x-0 sm:first:border-l sm:last:border-r border-stone-200 dark:border-stone-700
                            sm:first:rounded-l-xl sm:last:rounded-r-xl
                            first:rounded-t-xl last:rounded-b-xl sm:first:rounded-tr-none sm:last:rounded-bl-none
                            ${isSelected 
                              ? 'bg-royal-50 dark:bg-royal-900/40 border-royal-500 dark:border-royal-500 text-royal-800 dark:text-royal-300 z-10 sm:border-x-royal-500 shadow-sm' 
                              : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100'
                            }
                          `}
                        >
                          <span className="block text-center leading-snug">{t(opt.labelKey)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-stone-800 transition-colors">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-6 py-3 text-stone-600 dark:text-stone-400 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('testRunner.back')}
        </button>
        
        <button
          onClick={handleNext}
          disabled={!isPageComplete}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
            isPageComplete 
              ? 'bg-stone-900 dark:bg-royal-600 text-white hover:bg-stone-800 dark:hover:bg-royal-500 shadow-md' 
              : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
          }`}
        >
          {currentPage === totalPages - 1 ? (
            <>
              {t('testRunner.finish')}
              <CheckCircle2 className="w-4 h-4" />
            </>
          ) : (
            <>
              {t('testRunner.next')}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
