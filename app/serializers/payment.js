import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attribute) {
    const excluded = ['appliedAmount', 'unappliedAmount'];

    if (!excluded.contains(key)) {
      this._super(...arguments);
    }
  }
});
