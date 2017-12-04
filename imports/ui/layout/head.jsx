import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.theme) {
    const { title } = Meteor.settings.public.theme;

    return (
      <Helmet>
        <title>{title || 'Token sale'}</title>
      </Helmet>
    );
  }
  return null;
};

export default Head;
