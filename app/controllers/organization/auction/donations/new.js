import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

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

  localRedemptionWindowStartsAt: Ember.computed('model.auction.timeZoneId', {
    get(key) {
      if (this.get('model.redemptionWindowStartsAt')) {
        return moment(this.get('model.redemptionWindowStartsAt')).tz(this.get('model.auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('model.auction.timeZoneId')).clone();
      this.set('model.redemptionWindowStartsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  localRedemptionWindowEndsAt: Ember.computed('model.auction.timeZoneId', {
    get(key) {
      if (this.get('model.redemptionWindowEndsAt')) {
        return moment(this.get('model.redemptionWindowEndsAt')).tz(this.get('model.auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('model.auction.timeZoneId')).clone();
      this.set('model.redemptionWindowEndsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  actions: {
    saveDonation() {
      const donation = this.get('model');
      let self = this;
      donation.save().then(function(donation) {
        self.transitionToRoute('organization.auction');
      });
    },
    setDonationCategory(donationCategoryId) {
      this.get('model').set('donationCategory',
        this.get('donationCategories').find(function(donationCategory) {
          return donationCategory.get('id') === donationCategoryId;
        })
      );
    },
    setDonor(donorId) {
      this.get('model').set('donor',
        this.get('donors').find(function(donor) {
          return donor.get('id') === donorId;
        })
      );
    },
    setBidType(bidTypeId) {
      this.get('model').set('bidType',
        this.get('bidTypes').find(function(bidType) {
          return bidType.get('id') === bidTypeId;
        })
      );
    },
  }
});
