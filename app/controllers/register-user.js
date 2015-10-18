import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveUser() {
      let self = this;
      let onSuccess = function(user) {
        self.transitionToRoute('login');
      };
      let onFailure = function(error) {
        console.log('there are an error', error);
      };
      this.get('model').save().then(onSuccess, onFailure);
    }
  }
});
