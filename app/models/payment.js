import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  bidder: DS.belongsTo('bidder'),
  amount: DS.attr('number'),
  paymentMethod: DS.attr('string'),
  appliedAmount: DS.attr('number'),
  unappliedAmount: DS.attr('number'),
  bidPayments: DS.hasMany('bid-payment')
});
