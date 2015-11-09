import Ember from 'ember';

export default Ember.Component.extend({
  auctionItems: [],

  donationCategory: null,

  matchingAuctionItems: [],

  setMatchingAuctionItems: Ember.on('init', Ember.observer('auctionItems.@each.donation.donationCategory.content', 'donationCategory.content', function() {
    if (this.get('donationCategory')) {
      this.set('matchingAuctionItems', []);
      this.get('auctionItems').then((auctionItems) => {
        auctionItems.forEach((auctionItem) => {
          auctionItem.get('donation').then((donation) => {
            donation.get('donationCategory').then((donationCategory) => {
              if (donationCategory.get('id') === this.get('donationCategory.id')) {
                this.get('matchingAuctionItems').pushObject(auctionItem);
              }
            });
          });
        });
      });
    } else {
      this.set('matchingAuctionItems', this.get('auctionItems'));
    }
  }))
});
