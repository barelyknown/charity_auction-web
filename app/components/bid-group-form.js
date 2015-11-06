import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  saveAction: 'saveBidGroup',

  actions: {
    save(){
      this.sendAction('saveAction', this.get('bidGroup'));
    }
  }
});
