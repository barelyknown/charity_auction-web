import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const includes = [
      'organization',
      'bid-groups',
      'bid-groups.auction-items',
      'bid-groups.auction-items.bid-type',
      'bid-groups.auction-items.donation',
      'bid-groups.auction-items.donation.donation-donors',
      'bid-groups.auction-items.donation.donation-donors.donor',
      'bid-groups.auction-items.donation.donation-donors.donor.user',
    ];
    return this.get('store').findRecord('auction', params.auction_id, {
      reload: true,
      adapterOptions: {
        query: {
          include: includes.join()
        }
      }
    });
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
