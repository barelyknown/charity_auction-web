import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auction-program-auction-items', 'Integration | Component | auction program auction items', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{auction-program-auction-items}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#auction-program-auction-items}}
      template block text
    {{/auction-program-auction-items}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
