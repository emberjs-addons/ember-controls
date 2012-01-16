var application, button;

var get = Ember.get, set = Ember.set;

module('Ember.PaginationButton', {
  setup: function() {
    application = Ember.Application.create();
    // force setup since document may not be ready yet.
    get(application, 'eventDispatcher').setup();
  },

  teardown: function() {
    button.destroy();
    application.destroy();
  }
});

test('previous should work', function() {
  Ember.run(function() {
    button = Ember.PaginationButton.create({direction: 'previous'});
    button.append();
  });
  
  equals(button.$().text(), 'Previous');
  ok(button.$().hasClass('previous'));
});

test('next should work', function() {
  Ember.run(function() {
    button = Ember.PaginationButton.create({direction: 'next'});
    button.append();
  });
  
  equals(button.$().text(), 'Next');
  ok(button.$().hasClass('next'));
});
