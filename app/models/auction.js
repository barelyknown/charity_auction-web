import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),

  physicalAddress: DS.attr(),

  timeZoneId: DS.attr(),

  donationWindowEndsAt: DS.attr('date'),

  startsAt: DS.attr('date'),

  endsAt: DS.attr('date'),

  organization: DS.belongsTo('organization'),

  donations: DS.hasMany('donation'),

  donors: DS.hasMany('donor'),

  tickets: DS.hasMany('ticket'),

  bidders: DS.hasMany('bidder'),

  bidGroups: DS.hasMany('bid-group')
});
