import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  donationCategory: DS.belongsTo('donation-category'),
  title: DS.attr(),
  displayDescription: DS.attr(),
  quantity: DS.attr('number'),
  estimatedValueAmount: DS.attr('number'),
  minimumBidAmount: DS.attr('number'),
  fulfillmentType: DS.attr(),
  bidType: DS.belongsTo('bid-type'),
  redemptionWindowStartsAt: DS.attr('date'),
  redemptionWindowEndsAt: DS.attr('date'),
  donationDonors: DS.hasMany('donation-donor'),
  notes: DS.attr('string')
});
