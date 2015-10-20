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
  });
  this.route('organization', { path: 'organizations/:organization_id' }, function() {
    this.route('auctions', {}, function() {
      this.route('new', {});
    });
    this.route('auction', { path: 'auctions/:auction_id' }, function() {
      this.route('donations', {}, function() {
        this.route('new', {});
      });
    });
  });
});

export default Router;
