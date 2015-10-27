import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveDonation(donation) {
      donation.save().then((donation) => {
        this.transitionTo('organizations.organization.auctions.auction');
      });
    }
  }
});
