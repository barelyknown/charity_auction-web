import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service('store'),

  onSave: 'saveDonation',

  donationCategories: function() {
    return this.get('store').findAll('donation-category');
  }.property(),

  potentialDonors: [],

  setPotentialDonors: Ember.on('init', Ember.observer('donation.auction.donors.[]','donation.donationDonors.[]', function() {
    Ember.RSVP.hash({
      donationDonors: this.get('donation.donationDonors'),
      auctionDonors: this.get('donation.auction.donors')
    }).then((results) => {
      this.set('potentialDonors',
        results.auctionDonors.filter((donor) => {
          return !results.donationDonors.mapBy('donor.id').contains(donor.get('id'));
        })
      );
    });
  })),

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
    setBidType(bidTypeId) {
      this.get('donation').set('bidType',
        this.get('bidTypes').find(function(bidType) {
          return bidType.get('id') === bidTypeId;
        })
      );
    },
    setBidGroup(bidGroupId) {
      this.get('donation.auction.bidGroups').then((bidGroups) => {
        const matchingBidGroup = bidGroups.find((bidGroup) => { return bidGroup.get('id') === bidGroupId; });
        this.get('donation').set('bidGroup', matchingBidGroup);
      });
    },
    addDonor(element) {
      const donorId = $(element.target).val();
      if (donorId) {
        $(element.target).val('');
        this.get('store').findRecord('donor', donorId).then((donor) => {
          const newDonationDonor = this.get('store').createRecord('donation-donor', {
            donation: this.get('donation'),
            donor: donor
          });
          this.get('donation.donationDonors').pushObject(newDonationDonor);
        });
      }
    },
    removeDonationDonor(donationDonor) {
      if (donationDonor.get('isNew')) {
        this.get('donation.donationDonors').removeObject(donationDonor);
      } else {
        donationDonor.deleteRecord();
      }
    },
    undoRemoveDonationDonor(donationDonor) {
      donationDonor.rollbackAttributes();
    }
  }
});
