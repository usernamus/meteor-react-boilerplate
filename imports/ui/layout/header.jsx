import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

const Header = ({ t, i18n }) => (
  <header className="header">
    <Link to="/">{t('header.home')}</Link>
    <input
      type="button"
      value={t('header.russian')}
      onClick={(() => { i18n.changeLanguage('ru'); })}
    />
    <input
      type="button"
      value={t('header.english')}
      onClick={(() => { i18n.changeLanguage('en'); })}
    />
  </header>
);

Header.propTypes = {
  t: PropTypes.func,
  i18n: PropTypes.object,
};
Header.defaultProps = {
  t: null,
  i18n: {},
};

export default translate()(Header);
