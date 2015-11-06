import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service('store'),

  users: Ember.on('init', Ember.computed(function() {
    return this.get('store').query('user', {});
  })),

  sortedUsers: Ember.computed('users.@each.name', function() {
    return this.get('users').sortBy('name');
  }),

  saveAction: 'saveMembership',

  actions: {
    save() {
      this.sendAction('saveAction', this.get('membership'));
    },

    setUser(userId) {
      this.get('users').then((users) => {
        const matchingUser = users.find((user) => {
          return user.get('id') === userId;
        });
        this.set('membership.user', matchingUser);
      });
    }
  }
});
