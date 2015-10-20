import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  model() {
    let self = this;
    return this.get('sessionUser.user').then(function(user) {
      return self.get('store').createRecord('donation', {
        auction: self.modelFor('organization.auction'),
        donor: user
      });
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
});
