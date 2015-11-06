import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('membership', {
      organization: this.modelFor('organizations.organization')
    });
  }
});
