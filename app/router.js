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

          this.route('bid-groups', {}, function() {
            this.route('new', {});

            this.route('bid-group', { path: ':bid_group_id'}, function() {
              this.route('edit', {});
            });
          });

          this.route('auction-items', {}, function() {
            this.route('new', {});

            this.route('auction-item', { path: ':auction_item_id' }, function() {
              this.route('edit', {});

              this.route('bids', {}, function() {
                this.route('new', {});
                this.route('bid', { path: ':bid_id' });
              });
            });
          });
          this.route('payments', {}, function() {
            this.route('new', {});
            this.route('payment', { path: ':payment_id' }, function() {});
          });

          this.route('bidders', {}, function() {
            this.route('bidder', { path: ':bidder_id' }, function() {
              this.route('edit', {});
            });
          });
        });
      });

      this.route('memberships', {}, function() {
        this.route('new', {});
      });
    });
  });

  this.route('programs', {}, function() {
    this.route('auction', { path: 'auction/:auction_id' });
  });

  this.route('users', {}, function() {
    this.route('user', { path: ':user_id' }, function() {
      this.route('edit', {});
    });
  });
  this.route('bidder-checkout', { path: 'bidder-checkout/:bidder_id' });
});

export default Router;
