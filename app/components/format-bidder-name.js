import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  bidder: null,

  formattedUserNames: null,

  setFormattedUserName: Ember.on('init', function() {
    this.get('bidder.tickets').then((tickets) => {
      Ember.RSVP.all(tickets.mapBy('user')).then((users) => {
        this.set('formattedUserNames', users.mapBy('name').join(' and '));
      })
    })
  })
});
