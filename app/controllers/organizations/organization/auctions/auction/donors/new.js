import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createDonor(donor) {
      donor.save().then((donor) => {
        this.transitionToRoute('organizations.organization.auctions.auction');
      });
    }
  }

});
