import Ember from 'ember';

export default Ember.Component.extend({

  donor: null,

  store: Ember.inject.service(),

  potentialUsers: [],

  setPotentialUsers: Ember.on('init', Ember.observer('donor.auction.donors.[]',function() {
    const promises = {
      allUsers: this.get('store').query('user', {}),
      auctionDonorUsers: this.get('donor.auction.donors').filter((donor) => {
        return donor.get('id');
      })
    };
    return Ember.RSVP.hash(promises).then((results) => {
      const auctionDonorUserIds = results.auctionDonorUsers.mapBy('user.id');
      this.set('potentialUsers', results.allUsers.filter((user) => {
        return !auctionDonorUserIds.contains(user.get('id'));
      }));
    });
  })),

  actions: {
    setUser(userId) {
      if (userId) {
        this.get('store').findRecord('user', userId).then((user) => {
          this.set('donor.user', user);
        });
      } else {
        this.set('donor.user', null);
      }
    },
    create() {
      this.get('on-create')(this.get('donor'));
    }
  }

});
