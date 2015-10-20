import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  memberships: DS.hasMany('membership'),
  auctions: DS.hasMany('auction')
});
