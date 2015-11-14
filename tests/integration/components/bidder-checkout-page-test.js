import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bidder-checkout-page', 'Integration | Component | bidder checkout page', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bidder-checkout-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bidder-checkout-page}}
      template block text
    {{/bidder-checkout-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
