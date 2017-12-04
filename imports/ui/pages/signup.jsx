import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import Layout from '/imports/ui/layout/index';

import { signup } from '/imports/api/users/actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    };
    this.onSignup = this.onSignup.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSignup(e) {
    e.preventDefault();

    const username = this.state.username.value;
    const email = this.state.email.value;
    const password = this.state.password.value;

    signup(username, email, password);
  }
  onChange({ target }) {
    this.setState({
      [target.name]: {
        value: target.value,
        error: '',
      },
    });
  }
  render() {
    const { username, email, password } = this.state;
    const { t } = this.props;

    return (
      <Layout name="signup">
        <h1>{t('title.signup')}</h1>
        <form onSubmit={this.onSignup}>
          <input
            type="text"
            value={username.value}
            name="username"
            placeholder={t('placeholder.username')}
            onChange={this.onChange}
          />
          <input
            type="text"
            value={email.value}
            name="email"
            placeholder={t('placeholder.email')}
            onChange={this.onChange}
          />
          <input
            type="password"
            value={password.value}
            name="password"
            placeholder={t('placeholder.password')}
            onChange={this.onChange}
          />
          <input type="submit" value={t('button.signup')} />
        </form>
        <p>{t('tips.have_an_account')} <Link to="/">{t('tips.sign_in_now')}</Link></p>
      </Layout>
    );
  }
}

Signup.propTypes = {
  t: PropTypes.func,
};
Signup.defaultProps = {
  t: null,
};

export default translate()(Signup);
