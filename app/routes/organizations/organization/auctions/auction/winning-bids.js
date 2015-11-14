import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    const winningBids = [];
    return auction.get('auctionItems').then((auctionItems) => {
      return Ember.RSVP.all(auctionItems.mapBy('bids')).then((bidLists) => {
        bidLists.forEach((bids) => {
          winningBids.pushObjects(bids.filterBy('winner', true));
        });
        return winningBids;
      })
    })
  }
});
