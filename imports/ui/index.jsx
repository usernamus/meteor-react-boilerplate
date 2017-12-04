import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '/imports/i18n';

import Routes from '/imports/ui/routes/routes';

Meteor.startup(() => {
  render(<I18nextProvider i18n={i18n}><Routes /></I18nextProvider>, document.getElementById('app'));
});
