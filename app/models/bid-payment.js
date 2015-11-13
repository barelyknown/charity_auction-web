import DS from 'ember-data';

export default DS.Model.extend({
  bid: DS.belongsTo('bid'),
  payment: DS.belongsTo('payment'),
  amount: DS.attr('number')
});
