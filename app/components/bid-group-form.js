import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  bidTypes: Ember.computed(function() {
    return this.get('store').query('bid-type', {});
  }),

  saveAction: 'saveBidGroup',

  actions: {
    setBidType(bidTypeId) {
      this.get('bidTypes').then((bidTypes) => {
        const matchingBidType = bidTypes.find((bidType) => { return bidType.get('id') === bidTypeId; });
        console.log(matchingBidType);
        this.set('bidGroup.bidType', matchingBidType);
      });
    },

    save(){
      this.sendAction('saveAction', this.get('bidGroup'));
    }
  }
});
