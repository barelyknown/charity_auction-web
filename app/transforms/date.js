import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    var type = typeof serialized;

    if (type === "string") {
      return new Date(Ember.Date.parse(serialized));
    } else if (type === "number") {
      return new Date(serialized);
    } else if (serialized === null || serialized === undefined) {
      // if the value is null return null
      // if the value is not present in the data return undefined
      return serialized;
    } else {
      return null;
    }
  },

  serialize: function (date) {
    if (date instanceof Date) {
      if (isNaN(date.getTime())) {
        return null;
      } else {
        return date.toISOString();
      }
    } else {
      return null;
    }
  }
});
