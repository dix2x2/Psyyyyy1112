import { useLocation, Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { calculateBigFiveScore, bigFiveBreakdown } from '../data/bigFive';
import { calculateCognitiveDistortionsScore } from '../data/cognitiveDistortions';
import { calculateMBTIScore } from '../data/mbti';
import { calculateEnneagramScore, enneagramTypes } from '../data/enneagram';
import { ArrowLeft, Download, Share2, Info, AlertTriangle, CheckCircle2, Brain, BookOpen, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { saveTestResult } from '../utils/storage';
import { CognitiveFunctionDisplay } from '../components/CognitiveFunctionDisplay';
import { getTypeCardClasses } from '../utils/mbtiColors';

function EnneagramResults({ answers }: { answers: Record<string, number> }) {
  const { primaryType, scores, closestTypes } = calculateEnneagramScore(answers);
  const typeDetails = enneagramTypes[primaryType];
  const { t } = useLanguage();

  // Sort scores to find wings (adjacent types)
  const sortedScores = Object.entries(scores)
    .map(([type, score]) => ({ type: parseInt(type, 10), score }))
    .sort((a, b) => b.score - a.score);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">
          {t('enneagram.title', 'Your Enneagram Profile')}
        </h1>
        <p className="text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed transition-colors">
          {t('enneagram.subtitle', 'Based on the Enneagram of Personality, here is your core motivation and fear analysis.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5 bg-indigo-900 dark:bg-indigo-950 text-white rounded-3xl p-10 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden transition-colors">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-800 dark:bg-indigo-900 rounded-full opacity-50 blur-3xl transition-colors" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-950 dark:bg-black rounded-full opacity-50 blur-3xl transition-colors" />
          
          <div className="relative z-10">
            <div className="text-sm font-bold tracking-widest uppercase text-indigo-300 dark:text-indigo-400 mb-4 transition-colors">
              {t('enneagram.yourType', 'Your Core Type')}
            </div>
            <div className="text-7xl font-serif font-bold tracking-widest mb-4">{t('common.type', 'Type')} {primaryType}</div>
            <div className="text-2xl font-serif text-indigo-100 dark:text-indigo-200 mb-6 transition-colors">
              "{t(`enneagram.types.${primaryType}.role`, typeDetails.role)}"
            </div>
            <p className="text-indigo-50 dark:text-indigo-100/80 leading-relaxed text-base max-w-sm mx-auto transition-colors">
              {t(`enneagram.types.${primaryType}.description`, typeDetails.description)}
            </p>
            
            {closestTypes && closestTypes.length > 0 && (
              <div className="mt-8 pt-6 border-t border-indigo-800/50">
                <div className="text-xs font-bold tracking-widest uppercase text-indigo-300 dark:text-indigo-400 mb-3">
                  {t('enneagram.closestTypes', 'Also Close To')}
                </div>
                <div className="flex justify-center gap-4">
                  {closestTypes.map(ct => (
                    <div key={ct.type} className="flex flex-col items-center">
                      <div className="text-xl font-bold text-white mb-1">{t('common.type', 'Type')} {ct.type}</div>
                      <div className="text-xs text-indigo-200">{ct.matchPercentage}% {t('common.match', 'Match')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-8 border-b border-stone-100 dark:border-stone-800 pb-4 transition-colors">
            {t('enneagram.coreMotivations', 'Core Motivations & Fears')}
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                {t('enneagram.coreDesire', 'Core Desire')}
              </h4>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {t(`enneagram.types.${primaryType}.coreDesire`, typeDetails.coreDesire)}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                {t('enneagram.coreFear', 'Core Fear')}
              </h4>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {t(`enneagram.types.${primaryType}.coreFear`, typeDetails.coreFear)}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-500" />
                {t('enneagram.coreMotivation', 'Core Motivation')}
              </h4>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {t(`enneagram.types.${primaryType}.coreMotivation`, typeDetails.coreMotivation)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
            {t('enneagram.coreStrengths', 'Core Strengths')}
          </h3>
          <ul className="space-y-4">
            {(t(`enneagram.types.${primaryType}.strengths`, typeDetails.strengths) as string[]).map((strength, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500 mt-2 shrink-0" />
                <span className="text-stone-700 dark:text-stone-300 leading-relaxed transition-colors">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            {t('enneagram.potentialBlindSpots', 'Potential Blind Spots')}
          </h3>
          <ul className="space-y-4">
            {(t(`enneagram.types.${primaryType}.weaknesses`, typeDetails.weaknesses) as string[]).map((weakness, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 mt-2 shrink-0" />
                <span className="text-stone-700 dark:text-stone-300 leading-relaxed transition-colors">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl p-8 border border-stone-200 dark:border-stone-800 transition-colors">
        <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
          <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          {t('enneagram.researchInsights', 'Research Insights')}
        </h3>
        <div className="space-y-4">
          {(t(`enneagram.types.${primaryType}.researchInsights`, typeDetails.researchInsights) as string[]).map((insight, i) => (
            <div key={i} className="flex items-start gap-3 bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-100 dark:border-stone-800 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 mt-2 shrink-0" />
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed transition-colors">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MBTIResults({ answers }: { answers: Record<string, number> }) {
  const result = calculateMBTIScore(answers);
  const { scores, type, details, closestTypes } = result;
  const { t } = useLanguage();
  const cardColors = getTypeCardClasses(type);

  const renderBar = (leftLabel: string, rightLabel: string, score: number, leftLetter: string, rightLetter: string) => {
    // Score is 0-100 where 0 is 100% left, 100 is 100% right.
    const isRight = score >= 50;
    const percentage = isRight ? score : 100 - score;
    const dominantLetter = isRight ? rightLetter : leftLetter;

    return (
      <div className="mb-8 last:mb-0">
        <div className="flex justify-between items-end mb-2">
          <div className={`font-medium transition-colors ${!isRight ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-400 dark:text-stone-500'}`}>
            {leftLabel} ({leftLetter})
          </div>
          <div className="text-xl font-serif text-stone-900 dark:text-stone-50 font-bold transition-colors">
            {percentage}% {dominantLetter}
          </div>
          <div className={`font-medium transition-colors ${isRight ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-400 dark:text-stone-500'}`}>
            {rightLabel} ({rightLetter})
          </div>
        </div>
        <div className="relative w-full h-3 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden flex transition-colors">
          <div 
            className={`h-full transition-all duration-1000 ${!isRight ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-transparent'}`}
            style={{ width: `${!isRight ? percentage : 100 - score}%` }}
          />
          <div 
            className={`h-full transition-all duration-1000 ${isRight ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-transparent'}`}
            style={{ width: `${isRight ? percentage : score}%` }}
          />
          {/* Center marker */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white dark:bg-stone-900 z-10 transition-colors" />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t('mbti.title')}</h1>
        <p className="text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed transition-colors">
          {t('mbti.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className={`lg:col-span-5 ${cardColors.bg} ${cardColors.text} rounded-3xl p-10 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden transition-colors`}>
          <div className={`absolute -top-24 -right-24 w-64 h-64 ${cardColors.blob1} rounded-full opacity-50 blur-3xl transition-colors`} />
          <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${cardColors.blob2} rounded-full opacity-50 blur-3xl transition-colors`} />
          
          <div className="relative z-10">
            <div className={`text-sm font-bold tracking-widest uppercase ${cardColors.label} mb-4 transition-colors`}>{t('mbti.yourType')}</div>
            <div className="text-7xl font-serif font-bold tracking-widest mb-4">{type}</div>
            <div className={`text-2xl font-serif ${cardColors.title} mb-6 transition-colors`}>"{t(`mbti.types.${type}.title`, details.title)}"</div>
            <p className={`${cardColors.desc} leading-relaxed text-base max-w-sm mx-auto transition-colors`}>
              {t(`mbti.types.${type}.description`, details.description)}
            </p>
            
            {closestTypes && closestTypes.length > 0 && (
              <div className={`mt-8 pt-6 border-t ${cardColors.label} border-opacity-20`}>
                <div className={`text-xs font-bold tracking-widest uppercase ${cardColors.label} mb-3`}>
                  {t('mbti.closestTypes', 'Also Close To')}
                </div>
                <div className="flex justify-center gap-4">
                  {closestTypes.map(ct => (
                    <div key={ct.type} className="flex flex-col items-center">
                      <div className={`text-xl font-bold ${cardColors.title} mb-1`}>{ct.type}</div>
                      <div className={`text-xs ${cardColors.desc}`}>{ct.matchPercentage}% {t('common.match', 'Match')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-8 border-b border-stone-100 dark:border-stone-800 pb-4 transition-colors">{t('mbti.preferenceSpectrums')}</h3>
          {renderBar(t('mbti.introversion'), t('mbti.extraversion'), scores.EI, 'I', 'E')}
          {renderBar(t('mbti.intuition'), t('mbti.sensing'), scores.SN, 'N', 'S')}
          {renderBar(t('mbti.feeling'), t('mbti.thinking'), scores.TF, 'F', 'T')}
          {renderBar(t('mbti.perceiving'), t('mbti.judging'), scores.JP, 'P', 'J')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
            {t('mbti.coreStrengths')}
          </h3>
          <ul className="space-y-4">
            {(t(`mbti.types.${type}.strengths`, details.strengths) as string[]).map((strength, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-800 dark:text-stone-300 text-lg transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500 mt-2.5 shrink-0 transition-colors" />
                <span className="leading-relaxed">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            {t('mbti.potentialBlindSpots')}
          </h3>
          <ul className="space-y-4">
            {(t(`mbti.types.${type}.weaknesses`, details.weaknesses) as string[]).map((weakness, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-800 dark:text-stone-300 text-lg transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 mt-2.5 shrink-0 transition-colors" />
                <span className="leading-relaxed">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <Brain className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            {t('mbti.cognitiveFunctions')}
          </h3>
          <div className="space-y-6">
            <CognitiveFunctionDisplay label={t('mbti.function.dominant')} funcString={details.cognitiveFunctions.dominant} />
            <CognitiveFunctionDisplay label={t('mbti.function.auxiliary')} funcString={details.cognitiveFunctions.auxiliary} />
            <CognitiveFunctionDisplay label={t('mbti.function.tertiary')} funcString={details.cognitiveFunctions.tertiary} />
            <CognitiveFunctionDisplay label={t('mbti.function.inferior')} funcString={details.cognitiveFunctions.inferior} />
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            {t('mbti.researchInsights')}
          </h3>
          <ul className="space-y-4">
            {(t(`mbti.types.${type}.researchInsights`, details.researchInsights) as string[]).map((insight, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-800 dark:text-stone-300 text-lg transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mt-2.5 shrink-0 transition-colors" />
                <span className="leading-relaxed">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function BigFiveResults({ answers }: { answers: Record<string, number> }) {
  const scores = calculateBigFiveScore(answers);
  const { theme } = useTheme();
  const { t } = useLanguage();

  const data = [
    { subject: 'Openness', A: scores.O, fullMark: 100 },
    { subject: 'Conscientiousness', A: scores.C, fullMark: 100 },
    { subject: 'Extraversion', A: scores.E, fullMark: 100 },
    { subject: 'Agreeableness', A: scores.A, fullMark: 100 },
    { subject: 'Neuroticism', A: scores.N, fullMark: 100 },
  ];

  const getLevel = (score: number) => {
    if (score < 33) return 'low';
    if (score < 66) return 'medium';
    return 'high';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t('bigFive.title')}</h1>
        <p className="text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed transition-colors">
          {t('bigFive.subtitle')}
        </p>
      </div>

      {/* Radar Chart Section */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 mb-16 flex flex-col md:flex-row items-center gap-12 transition-colors">
        <div className="w-full md:w-1/2 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke={theme === 'dark' ? '#3f3f46' : '#e5e7eb'} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: theme === 'dark' ? '#a8a29e' : '#4b5563', fontSize: 13, fontWeight: 500 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Your Score"
                dataKey="A"
                stroke={theme === 'dark' ? '#34d399' : '#047857'}
                fill={theme === 'dark' ? '#10b981' : '#10b981'}
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', backgroundColor: theme === 'dark' ? '#1c1917' : '#ffffff' }}
                itemStyle={{ color: theme === 'dark' ? '#34d399' : '#047857', fontWeight: 600 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 border-b border-stone-100 dark:border-stone-800 pb-4 transition-colors">{t('bigFive.scoreSummary')}</h3>
          <div className="space-y-4">
            {Object.entries(scores).map(([key, score]) => {
              const traitKey = key as keyof typeof bigFiveBreakdown;
              const trait = bigFiveBreakdown[traitKey];
              const level = getLevel(score);
              
              return (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900 dark:text-stone-100 transition-colors">{t(`bigFive.traits.${key}.name`, trait.name)}</span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 ml-2 uppercase tracking-wider font-semibold transition-colors">
                      {t(`bigFive.levels.${level}`, level)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden transition-colors">
                      <div 
                        className="h-full bg-emerald-600 dark:bg-emerald-500 transition-colors"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="text-sm font-mono text-stone-600 dark:text-stone-400 w-8 text-right transition-colors">{score}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 p-4 rounded-xl text-sm flex items-start gap-3 mt-6 transition-colors">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{t('bigFive.scoreInfo')}</p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-12">
        <h2 className="text-3xl font-serif text-stone-900 dark:text-stone-50 text-center mb-12 transition-colors">{t('bigFive.extensiveAnalysis')}</h2>
        
        {Object.entries(scores).map(([key, score]) => {
          const traitKey = key as keyof typeof bigFiveBreakdown;
          const trait = bigFiveBreakdown[traitKey];
          const level = getLevel(score);
          const levelText = trait[level];
          
          return (
            <div key={key} className="bg-white dark:bg-stone-900 rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 dark:border-stone-800 relative overflow-hidden transition-colors">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600 dark:bg-emerald-500 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-2 transition-colors">{t(`bigFive.traits.${key}.name`, trait.name)}</h3>
                  <p className="text-stone-600 dark:text-stone-400 text-base transition-colors">{t(`bigFive.traits.${key}.description`, trait.description)}</p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-4xl font-light text-emerald-700 dark:text-emerald-400 transition-colors">{score}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-1 transition-colors">{t('bigFive.percentile')}</span>
                </div>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none">
                <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-xl mb-6 border border-stone-100 dark:border-stone-800 transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2 transition-colors">
                    {t('bigFive.yourProfile')} <span className="text-emerald-700 dark:text-emerald-400">{t(`bigFive.levels.${level}`, level).toUpperCase()}</span>
                  </h4>
                  <p className="text-stone-800 dark:text-stone-300 leading-relaxed m-0 text-lg transition-colors">{t(`bigFive.traits.${key}.${level}`, levelText)}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 transition-colors">{t('bigFive.realWorldImplications')}</h4>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed m-0 text-lg transition-colors">{t(`bigFive.traits.${key}.implications`, trait.implications)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function CognitiveDistortionsResults({ answers }: { answers: Record<string, number> }) {
  const result = calculateCognitiveDistortionsScore(answers);
  const { t } = useLanguage();
  
  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'Low': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800';
      case 'Moderate': return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800';
      case 'High': return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800';
      case 'Severe': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800';
      default: return 'text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t('cbt.title')}</h1>
        <p className="text-xl text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed transition-colors">
          {t('cbt.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1 bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center text-center transition-colors">
          <h3 className="text-stone-500 dark:text-stone-400 font-medium uppercase tracking-wider text-sm mb-4 transition-colors">{t('cbt.overallTendency')}</h3>
          <div className="text-6xl font-light text-stone-900 dark:text-stone-50 mb-2 transition-colors">{result.totalScore}</div>
          <div className="text-stone-400 dark:text-stone-500 text-sm mb-6 transition-colors">{t('cbt.outOf')} {result.maxPossibleTotal}</div>
          <div className={`px-4 py-2 rounded-full font-semibold border transition-colors ${getSeverityColor(result.severity)}`}>
            {result.severity} {t('cbt.severity')}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 transition-colors">
          <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-6 flex items-center gap-2 transition-colors">
            <AlertTriangle className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            {t('cbt.primaryDistortions')}
          </h3>
          <div className="space-y-6">
            {result.topDistortions.map((d, index) => {
              const safeKey = d.distortion.replace(/[^a-zA-Z0-9]/g, '');
              return (
              <div key={d.distortion} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-500 dark:text-stone-400 font-bold shrink-0 mt-1 transition-colors">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-stone-900 dark:text-stone-50 mb-1 transition-colors">{t(`cbt.distortions.${safeKey}.name`, d.distortion)}</h4>
                  <p className="text-stone-700 dark:text-stone-300 text-base leading-relaxed transition-colors">{t(`cbt.distortions.${safeKey}.description`, d.details.description)}</p>
                </div>
              </div>
            )})}
            {result.topDistortions.length === 0 && (
              <p className="text-stone-700 dark:text-stone-300 text-lg transition-colors">{t('cbt.lowScoreMessage')}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-900 dark:text-stone-50 text-center mb-12 transition-colors">{t('cbt.detailedBreakdown')}</h2>
        
        {result.topDistortions.map((d) => {
          const safeKey = d.distortion.replace(/[^a-zA-Z0-9]/g, '');
          return (
          <div key={d.distortion} className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-stone-200 dark:border-stone-800 relative overflow-hidden transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 dark:bg-blue-500 transition-colors" />
            <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50 mb-4 transition-colors">{t(`cbt.distortions.${safeKey}.name`, d.distortion)}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3 transition-colors">{t('cbt.thePattern')}</h4>
                <p className="text-stone-800 dark:text-stone-300 leading-relaxed text-lg transition-colors">{t(`cbt.distortions.${safeKey}.description`, d.details.description)}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50 transition-colors">
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-3 transition-colors">{t('cbt.implicationsReframing')}</h4>
                <p className="text-blue-900 dark:text-blue-200 leading-relaxed text-lg transition-colors">{t(`cbt.distortions.${safeKey}.implications`, d.details.implications)}</p>
              </div>
            </div>
          </div>
        )})}
      </div>
    </motion.div>
  );
}

export default function TestResults() {
  const location = useLocation();
  const { testId } = useParams<{ testId: string }>();
  const answers = location.state?.answers;
  const { t } = useLanguage();

  useEffect(() => {
    if (answers && testId && !location.state?.isHistory) {
      saveTestResult(testId, answers);
    }
  }, [answers, testId, location.state?.isHistory]);

  if (!answers || !testId) {
    return <Navigate to="/tests" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <Link to="/tests" className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t('testResults.backToCatalog')}
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => alert(t('testResults.featureComingSoon', 'Feature coming soon!'))}
            className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"
            title="Share Results"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => alert(t('testResults.featureComingSoon', 'Feature coming soon!'))}
            className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"
            title="Download Results"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {testId === 'big-five' && <BigFiveResults answers={answers} />}
      {testId === 'mbti' && <MBTIResults answers={answers} />}
      {testId === 'enneagram' && <EnneagramResults answers={answers} />}
      {testId === 'cbt-cognitive-distortions' && <CognitiveDistortionsResults answers={answers} />}
    </div>
  );
}
