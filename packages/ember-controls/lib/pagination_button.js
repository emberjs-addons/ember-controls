Ember.PaginationButton = Ember.Button.extend({
  template: Ember.Handlebars.compile('{{directionName}}'),
  classNameBindings: ['isDisabled:disabled', 'directionClassName'],

  direction: null, // "previous" or "next"
  isEnabled: true,

  isPrevious: Ember.computed(function() {
    return this.get('direction') === 'previous';
  }).property('direction').cacheable(),

  isDisabled: Ember.computed(function() {
    return !this.get('isEnabled');
  }).property('isEnabled').cacheable(),

  directionName: Ember.computed(function() {
    return this.get('isPrevious') ? 'Previous' : 'Next';
  }).property('isPrevious').cacheable(),

  directionClassName: Ember.computed(function() {
    return this.get('isPrevious') ? 'previous' : 'next';
  }).property('isPrevious').cacheable()
});
