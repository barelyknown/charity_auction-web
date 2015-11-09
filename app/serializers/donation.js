import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeBelongsTo(snapshot, json, relationship) {
    const excludedTypes = ['auction-item'];

    if (!excludedTypes.contains(relationship.type)) {
      this._super(...arguments);
    }
  }
});
