import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

export const signin = (email, password) => {
  check(email, String);
  check(password, String);

  Meteor.loginWithPassword(email, password);
};

export const signup = (username, email, password) => {
  check(username, String);
  check(email, String);
  check(password, String);

  Accounts.createUser({ username, email, password });
};

export const logout = () => {
  Meteor.logout();
};
