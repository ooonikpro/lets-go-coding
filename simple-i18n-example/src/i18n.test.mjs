import assert from 'node:assert';
import i18n from './i18n.mjs';

const getText = () => {
  const text = i18n.t('header.links.main');

  console.log('>>>', text);

  return text;
}

try {
  assert.deepEqual(getText(), 'Главная');

  i18n.setLanguage('en');

  assert.deepEqual(getText(), 'Main');


  console.log('Success');
} catch(e) {
  console.error(e);
}