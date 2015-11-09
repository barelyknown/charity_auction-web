import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {
    login(identification, password) {
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        // this.set('errorMessage', reason.error);
      });
    },

    saveUser(user) {
      let onSuccess = (user) => {
        if (this.get('session.isAuthenticated')) {
          this.transitionTo('application');
        } else {
          this.send('login', user.get('emailAddress'), user.get('password'));
        }
      };
      let onFailure = function(error) {
        console.log('there are an error', error);
      };
      user.save().then(onSuccess, onFailure);
    }
  }
});
