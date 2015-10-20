import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),

  actions: {
    save() {
      let organization = this.get('model');
      let self = this;
      let onSuccess = function() {
        self.get('sessionUser.user.memberships').reload();
        self.transitionToRoute('index');
      };
      let onFailure = function() {
        console.log('there was a problem saving the organization');
      };
      organization.save().then(onSuccess, onFailure);
    }
  }
});
