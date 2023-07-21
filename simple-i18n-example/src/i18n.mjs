import get from './get.mjs';

class i18n {
  #currentLng;
  #fallbackLng;
  #dictionary;

  init({ defaultLng, fallbackLng, dictionary }) {
    this.#currentLng = defaultLng;
    this.#fallbackLng = fallbackLng;
    this.#dictionary = dictionary;
  }

  getLanguage() {
    return this.#currentLng;
  }

  setLanguage(lng) {
    this.#currentLng = lng;
  }

  #getCurrentTranslation(key) {
    return get(key, this.#dictionary[this.#currentLng], '');
  }

  #getFallbackTranslation(key) {
    return get(key, this.#dictionary[this.#fallbackLng], '');
  }

  //'header.links.mainLink'
  t(key) {
    return this.#getCurrentTranslation(key) || this.#getFallbackTranslation(key);
  }

  exist(key) {
    return Boolean(this.#getCurrentTranslation(key));
  }
}

const instance = new i18n;

instance.init({
  defaultLng: 'ru',
  fallbackLng: 'ru',
  dictionary: {
    ru: {
      header: {
        links: {
          main: 'Главная',
          news: 'Новости',
          discounts: 'Скидки',
          cart: 'Корзина',
        },
        button: 'Перевести на Англ'
      },
      content: 'Здесь отображается какой-то контент на русском языке'
    },

    en: {
      header: {
        links: {
          main: 'Main',
          news: 'News',
          discounts: 'Discounts',
          cart: 'Shoppint Cart',
        },
        button: 'Translate to Ru'
      },
      content: 'Here render some content on English language'
    }
  }
});

export default instance;