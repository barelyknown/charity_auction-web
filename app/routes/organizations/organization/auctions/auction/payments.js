import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePayment(payment) {
      payment.save().then((payment) => {
        this.transitionTo('organizations.organization.auctions.auction.payments.payment', payment);
      });
    }
  }
});
