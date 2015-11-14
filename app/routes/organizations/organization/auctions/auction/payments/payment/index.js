import Ember from 'ember';

export default Ember.Route.extend({
  raffleBids: [],

  afterModel() {
    this.set('raffleBids', []);
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('auctionItems').then((auctionItems) => {
      return Ember.RSVP.all(auctionItems.mapBy('bids')).then((bidsList) => {

        const allBids = [];
        bidsList.forEach((bids) => {
          bids.forEach((bid) => {
            allBids.pushObject(bid);
          });
        });

        return Ember.RSVP.all(allBids.mapBy('auctionItem.bidType')).then((bidTypes) => {
          allBids.forEach((bid) => {
            const bidTypeName = bid.get('auctionItem.bidType.name')
            if (bid && ['teacup','heads-or-tails'].contains(bidTypeName)) {
              this.get('raffleBids').pushObject(bid);
            }
          });
        });
      });
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('raffleBids', this.get('raffleBids'));
  }
});
