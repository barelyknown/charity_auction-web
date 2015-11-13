import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service('store'),

  paymentMethods: ['cash','check','credit_card'],

  saveAction: 'savePayment',

  actions: {
    setBidder(bidderId) {
      this.get('store').findRecord('bidder', bidderId).then((bidder) => {
        this.set('payment.bidder', bidder);
      })
    },

    save() {
      this.sendAction('saveAction', this.get('payment'))
    }
  }
});
