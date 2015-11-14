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
      if (this.get('userName')) {
        const newUser = this.get('store').createRecord('user', {
          name: this.get('userName')
        });
        newUser.save().then((user) => {
          this.set('ticket.user', user);
          this.sendAction('saveAction', this.get('ticket'));
        });
      } else {
        this.sendAction('saveAction', this.get('ticket'));
      }
    }
  }
});
