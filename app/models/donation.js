import DS from 'ember-data';

export default DS.Model.extend({
  donor: DS.belongsTo('user'),
  auction: DS.belongsTo('auction'),
  donationCategory: DS.belongsTo('donation-category'),
  title: DS.attr()
});
