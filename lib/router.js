Router.configure({
  layoutTemplate: 'fluidlayout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {
  name: 'postsList'
});
