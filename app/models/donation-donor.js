import DS from 'ember-data';

export default DS.Model.extend({
  donation: DS.belongsTo('donation'),
  donor: DS.belongsTo('donor')
});
