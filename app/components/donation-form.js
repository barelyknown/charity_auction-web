import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service('store'),

  onSave: 'saveDonation',

  donationCategories: function() {
    return this.get('store').findAll('donation-category');
  }.property(),

  donors: function() {
    return this.get('store').findAll('user');
  }.property(),

  bidTypes: function() {
    return this.get('store').findAll('bid-type');
  }.property(),

  fulfillmentTypes: ['item', 'certificate'],

  localRedemptionWindowStartsAt: Ember.computed('donation.auction.timeZoneId', {
    get(key) {
      if (this.get('donation.redemptionWindowStartsAt')) {
        return moment(this.get('donation.redemptionWindowStartsAt')).tz(this.get('donation.auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('donation.auction.timeZoneId')).clone();
      this.set('donation.redemptionWindowStartsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  localRedemptionWindowEndsAt: Ember.computed('donation.auction.timeZoneId', {
    get(key) {
      if (this.get('donation.redemptionWindowEndsAt')) {
        return moment(this.get('donation.redemptionWindowEndsAt')).tz(this.get('donation.auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('donation.auction.timeZoneId')).clone();
      this.set('donation.redemptionWindowEndsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  actions: {
    save() {
      this.sendAction('onSave', this.get('donation'));
    },

    setDonationCategory(donationCategoryId) {
      this.get('donation').set('donationCategory',
        this.get('donationCategories').find(function(donationCategory) {
          return donationCategory.get('id') === donationCategoryId;
        })
      );
    },
    setDonor(donorId) {
      this.get('donation').set('donor',
        this.get('donors').find(function(donor) {
          return donor.get('id') === donorId;
        })
      );
    },
    setBidType(bidTypeId) {
      this.get('donation').set('bidType',
        this.get('bidTypes').find(function(bidType) {
          return bidType.get('id') === bidTypeId;
        })
      );
    },
  }
});
