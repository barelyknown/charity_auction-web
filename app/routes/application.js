import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    login(identification, password) {
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        // this.set('errorMessage', reason.error);
      });
    }
  }
});
