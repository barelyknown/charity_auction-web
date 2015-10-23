import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  timeZones: [
    {
      id: "America/New_York",
      name: "Eastern"
    },
    {
      id: "America/Chicago",
      name: "Central"
    }
  ],

  localDonationWindowEndsAt: Ember.computed('auction.timeZoneId', {
    get(key) {
      if (this.get('auction.donationWindowEndsAt')) {
        return moment(this.get('auction.donationWindowEndsAt')).tz(this.get('auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
      this.set('auction.donationWindowEndsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  localStartsAt: Ember.computed('auction.timeZoneId', {
    get(key) {
      if (this.get('auction.startsAt')) {
        return moment(this.get('auction.startsAt')).tz(this.get('auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
      this.set('auction.startsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  localEndsAt: Ember.computed('auction.timeZoneId', {
    get(key) {
      if (this.get('auction.endsAt')) {
        return moment(this.get('auction.endsAt')).tz(this.get('auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
      this.set('auction.endsAt', new Date(localMoment.tz('UTC').format()));
      return value;
    }
  }),

  actions: {
    save() {
      this.get('onSave')(this.get('auction'));
    }
  }

});
