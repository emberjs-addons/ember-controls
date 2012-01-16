Ember.PaginationButton = Ember.Button.extend({
  template: Ember.Handlebars.compile('{{directionName}}'),
  classNameBindings: 'isDisabled:disabled directionClassName'.w(),
  
  direction: null, // "previous" or "next"
  isEnabled: true,
 
  isPrevious: function() {
    return this.get('direction') === 'previous';
  }.property('direction').cacheable(),
 
  isDisabled: function() {
    return !this.get('isEnabled');
  }.property('isEnabled').cacheable(),
 
  directionName: function() {
    return this.get('isPrevious') ? 'Previous' : 'Next';
  }.property('isPrevious').cacheable(),
 
  directionClassName: function() {
    return this.get('isPrevious') ? 'previous' : 'next';
  }.property('isPrevious').cacheable()
});