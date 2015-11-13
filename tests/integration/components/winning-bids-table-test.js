import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('winning-bids-table', 'Integration | Component | winning bids table', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{winning-bids-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#winning-bids-table}}
      template block text
    {{/winning-bids-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
