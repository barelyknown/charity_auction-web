import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register-user', {});
  this.route('login', {});

  this.route('organizations', {}, function() {
    this.route('new', {});
    this.route('organization', { path: ':organization_id' }, function() {
      this.route('auctions', {}, function() {
        this.route('new', {});
        this.route('auction', { path: ':auction_id' }, function() {
          this.route('donations', {}, function() {
            this.route('new', {});
            this.route('donation', { path: ':donation_id' }, function() {
              this.route('edit', {});
            });
          });

          this.route('edit', {});

          this.route('donors', {}, function() {
            this.route('new', {});
          });

          this.route('tickets', {}, function() {
            this.route('new', {});
            this.route('ticket', { path: ':ticket_id' }, function() {
              this.route('edit', {});
            });
          });
        });
      });
    });
  });
});

export default Router;
