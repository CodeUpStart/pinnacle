Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('userData', function() {
  if (!this.userId) return null;
  return Meteor.users.find(this.userId, {
    fields: {
      services: 1
    }
  });
});
