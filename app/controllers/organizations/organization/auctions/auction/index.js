import Ember from 'ember';

export default Ember.Controller.extend({

  bidGroups: Ember.computed.sort('model.bidGroups','sequence'),

  actions: {
    removeDonor(donor) {
      donor.destroyRecord();
    },
    moveBidGroup(bidGroup, newSequencePosition) {
      bidGroup.set('sequencePosition', newSequencePosition);
      bidGroup.save().then((bidGroup) => {
        bidGroup.get('auction.bidGroups').reload();
      });
    }
  }

});
