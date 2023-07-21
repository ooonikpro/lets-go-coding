import i18n from '../i18n.mjs';

const Header = () => {
  const menu = [
    {
      href: '#',
      text: i18n.t('header.links.main'),
    },
    {
      href: '#',
      text: i18n.t('header.links.news'),
    },
    {
      href: '#',
      text: i18n.t('header.links.discounts'),
    },
    {
      href: '#',
      text: i18n.t('header.links.cart'),
    }
  ];

  const buttonText = i18n.t('header.button');

  return `
    <header>
      <div class="container">
        <nav>
          ${
            menu.map((item) => `<a href="${item.href}">${item.text}</a>`).join('')
          }
        </nav>
        <button>${buttonText}</button>
      </div>
    </header>
  `;
}

export default Header;