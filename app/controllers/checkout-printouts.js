import Ember from 'ember';

export default Ember.Controller.extend({
  sortedBidders: Ember.computed.sort('model', function(a, b) {
    const intA = parseInt(a.get('number'));
    const intB = parseInt(b.get('number'));
    if (intA < intB) {
      return -1;
    } else {
      return 1;
    }
  })
});
