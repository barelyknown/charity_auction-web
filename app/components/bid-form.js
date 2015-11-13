import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  bid: null,

  saveAction: 'saveBid',

  actions: {
    setBidder(bidderId) {
      this.get('store').findRecord('bidder', bidderId).then((bidder) => {
        this.set('bid.bidder', bidder);
      });
    },
    save() {
      this.sendAction('saveAction', this.get('bid'));
    }
  }
});
