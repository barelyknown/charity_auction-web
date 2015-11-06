import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),

  name: DS.attr('string'),

  description: DS.attr('string'),

  sequencePosition: DS.attr('string'),

  sequence: DS.attr('number'),

  auctionItems: DS.hasMany('auction-item'),

  isAuctionValid: Ember.computed.notEmpty('auction.content'),

  isValid: Ember.computed.and('isAuctionValid')
});
