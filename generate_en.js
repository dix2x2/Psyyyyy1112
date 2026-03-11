import fs from 'fs';
import { enneagramQuestions, enneagramTypes } from './src/data/enneagram.js';

const enPath = './src/locales/en.ts';
const ruPath = './src/locales/ru.ts';

function generateEn() {
  let str = '';
  for (const q of enneagramQuestions) {
    str += `  'question.${q.id}': ${JSON.stringify(q.text)},\n`;
  }
  for (const [id, type] of Object.entries(enneagramTypes)) {
    str += `  'enneagram.types.${id}.role': ${JSON.stringify(type.role)},\n`;
    str += `  'enneagram.types.${id}.description': ${JSON.stringify(type.description)},\n`;
    str += `  'enneagram.types.${id}.coreDesire': ${JSON.stringify(type.coreDesire)},\n`;
    str += `  'enneagram.types.${id}.coreFear': ${JSON.stringify(type.coreFear)},\n`;
    str += `  'enneagram.types.${id}.coreMotivation': ${JSON.stringify(type.coreMotivation)},\n`;
    str += `  'enneagram.types.${id}.strengths': ${JSON.stringify(type.strengths)},\n`;
    str += `  'enneagram.types.${id}.weaknesses': ${JSON.stringify(type.weaknesses)},\n`;
    str += `  'enneagram.types.${id}.researchInsights': ${JSON.stringify(type.researchInsights)},\n`;
  }
  return str;
}

const enContent = fs.readFileSync(enPath, 'utf8');
const newEnContent = enContent.replace('};\n', generateEn() + '};\n');
fs.writeFileSync(enPath, newEnContent);
