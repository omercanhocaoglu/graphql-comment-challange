"use strict";

var _data = require("../../data");
// const {users, posts} = require("../../data");

var Comment = {
  user: function user(parent, args) {
    var user = _data.users.find(function (user) {
      return user.id == parent.user_id;
    });
    return user;
  },
  posts: function posts(parent, args) {
    var post = _data.posts.find(function (post) {
      return post.user_id == parent.user_id;
    });
    return post;
  }
};
module.exports = Comment;