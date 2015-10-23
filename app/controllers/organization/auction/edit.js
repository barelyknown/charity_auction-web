import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateAuction(auction) {
      let self = this;
      auction.save().then(function() {
        self.transitionToRoute('organization');
      })
    }
  }
});
