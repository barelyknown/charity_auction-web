import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  unassignedDonations: [],

  setUnassignedDonations: Ember.on('init', Ember.observer('auctionItem.auction.auctionItems.@each.donation.id','auctionItem.auction.donations.@each.id', function() {
    this.get('auctionItem.auction.auctionItems').then((auctionItems) => {
      Ember.RSVP.all(auctionItems.mapBy('donation')).then((auctionItemDonations) => {
        const auctionItemDonationIds = auctionItemDonations.filter((donation) => {
          return donation;
        }).mapBy('id');
        this.get('auctionItem.auction.donations').then((donations) => {
          this.get('auctionItem.donation').then((selectedDonation) => {
            const unassignedDonations = donations.filter((donation) => {
              return !auctionItemDonationIds.contains(donation.get('id'));
            });
            if (selectedDonation) {
              unassignedDonations.pushObject(selectedDonation);
            }
            this.set('unassignedDonations', unassignedDonations);
          });
        });
      });
    });
  })),

  bidTypes: Ember.computed(function() {
    return this.get('store').query('bid-type', {});
  }),

  saveAction: 'saveAuctionItem',

  actions: {
    save() {
      this.sendAction('saveAction', this.get('auctionItem'));
    },
    setDonation(donationId) {
      this.get('auctionItem.auction.donations').then((donations) => {
        const matchingDonation = donations.find((donation) => {
          return donation.get('id') === donationId;
        });
        this.set('auctionItem.donation', matchingDonation);
      });
    },
    setBidGroup(bidGroupId) {
      this.get('auctionItem.auction.bidGroups').then((bidGroups) => {
        const matchingBidGroup = bidGroups.find((bidGroup) => {
          return bidGroup.get('id') === bidGroupId;
        });
        this.set('auctionItem.bidGroup', matchingBidGroup);
      });
    },
    setBidType(bidTypeId) {
      const matchingBidType = this.get('bidTypes').find((bidType) => {
        return bidType.get('id') === bidTypeId;
      });
      this.set('auctionItem.bidType', matchingBidType);
    }
  }
});
