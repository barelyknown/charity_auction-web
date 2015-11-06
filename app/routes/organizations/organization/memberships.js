import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveMembership(membership) {
      membership.save().then((membership) => {
        membership.get('organization').then((organization) => {
          this.transitionTo('organizations.organization', organization);
        })
      })
    }
  }
});
