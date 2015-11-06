import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  donation: DS.belongsTo('donation'),
  bidType: DS.belongsTo('bid-type'),
  bidGroup: DS.belongsTo('bid-group'),
  minimumBidAmount: DS.attr('number'),

  isAuctionValid: Ember.computed.notEmpty('auction.content'),
  isDonationValid: Ember.computed.notEmpty('donation.content'),
  isBidTypeValid: Ember.computed.notEmpty('bidType.content'),
  isValid: Ember.computed.and('isAuctionValid','isDonationValid','isBidTypeValid')
});
