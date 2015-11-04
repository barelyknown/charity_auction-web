import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  allUsers: Ember.computed(function() {
    return this.get('store').query('user', {});
  }),

  saveAction: 'saveTicket',

  actions: {
    setUser(userId) {
      this.set('ticket.user', this.get('allUsers').find((user) => { return user.get('id') === userId; }));
    },
    save() {
      this.sendAction('saveAction', this.get('ticket'));
    }
  }
});
