import fs from 'fs';
import { bigFiveQuestions, bigFiveBreakdown } from './src/data/bigFive.ts';
import { mbtiQuestions, mbtiTypes } from './src/data/mbti.ts';
import { cognitiveDistortionsQuestions, cognitiveDistortionsBreakdown } from './src/data/cognitiveDistortions.ts';

const en = {};
const ru = {};

// Big Five Questions
bigFiveQuestions.forEach(q => {
  en[`question.${q.id}`] = q.text;
  ru[`question.${q.id}`] = q.text; // Placeholder
});

// MBTI Questions
mbtiQuestions.forEach(q => {
  en[`question.${q.id}`] = q.text;
  ru[`question.${q.id}`] = q.text; // Placeholder
});

// CBT Questions
cognitiveDistortionsQuestions.forEach(q => {
  en[`question.${q.id}`] = q.text;
  ru[`question.${q.id}`] = q.text; // Placeholder
});

// MBTI Types
Object.keys(mbtiTypes).forEach(type => {
  en[`mbti.types.${type}.title`] = mbtiTypes[type].title;
  ru[`mbti.types.${type}.title`] = mbtiTypes[type].title;
  en[`mbti.types.${type}.description`] = mbtiTypes[type].description;
  ru[`mbti.types.${type}.description`] = mbtiTypes[type].description;
  en[`mbti.types.${type}.strengths`] = mbtiTypes[type].strengths;
  ru[`mbti.types.${type}.strengths`] = mbtiTypes[type].strengths;
  en[`mbti.types.${type}.weaknesses`] = mbtiTypes[type].weaknesses;
  ru[`mbti.types.${type}.weaknesses`] = mbtiTypes[type].weaknesses;
});

// Big Five Breakdown
Object.keys(bigFiveBreakdown).forEach(key => {
  en[`bigFive.traits.${key}.name`] = bigFiveBreakdown[key].name;
  ru[`bigFive.traits.${key}.name`] = bigFiveBreakdown[key].name;
  en[`bigFive.traits.${key}.description`] = bigFiveBreakdown[key].description;
  ru[`bigFive.traits.${key}.description`] = bigFiveBreakdown[key].description;
  en[`bigFive.traits.${key}.low`] = bigFiveBreakdown[key].low;
  ru[`bigFive.traits.${key}.low`] = bigFiveBreakdown[key].low;
  en[`bigFive.traits.${key}.medium`] = bigFiveBreakdown[key].medium;
  ru[`bigFive.traits.${key}.medium`] = bigFiveBreakdown[key].medium;
  en[`bigFive.traits.${key}.high`] = bigFiveBreakdown[key].high;
  ru[`bigFive.traits.${key}.high`] = bigFiveBreakdown[key].high;
  en[`bigFive.traits.${key}.implications`] = bigFiveBreakdown[key].implications;
  ru[`bigFive.traits.${key}.implications`] = bigFiveBreakdown[key].implications;
});

// CBT Breakdown
Object.keys(cognitiveDistortionsBreakdown).forEach(key => {
  const safeKey = key.replace(/[^a-zA-Z0-9]/g, '');
  en[`cbt.distortions.${safeKey}.name`] = key;
  ru[`cbt.distortions.${safeKey}.name`] = key;
  en[`cbt.distortions.${safeKey}.description`] = cognitiveDistortionsBreakdown[key].description;
  ru[`cbt.distortions.${safeKey}.description`] = cognitiveDistortionsBreakdown[key].description;
  en[`cbt.distortions.${safeKey}.implications`] = cognitiveDistortionsBreakdown[key].implications;
  ru[`cbt.distortions.${safeKey}.implications`] = cognitiveDistortionsBreakdown[key].implications;
});

fs.writeFileSync('en_add.json', JSON.stringify(en, null, 2));
fs.writeFileSync('ru_add.json', JSON.stringify(ru, null, 2));
