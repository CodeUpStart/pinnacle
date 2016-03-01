Meteor.startup(function() {
  Meteor.subscribe('posts');
  Meteor.subscribe('userData');
});
