import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  auction: DS.belongsTo('auction'),
  tickets: DS.hasMany('ticket'),
  bids: DS.hasMany('bid'),
  winningBids: Ember.computed.filterBy('bids.@each.winner', 'winner', true),
  payments: DS.hasMany('payment'),

  winningBidBalances: Ember.computed.mapBy('winningBids', 'balance'),
  totalBalance: Ember.computed.sum('winningBidBalances'),
  winningBidAmounts: Ember.computed.mapBy('winningBids', 'amount'),
  totalWinningAmount: Ember.computed.sum('winningBidAmounts')
});
