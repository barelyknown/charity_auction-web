import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var bidder;
    if (params.bidderId) {
      bidder = this.get('store').findRecord('bidder', params.bidderId);
    } else {
      bidder = new Promise((resolve, reject) => {
        resolve(null);
      })
    }
    return bidder.then((bidder) => {
      const auction = this.modelFor('organizations.organization.auctions.auction');
      return this.get('store').createRecord('payment', {
        auction: auction,
        bidder: bidder,
        amount: params.amount
      });
    })

  }
});
