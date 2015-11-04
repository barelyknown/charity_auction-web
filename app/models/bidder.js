import DS from 'ember-data';

export default DS.Model.extend({
  auction: DS.belongsTo('auction'),
  tickets: DS.hasMany('tickets')
});
