import Ember from 'ember';

export default Ember.Controller.extend({

  auction: Ember.inject.controller('organizations.organization.auctions.auction'),

  amounts: Ember.computed.mapBy('model', 'winningBidAmount'),

  totalAmount: Ember.computed.sum('amounts'),

  balances: Ember.computed.mapBy('model', 'winningBidBalance'),

  totalBalance: Ember.computed.sum('balanced'),

  sortedAuctionItems: Ember.computed.sort('model', function(a, b) {
    const intA = parseInt(a.get('number'));
    const intB = parseInt(b.get('number'));
    const letterA = a.get('number').replace(/\d/g,'');
    const letterB = b.get('number').replace(/\d/g,'');
    if (intA < intB) {
      return -1;
    } else if (intA === intB) {
      if (letterA < letterB) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  })
});
