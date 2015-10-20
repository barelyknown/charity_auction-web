import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  user: Ember.computed('session.data.authenticated.access_token', function() {
    return this.get('store').findRecord('user', 'me');
  })
});
