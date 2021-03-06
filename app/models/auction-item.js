import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  donation: DS.belongsTo('donation'),
  bidType: DS.belongsTo('bid-type'),
  bidGroup: DS.belongsTo('bid-group'),
  minimumBidAmount: DS.attr('number'),
  number: DS.attr('string'),
  bids: DS.hasMany('bid'),

  isAuctionValid: Ember.computed.notEmpty('auction.content'),
  isDonationValid: Ember.computed.notEmpty('donation.content'),
  isBidTypeValid: Ember.computed.notEmpty('bidType.content'),
  isMinimumBidAmountValid: Ember.computed('minimumBidAmount','bidType.content', function() {
    if (this.get('bidType.content.name') === 'fixed-price') {
      return Ember.isPresent(this.get('minimumBidAmount'));
    } else {
      return true;
    }
  }),
  isValid: Ember.computed.and('isAuctionValid','isDonationValid','isBidTypeValid','isMinimumBidAmountValid'),

  winningBids: Ember.computed.filterBy('bids', 'winner', true),
  winningBidBalances: Ember.computed.mapBy('winningBids', 'balance'),
  winningBidBalance: Ember.computed.sum('winningBidBalances'),
  winningBidAmounts: Ember.computed.mapBy('winningBids', 'amount'),
  winningBidAmount: Ember.computed.sum('winningBidAmounts')
});
