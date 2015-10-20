import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.sendAction('edit');
    },
    save() {
      this.sendAction('save', this.get('organization'));
    }
  }
});
