import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import Layout from '/imports/ui/layout/index';

import { signin } from '/imports/api/users/actions';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    };
    this.onSignin = this.onSignin.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSignin(e) {
    e.preventDefault();

    const email = this.state.email.value;
    const password = this.state.password.value;

    signin(email, password);
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
    const { email, password } = this.state;
    const { t } = this.props;

    return (
      <Layout name="signin">
        <h1>{t('title.signin')}</h1>
        <form onSubmit={this.onSignin}>
          <input
            type="text"
            value={email.value}
            name="email"
            placeholder={t('placeholder.username_or_email')}
            onChange={this.onChange}
          />
          <input
            type="password"
            value={password.value}
            name="password"
            placeholder={t('placeholder.password')}
            onChange={this.onChange}
          />
          <input type="submit" value={t('button.signin')} />
        </form>
        <p>{t('tips.not_have_an_account')} <Link to="/signup">{t('tips.sign_up_now')}</Link></p>
      </Layout>
    );
  }
}

Signin.propTypes = {
  t: PropTypes.func,
};
Signin.defaultProps = {
  t: null,
};

export default translate()(Signin);
