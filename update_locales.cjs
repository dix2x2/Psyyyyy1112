const fs = require('fs');

const enPath = './src/locales/en.ts';
const ruPath = './src/locales/ru.ts';

const enAdditions = `
  // Research Standards
  'researchStandards.title': 'Research Standards',
  'researchStandards.subtitle': 'Our commitment to scientific rigor and empirical evidence.',
  'researchStandards.p1': 'At PsychometricsPro, we believe that psychological assessments should be grounded in robust scientific research. We do not invent constructs or rely on pop-psychology trends.',
  'researchStandards.p2': 'All our assessments are based on peer-reviewed literature and established psychometric models. We continuously review the latest research to ensure our tools remain accurate and relevant.',
  'researchStandards.p3': 'We prioritize construct validity, ensuring that our tests actually measure what they claim to measure. Our extensive breakdowns are designed to provide nuanced, actionable insights rather than superficial labels.',

  // Privacy Policy
  'privacyPolicy.title': 'Privacy Policy',
  'privacyPolicy.subtitle': 'How we protect your data and respect your privacy.',
  'privacyPolicy.p1': 'Your privacy is our top priority. We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.',
  'privacyPolicy.p2': 'We only collect the data necessary to provide you with accurate assessment results. We do not sell your personal information to third parties.',
  'privacyPolicy.p3': 'All assessment responses are processed securely. We use industry-standard encryption to protect your data both in transit and at rest.',

  // Terms of Service
  'termsOfService.title': 'Terms of Service',
  'termsOfService.subtitle': 'The rules and guidelines for using our platform.',
  'termsOfService.p1': 'By using PsychometricsPro, you agree to these Terms of Service. Our platform is designed for educational and self-discovery purposes only.',
  'termsOfService.p2': 'Our assessments are not a substitute for professional clinical diagnosis, medical advice, or treatment. Always consult with a qualified mental health provider regarding any psychological concerns.',
  'termsOfService.p3': 'You agree to use our platform responsibly and not to misuse our services or attempt to access them using a method other than the interface and the instructions that we provide.',

  // Data Anonymization
  'dataAnonymization.title': 'Data Anonymization',
  'dataAnonymization.subtitle': 'Our approach to keeping your assessment data anonymous.',
  'dataAnonymization.p1': 'We employ strict data anonymization techniques to ensure that your assessment responses cannot be linked back to your personal identity.',
  'dataAnonymization.p2': 'When we use aggregated data for research or platform improvement purposes, all personally identifiable information is stripped away.',
  'dataAnonymization.p3': 'Our anonymization protocols are designed to comply with global data protection regulations, giving you peace of mind while you explore your psychological profile.',
`;

const ruAdditions = `
  // Research Standards
  'researchStandards.title': 'Научные стандарты',
  'researchStandards.subtitle': 'Наша приверженность научной строгости и эмпирическим данным.',
  'researchStandards.p1': 'В PsychometricsPro мы верим, что психологические оценки должны основываться на надежных научных исследованиях. Мы не изобретаем конструкты и не полагаемся на тренды поп-психологии.',
  'researchStandards.p2': 'Все наши оценки основаны на рецензируемой литературе и признанных психометрических моделях. Мы постоянно изучаем новейшие исследования, чтобы наши инструменты оставались точными и актуальными.',
  'researchStandards.p3': 'Мы уделяем приоритетное внимание конструктной валидности, гарантируя, что наши тесты действительно измеряют то, что они заявляют. Наши подробные анализы предназначены для предоставления нюансированных, практических выводов, а не поверхностных ярлыков.',

  // Privacy Policy
  'privacyPolicy.title': 'Политика конфиденциальности',
  'privacyPolicy.subtitle': 'Как мы защищаем ваши данные и уважаем вашу конфиденциальность.',
  'privacyPolicy.p1': 'Ваша конфиденциальность — наш главный приоритет. Мы стремимся защищать вашу личную информацию и быть прозрачными в отношении того, как мы собираем, используем и защищаем ваши данные.',
  'privacyPolicy.p2': 'Мы собираем только те данные, которые необходимы для предоставления вам точных результатов оценки. Мы не продаем вашу личную информацию третьим лицам.',
  'privacyPolicy.p3': 'Все ответы на оценки обрабатываются безопасно. Мы используем стандартное отраслевое шифрование для защиты ваших данных как при передаче, так и при хранении.',

  // Terms of Service
  'termsOfService.title': 'Условия использования',
  'termsOfService.subtitle': 'Правила и рекомендации по использованию нашей платформы.',
  'termsOfService.p1': 'Используя PsychometricsPro, вы соглашаетесь с настоящими Условиями использования. Наша платформа предназначена исключительно для образовательных целей и самопознания.',
  'termsOfService.p2': 'Наши оценки не заменяют профессиональный клинический диагноз, медицинскую консультацию или лечение. Всегда консультируйтесь с квалифицированным специалистом в области психического здоровья по любым психологическим вопросам.',
  'termsOfService.p3': 'Вы соглашаетесь использовать нашу платформу ответственно и не злоупотреблять нашими услугами, а также не пытаться получить к ним доступ с использованием методов, отличных от предоставленного нами интерфейса и инструкций.',

  // Data Anonymization
  'dataAnonymization.title': 'Анонимизация данных',
  'dataAnonymization.subtitle': 'Наш подход к сохранению анонимности данных ваших оценок.',
  'dataAnonymization.p1': 'Мы применяем строгие методы анонимизации данных, чтобы гарантировать, что ваши ответы на оценки не могут быть связаны с вашей личностью.',
  'dataAnonymization.p2': 'Когда мы используем агрегированные данные для исследований или улучшения платформы, вся личная информация удаляется.',
  'dataAnonymization.p3': 'Наши протоколы анонимизации разработаны в соответствии с глобальными правилами защиты данных, что дает вам душевное спокойствие при изучении вашего психологического профиля.',
`;

function insertAdditions(filePath, additions) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Find the last closing brace
  const lastBraceIndex = content.lastIndexOf('}');
  if (lastBraceIndex !== -1) {
    content = content.slice(0, lastBraceIndex) + additions + content.slice(lastBraceIndex);
    fs.writeFileSync(filePath, content);
  }
}

insertAdditions(enPath, enAdditions);
insertAdditions(ruPath, ruAdditions);

console.log('Translations added successfully.');
