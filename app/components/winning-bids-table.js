import Ember from 'ember';

export default Ember.Component.extend({
  totalAmount: Ember.computed('winningBids.@each.amount', function() {
    return this.get('winningBids').mapBy('amount').reduce((total, amount) => {
      return total + amount;
    }, 0);
  }),
  totalBalance: Ember.computed('winningBids.@each.balance', function() {
    return this.get('winningBids').mapBy('balance').reduce((total, balance) => {
      return total + balance;
    }, 0);
  }),
});
