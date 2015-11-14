import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('bidder', {});
  },

  setupController(controller, model) {
    this._super(...arguments);
    const applicationController = this.controllerFor('application');
    applicationController.set('isHeaderVisible', false);
  },

  deactivate() {
    const applicationController = this.controllerFor('application');
    applicationController.set('isHeaderVisible', true);
  }
});
