import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAuction() {
      const auction = this.get('model');
      let self = this;
      auction.save().then(function() {
        self.transitionToRoute('organization');
      })
    }
  }
});
