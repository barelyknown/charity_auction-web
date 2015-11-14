import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    applyPaymentToBids() {
      var remainingUnappliedAmount = this.get('model.unappliedAmount');
      const bidPaymentSaves = [];
      this.get('model.bidder.winningBids').forEach((bid) => {
        if (remainingUnappliedAmount > 0) {
          const balance = bid.get('balance');
          const bidPayment = this.get('store').createRecord('bid-payment', {
            bid: bid,
            payment: this.get('model')
          });
          if (remainingUnappliedAmount >= balance) {
            bidPayment.set('amount', balance);
          } else {
            bidPayment.set('amount', remainingUnappliedAmount);
          }
          remainingUnappliedAmount -= bidPayment.get('amount');
          bidPaymentSaves.push(bidPayment.save());
        }
      });
      Ember.RSVP.all(bidPaymentSaves).then((bidPayments) => {
        this.get('model').reload();
        this.get('model.bidder.bids').reload();
      });
    },

    applyPaymentToRaffleBids() {
      var remainingUnappliedAmount = this.get('model.unappliedAmount');
      const bidPaymentSaves = [];
      this.get('raffleBids').forEach((bid) => {
        if (remainingUnappliedAmount > 0) {
          const balance = bid.get('balance');
          const bidPayment = this.get('store').createRecord('bid-payment', {
            bid: bid,
            payment: this.get('model')
          });
          if (remainingUnappliedAmount >= balance) {
            bidPayment.set('amount', balance);
          } else {
            bidPayment.set('amount', remainingUnappliedAmount);
          }
          remainingUnappliedAmount -= bidPayment.get('amount');
          bidPaymentSaves.push(bidPayment.save());
        }
      });
      return Ember.RSVP.all(bidPaymentSaves).then((bidPayments) => {
        this.get('model').reload();
        return Ember.RSVP.all(this.get('raffleBids').map((bid) => { bid.reload(); }))
      });
    }
  }
});
