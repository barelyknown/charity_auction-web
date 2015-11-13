import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('bidder', params.bidder_id);
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
