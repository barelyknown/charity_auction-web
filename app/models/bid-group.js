import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  bidType: DS.belongsTo('bid-type'),

  name: DS.attr('string'),

  description: DS.attr('string'),

  isAuctionValid: Ember.computed.notEmpty('auction.content'),

  isBidTypeValid: Ember.computed.notEmpty('bidType.content'),

  isValid: Ember.computed.and('isAuctionValid','isBidTypeValid')
});
