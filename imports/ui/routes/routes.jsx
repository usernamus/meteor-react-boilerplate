import React from 'react';
import Loadable from 'react-loadable';
import i18next from 'i18next';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Route from '/imports/ui/routes/route';

import Index from '/imports/ui/containers/pages';

import Loader from '/imports/ui/layout/loader';
import NoMatch from '/imports/ui/pages/no-match';

const Signup = Loadable({
  loader: () => import('/imports/ui/pages/signup'),
  loading: Loader,
});

export default class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
  }
  componentWillMount() {
    i18next.on('loaded', () => {
      this.setState({
        isReady: true,
      });
    });
    i18next.on('languageChanged', () => {
      this.setState({
        isReady: true,
      });
    });
  }
  render() {
    const { isReady } = this.state;

    if (!isReady) return <Loader />;

    return (
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/signup" component={Signup} onlyUnregistered />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
