import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  isNameValid: Ember.computed.and('model.name'),

  isEmailAddressValid: Ember.computed('model.emailAddress', 'session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return true;
    } else {
      return Ember.isPresent(this.get('model.emailAddress'));
    }
  }),

  isPasswordValid: Ember.computed('model.password', 'session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return true;
    } else {
      return Ember.isPresent(this.get('model.password'));
    }
  }),

  isValid: Ember.computed.and('isNameValid', 'isEmailAddressValid', 'isPasswordValid'),

  actions: {
  }
});
