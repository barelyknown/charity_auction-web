import Ember from 'ember';

export function formatNewlines(params/*, hash*/) {
  const value = Ember.Handlebars.Utils.escapeExpression(params[0]);
  const convertedValue = value.replace(/\n/g,"<br />");
  return Ember.String.htmlSafe(convertedValue);
}

export default Ember.Helper.helper(formatNewlines);
