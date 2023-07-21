import App from './components/App.js';
import i18n from './i18n.mjs';

const root = document.querySelector('#app');

const getButton = () => document.querySelector('button');

const renderApp = () => {
  root.innerHTML = App();

  addListener();
}

const addListener = () => {
  const button = getButton();

  button.onclick = () => {
    i18n.setLanguage(i18n.getLanguage() === 'en' ? 'ru' : 'en');

    renderApp();
  }
}

renderApp();