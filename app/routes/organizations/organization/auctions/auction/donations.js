import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveDonation(donation) {
      donation.save().then((donation) => {
        donation.get('auctionItem').then((auctionItem) => {
          if (auctionItem.get('isValid')) {
            auctionItem.save();
          } else {
            console.log(auctionItem.get('bidType.name'));
            auctionItem.rollbackAttributes();
            console.log(auctionItem.get('bidType.name'));
          }
        });
        donation.get('donationDonors').forEach((donationDonor) => {
          donationDonor.save();
        });
        this.transitionTo('organizations.organization.auctions.auction.donations.donation', donation);
      });
    }
  }
});
