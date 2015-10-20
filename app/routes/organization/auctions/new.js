import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let organization = this.modelFor('organization');
    return this.get('store').createRecord('auction', { organization: organization });
  }
});
