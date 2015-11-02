import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    removeDonor(donor) {
      donor.destroyRecord();
    }
  }

});
