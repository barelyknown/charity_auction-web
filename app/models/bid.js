import DS from 'ember-data';

export default DS.Model.extend({
  auctionItem: DS.belongsTo('auction-item'),
  bidder: DS.belongsTo('bidder'),
  amount: DS.attr('number'),
  balance: DS.attr('number'),
  winner: DS.attr('boolean'),
  bidPayments: DS.hasMany('bid-payment')
});
