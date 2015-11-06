import Ember from 'ember';

export default Ember.Component.extend({
  saveAction: 'saveUser',
  actions: {
    save() {
      this.sendAction('saveAction', this.get('user'));
    }
  }
});
