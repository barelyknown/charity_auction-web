import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  bid: null,

  saveAction: 'saveBid',

  sortedBidders: Ember.computed.sort('bid.auctionItem.auction.bidders', function(a,b) {
    const intA = parseInt(a.get('number'));
    const intB = parseInt(b.get('number'));
    if (intA < intB) {
      return -1;
    } else {
      return 1;
    }
  }),

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
