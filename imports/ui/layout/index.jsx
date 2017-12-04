import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '/imports/ui/layout/header';

const Layout = ({ children, name }) => {
  const className = name ? `main main-${name.replace(' ', '-').toLowerCase()}` : 'main';

  return (
    <Fragment>
      <Header />
      <main role="main" className={className}>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  name: PropTypes.string,
};
Layout.defaultProps = {
  children: null,
  name: null,
};

export default Layout;
