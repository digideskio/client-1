import Ember from 'ember';

export default Ember.Component.extend({
  questionOptions: [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 2 },
    { label: 'N/A', value: 3 },
    { label: 'Unknown', value: 4 }
  ],
  actions: {
    save: function() {
      this.sendAction('save', this.get('review'));
    },
    selectOption: function(fieldName, value) {
      this.get('review').set(fieldName, value);
    }
  }
});
