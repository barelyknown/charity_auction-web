import Ember from 'ember';

export default Ember.Component.extend({
  donation: null,

  lastIndex: Ember.computed('donation.donationDonors.[]', function() {
    return this.get('donation.donationDonors.length') - 1;
  })
});
