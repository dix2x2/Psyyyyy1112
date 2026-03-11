import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Clock, AlertCircle, Beaker, Brain, Heart, Users, ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SUGGESTED_TESTS = [
  {
    id: 'big-five',
    title: 'Big Five Personality Inventory (OCEAN)',
    category: 'Personality',
    icon: Brain,
    description: 'The most scientifically validated model of human personality. Measures Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    estimatedTime: '15-20 min',
    status: 'Active',
    researchBase: 'Costa & McCrae (1992), Goldberg (1992)',
  },
  {
    id: 'mbti',
    title: 'Myers-Briggs Type Indicator (MBTI)',
    category: 'Personality',
    icon: Compass,
    description: 'A comprehensive assessment of your psychological preferences across four dichotomies: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.',
    estimatedTime: '10-15 min',
    status: 'Active',
    researchBase: 'Jung (1921), Myers & Briggs (1944)',
  },
  {
    id: 'enneagram',
    title: 'Enneagram Personality Typology',
    category: 'Personality',
    icon: Users,
    description: 'A system of personality typing that describes patterns in how people interpret the world and manage their emotions, focusing on 9 core motivations and fears.',
    estimatedTime: '10-15 min',
    status: 'Active',
    researchBase: 'Riso & Hudson (1996), Palmer (1988)',
  },
  {
    id: 'phq9',
    title: 'PHQ-9 Depression Assessment',
    category: 'Clinical/Cognitive',
    icon: Heart,
    description: 'The Patient Health Questionnaire (PHQ-9) is a widely used, highly validated screening tool for measuring the severity of depressive symptoms.',
    estimatedTime: '5 min',
    status: 'Active',
    researchBase: 'Kroenke, Spitzer, & Williams (2001)',
  },
  {
    id: 'npi-40',
    title: 'Narcissistic Personality Inventory (NPI-40)',
    category: 'Personality',
    icon: Brain,
    description: 'The full, original 40-item clinical measure of subclinical narcissism, breaking down traits like Authority, Superiority, Entitlement, and Vanity.',
    estimatedTime: '10-15 min',
    status: 'Active',
    researchBase: 'Raskin & Terry (1988)',
  },
  {
    id: 'cbt-cognitive-distortions',
    title: 'Cognitive Distortion Inventory',
    category: 'Clinical/Cognitive',
    icon: Beaker,
    description: 'Identifies common thinking errors (e.g., catastrophizing, black-and-white thinking) based on Cognitive Behavioral Therapy principles.',
    estimatedTime: '10 min',
    status: 'Active',
    researchBase: 'Beck (1979), Burns (1980)',
  },
  {
    id: 'attachment-style',
    title: 'Adult Attachment Style Assessment',
    category: 'Relationships',
    icon: Heart,
    description: 'Evaluates patterns of intimacy and relationship behavior based on attachment theory (Secure, Anxious, Avoidant, Disorganized).',
    estimatedTime: '10-15 min',
    status: 'Planned',
    researchBase: 'Brennan, Clark, & Shaver (1998)',
  }
];

export default function Tests() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute top-0 right-0 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path d="M150,0 L300,150 L150,300 L0,150 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" />
          <path d="M150,30 L270,150 L150,270 L30,150 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </motion.svg>

        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="absolute bottom-0 left-0 text-royal-500/5 dark:text-royal-400/5"
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
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </motion.svg>

        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-royal-500/5 dark:text-royal-400/5"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path d="M200,0 L400,200 L200,400 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 20" />
          <path d="M200,50 L350,200 L200,350 L50,200 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        </motion.svg>
      </div>

      <div className="mb-12 relative">
        <h1 className="text-4xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t('tests.title')}</h1>
        <p className="text-xl text-stone-700 dark:text-stone-300 max-w-3xl leading-relaxed transition-colors">
          {t('tests.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SUGGESTED_TESTS.map((test, index) => {
          const Icon = test.icon;
          const isActive = test.status === 'Active';
          
          return (
            <motion.div 
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-stone-900 border rounded-2xl p-6 flex flex-col transition-all duration-200 ${
                isActive 
                  ? 'border-royal-200 dark:border-royal-900/50 shadow-md hover:shadow-lg ring-1 ring-royal-50 dark:ring-royal-900/20 bg-royal-pattern' 
                  : 'border-stone-200 dark:border-stone-800 opacity-80'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-royal-100 dark:bg-royal-900/50 text-royal-700 dark:text-royal-400' : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                      isActive ? 'text-royal-700 dark:text-royal-400' : 'text-stone-500 dark:text-stone-500'
                    }`}>{t(`tests.category.${test.category}`, test.category)}</span>
                    <h3 className="text-xl font-serif font-medium text-stone-900 dark:text-stone-50 transition-colors">{t(`tests.${test.id}.title`, test.title)}</h3>
                  </div>
                </div>
              </div>
              
              <p className="text-stone-700 dark:text-stone-300 text-base leading-relaxed mb-6 flex-grow transition-colors">
                {t(`tests.${test.id}.cardDescription`, test.description)}
              </p>
              
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-4 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {test.estimatedTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {t('tests.basedOn')} {test.researchBase}
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                  isActive ? 'bg-royal-100 dark:bg-royal-900/30 text-royal-800 dark:text-royal-300' : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-400'
                }`}>
                  {t(`tests.status.${test.status}`, test.status)}
                </span>
              </div>

              {isActive && (
                <Link 
                  to={`/tests/${test.id}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-stone-900 dark:bg-royal-600 text-white rounded-xl font-medium hover:bg-stone-800 dark:hover:bg-royal-500 transition-colors shadow-lg shadow-royal-500/10 dark:shadow-royal-400/10"
                >
                  {t('tests.start')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
