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

  isTimeZoneIdNotSet: Ember.computed('auction.timeZoneId', function() {
    return Ember.isBlank(this.get('auction.timeZoneId'));
  }),

  isTimeZoneIdNotSetPlaceholder: Ember.computed('isTimeZoneIdNotSet', function() {
    if (this.get('isTimeZoneIdNotSet')) {
      return 'Set the time zone before setting dates.';
    } else {
      return '';
    }
  }),

  localDonationWindowEndsAt: Ember.computed('auction.timeZoneId', {
    get(key) {
      if (this.get('auction.donationWindowEndsAt')) {
        return moment(this.get('auction.donationWindowEndsAt')).tz(this.get('auction.timeZoneId')).format("YYYY-MM-DD hh:mm");
      }
    },
    set(key, value) {
      if (Ember.isPresent(this.get('auction.timeZoneId'))) {
        const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
        if (localMoment.isValid()) {
          this.set('auction.donationWindowEndsAt', new Date(localMoment.tz('UTC').format()));
        }
      }
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
      if (Ember.isPresent(this.get('auction.timeZoneId'))) {
        const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
        if (localMoment.isValid()) {
          this.set('auction.startsAt', new Date(localMoment.tz('UTC').format()));
        }
      }
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
      if (Ember.isPresent(this.get('auction.timeZoneId'))) {
        const localMoment = moment.tz(value, "YYYY-MM-DD hh:mm", this.get('auction.timeZoneId')).clone();
        if (localMoment.isValid()) {
          this.set('auction.endsAt', new Date(localMoment.tz('UTC').format()));
        }
        this.set('auction.endsAt', new Date(localMoment.tz('UTC').format()));
      }
      return value;
    }
  }),

  onSave: 'saveAuction',

  onCancel: 'cancelEditAuction',

  actions: {
    save() {
      this.sendAction('onSave', this.get('auction'));
    },

    cancel() {
      this.sendAction('onCancel', this.get('auction'));
    }
  }

});
