import React from 'react';
import PropTypes from 'prop-types';

import Signin from '/imports/ui/pages/signin';
import Home from '/imports/ui/pages/home';

const Index = ({ userId }) => (userId ? <Home /> : <Signin />);

Index.propTypes = {
  userId: PropTypes.string,
};
Index.defaultProps = {
  userId: null,
};

export default Index;
