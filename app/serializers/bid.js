import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attribute) {
    const excluded = ['balance'];

    if (!excluded.contains(key)) {
      this._super(...arguments);
    }
  }
});
