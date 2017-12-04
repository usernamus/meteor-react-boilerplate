import { Meteor } from 'meteor/meteor';

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = ({
  path,
  component: Component,
  onlyRegistered,
  onlyUnregistered,
  onlyAdmin,
}) => (
  <Route
    path={path}
    render={(props) => {
      if ((onlyRegistered || onlyAdmin) && !Meteor.userId()) {
        return <Redirect to={{ pathname: '/' }} />;
      }
      if (onlyUnregistered && Meteor.userId()) {
        return <Redirect to={{ pathname: '/' }} />;
      }
      if (Component) {
        return <Component {...props} />;
      }

      return null;
    }}
  />
);

RouteWrapper.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  onlyRegistered: PropTypes.bool,
  onlyUnregistered: PropTypes.bool,
  onlyAdmin: PropTypes.bool,
};
RouteWrapper.defaultProps = {
  path: '',
  component: null,
  onlyRegistered: false,
  onlyUnregistered: false,
  onlyAdmin: false,
};

export default RouteWrapper;
