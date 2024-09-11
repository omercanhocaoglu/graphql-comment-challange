"use strict";

var _require = require("../../data"),
  _posts = _require.posts,
  _comments = _require.comments;
var User = {
  posts: function posts(parent, args) {
    var post = _posts.filter(function (post) {
      return post.user_id == parent.id;
    });
    return post;
  },
  comments: function comments(parent, args) {
    var comment = _comments.filter(function (comment) {
      return comment.user_id == parent.id;
    });
    return comment;
  }
};
module.exports = User;