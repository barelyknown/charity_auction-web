import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    saveUser() {
      let self = this;
      let onSuccess = function(user) {
        if (self.get('session.isAuthenticated')) {
          self.transitionToRoute('application');
        } else {
          self.send('login', user.get('emailAddress'), user.get('password'));
        }
      };
      let onFailure = function(error) {
        console.log('there are an error', error);
      };
      this.get('model').save().then(onSuccess, onFailure);
    }
  }
});
