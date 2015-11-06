import Ember from 'ember';

export default Ember.Component.extend({
  bidder: null,

  formattedUserNames: Ember.computed('bidder.tickets.@each.user.name', function() {
    const names = this.get('bidder.tickets').mapBy('user.name');

    return names.join(" and ");
  })
});
