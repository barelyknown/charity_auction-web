import Ember from 'ember';

export function formatNewlinesIntoParagraphs(params/*, hash*/) {
  const value = Ember.Handlebars.Utils.escapeExpression(params[0]);
  const paragraphs = value.split(/\n+/);
  let convertedValue = '';
  paragraphs.forEach((paragraph) => {
    convertedValue += '<p>' + paragraph + '</p>';
  });
  return Ember.String.htmlSafe(convertedValue);
}

export default Ember.Helper.helper(formatNewlinesIntoParagraphs);
