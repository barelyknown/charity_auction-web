import DS from 'ember-data';

export default DS.Model.extend({
  emailAddress: DS.attr(),
  password: DS.attr(),
  name: DS.attr(),
  mobilePhoneNumber: DS.attr(),
  physicalAddress: DS.attr(),
  memberships: DS.hasMany()
});
