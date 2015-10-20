import Ember from 'ember';

export default Ember.Controller.extend({

  donationCategories: function() {
    return this.get('store').findAll('donation-category');
  }.property(),

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
    }
  }
});
