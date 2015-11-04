import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  user: DS.belongsTo('user'),
  number: DS.attr('string'),
  price: DS.attr('number'),

  isAuctionValid: Ember.computed.notEmpty('auction'),

  isUserValid: Ember.computed.notEmpty('user'),

  isPriceValid: Ember.computed.notEmpty('price'),

  isValid: Ember.computed.and('isAuctionValid','isUserValid','isPriceValid')
});
