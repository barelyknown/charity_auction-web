import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['editOrganizationName'],

  editOrganizationName: 'false',

  isEditable: Ember.computed('editOrganizationName', function() {
    if (this.get('editOrganizationName')) {
      if (this.get('editOrganizationName') === 'true') {
        return true;
      } else if (this.get('editOrganizationName') === 'false') {
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }),

  actions: {
    toggleIsEditable() {
      this.set('editOrganizationName', (!this.get('isEditable'))).toString();
    },
    saveOrganization(organization) {
      let self = this;
      organization.save().then(function() {
        self.send('toggleIsEditable');
      })
    }
  }
});
