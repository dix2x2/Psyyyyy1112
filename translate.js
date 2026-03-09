import fs from 'fs';
import { bigFiveQuestions, bigFiveBreakdown } from './src/data/bigFive.js';
import { mbtiQuestions, mbtiTypes } from './src/data/mbti.js';
import { cognitiveDistortionsQuestions, cognitiveDistortionsBreakdown } from './src/data/cognitiveDistortions.js';

// We need to compile the TS files to JS first, or just read them as text.
// Actually, I can just read the files as text and parse them.
