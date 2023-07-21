import i18n from '../i18n.mjs';

const Content = () => {
  return `
  <div class="content">
    <div class="container">${i18n.t('content')}</div>
  </div>`;
}

export default Content;