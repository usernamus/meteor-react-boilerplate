import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Layout from '/imports/ui/layout/index';

const Dashboard = ({ t }) => (
  <Layout name="dashboard">
    <h1>{t('title.home')}</h1>
  </Layout>
);

Dashboard.propTypes = {
  t: PropTypes.func,
};
Dashboard.defaultProps = {
  t: null,
};

export default translate()(Dashboard);
