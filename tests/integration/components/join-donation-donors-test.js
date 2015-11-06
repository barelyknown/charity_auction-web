import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('join-donation-donors', 'Integration | Component | join donation donors', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{join-donation-donors}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#join-donation-donors}}
      template block text
    {{/join-donation-donors}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
