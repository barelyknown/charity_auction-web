import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createAuction(auction) {
      let self = this;
      auction.save().then(function() {
        self.transitionToRoute('organization');
      })
    }
  }
});