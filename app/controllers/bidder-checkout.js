import Ember from 'ember';

export default Ember.Controller.extend({
  totalBidAmount: Ember.computed('model.bids.@each.amount', function() {
    return this.get('model.bids').filterBy('winner', true).mapBy('amount').reduce((total, amount) => {
      return total + amount;
    }, 0);
  }),

  totalBidBalance: Ember.computed('model.bids.@each.balance', function() {
    return this.get('model.bids').filterBy('winner', true).mapBy('balance').reduce((total, amount) => {
      return total + amount;
    }, 0);
  })
});
