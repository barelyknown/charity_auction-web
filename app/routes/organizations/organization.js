import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removeMembership(membership) {
      membership.destroyRecord();
    }
  }
});
