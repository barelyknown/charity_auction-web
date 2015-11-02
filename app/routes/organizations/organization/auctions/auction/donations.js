import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveDonation(donation) {
      donation.save().then((donation) => {
        Ember.RSVP.all([
          donation.get('donationDonors').forEach((donationDonor) => {
            donationDonor.save();
          })
        ]).then(() => {
          this.transitionTo('organizations.organization.auctions.auction');
        })
      });
    }
  }
});
