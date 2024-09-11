"use strict";

var _require = require("../../data"),
  users = _require.users,
  _comments = _require.comments;
var Post = {
  user: function user(parent, args) {
    var user = users.find(function (user) {
      return user.id == parent.user_id;
    });
    return user;
  },
  comments: function comments(parent, args) {
    var comment = _comments.filter(function (comment) {
      return comment.post_id == parent.user_id;
    });
    return comment;
  }
};
module.exports = Post;