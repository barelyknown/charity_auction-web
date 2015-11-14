import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('payments');
  },
  actions: {
    savePayment(payment) {
      payment.save().then((payment) => {
        this.transitionTo('organizations.organization.auctions.auction.payments.payment', payment);
      });
    }
  }
});
