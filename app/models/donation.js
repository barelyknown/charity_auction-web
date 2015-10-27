import DS from 'ember-data';

export default DS.Model.extend({
  donor: DS.belongsTo('user'),
  auction: DS.belongsTo('auction'),
  donationCategory: DS.belongsTo('donation-category'),
  title: DS.attr(),
  displayDescription: DS.attr(),
  quantity: DS.attr('number'),
  estimatedValueAmount: DS.attr('number'),
  minimumBidAmount: DS.attr('number'),
  adminFollowUpNeeded: DS.attr('boolean'),
  fulfillmentType: DS.attr(),
  bidType: DS.belongsTo('bid-type'),
  redemptionWindowStartsAt: DS.attr('date')
});
