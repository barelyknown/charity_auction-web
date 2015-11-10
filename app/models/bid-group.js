import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),

  name: DS.attr('string'),

  description: DS.attr('string'),

  sequencePosition: DS.attr('string'),

  sequence: DS.attr('number'),

  groupByDonationCategory: DS.attr('boolean'),

  auctionItems: DS.hasMany('auction-item'),

  isAuctionValid: Ember.computed.notEmpty('auction.content'),

  isValid: Ember.computed.and('isAuctionValid'),

  uniqueDonationCategories: [],

  setUniqueDonationCategories: Ember.on('init', Ember.observer('auctionItems.@each.donation.donationCategory', function() {
    this.set('uniqueDonationCategories', []);
    this.get('auctionItems').then((auctionItems) => {
      Ember.RSVP.all(auctionItems.mapBy('donation')).then((donations) => {
        Ember.RSVP.all(donations.mapBy('donationCategory')).then((donationCategories) => {
          donationCategories.forEach((donationCategory) => {
            if (!this.get('uniqueDonationCategories').contains(donationCategory)) {
              this.get('uniqueDonationCategories').pushObject(donationCategory);
            }
          });
        });
      });
    });
  }))
});
