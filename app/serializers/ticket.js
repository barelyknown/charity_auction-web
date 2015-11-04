import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeHasMany(snapshot, json, relationship) {
    const includedTypes = ['bidder'];

    if (!includedTypes.contains(relationship.type)) {
      this._super(...arguments);
    }
  }
});
