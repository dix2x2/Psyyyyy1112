import fs from 'fs';

function merge(lang) {
  const tsFile = `src/locales/${lang}.ts`;
  let tsContent = fs.readFileSync(tsFile, 'utf8');
  
  const addFile = `${lang}_add.json`;
  const addContent = JSON.parse(fs.readFileSync(addFile, 'utf8'));
  
  // Find the last closing brace
  const lastBraceIndex = tsContent.lastIndexOf('}');
  
  let newEntries = '';
  for (const [key, value] of Object.entries(addContent)) {
    if (Array.isArray(value)) {
      newEntries += `  '${key}': ${JSON.stringify(value)},\n`;
    } else {
      newEntries += `  '${key}': ${JSON.stringify(value)},\n`;
    }
  }
  
  // Insert before the last brace
  // Make sure there's a comma before if needed
  const beforeBrace = tsContent.substring(0, lastBraceIndex).trim();
  const comma = beforeBrace.endsWith(',') ? '' : ',';
  
  const newTsContent = beforeBrace + comma + '\n' + newEntries + '};\n';
  
  fs.writeFileSync(tsFile, newTsContent);
}

merge('en');
merge('ru');
