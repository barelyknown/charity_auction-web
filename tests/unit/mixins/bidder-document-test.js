import Ember from 'ember';
import BidderDocumentMixin from '../../../mixins/bidder-document';
import { module, test } from 'qunit';

module('Unit | Mixin | bidder document');

// Replace this with your real tests.
test('it works', function(assert) {
  var BidderDocumentObject = Ember.Object.extend(BidderDocumentMixin);
  var subject = BidderDocumentObject.create();
  assert.ok(subject);
});
