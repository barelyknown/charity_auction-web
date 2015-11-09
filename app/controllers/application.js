import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  sessionUser: Ember.inject.service('session-user'),

  isHeaderVisible: true,

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
