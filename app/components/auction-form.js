import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      this.get('onSave')(this.get('auction'));
    }
  }

});
