"use strict";

var _data = require("../../data");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}; //Burası kendimiz yaptığımız fake id kısmı... 

// const {users, posts, comments} = require("../../data");

var Mutation = {
  // burası mutation kısmı içindir
  createUser: function createUser(parent, _ref, _ref2) {
    var data = _ref.data;
    var pubsub = _ref2.pubsub;
    var user = {
      id: uid,
      fullName: data.fullName,
      age: data.age
    };
    _data.users.push(user);
    pubsub.publish("userCreated", {
      userCreated: user
    });
    return user;
  },
  updateUser: function updateUser(parent, _ref3, _ref4) {
    var id = _ref3.id,
      data = _ref3.data;
    var pubsub = _ref4.pubsub;
    var userIndex = _data.users.findIndex(function (user) {
      return user.id == id;
    });
    // console.log(userIndex);
    if (userIndex === -1) {
      return new Error("Data not found!");
    }
    ;
    var newUpdatedUser = _data.users[userIndex] = _objectSpread(_objectSpread({}, _data.users[userIndex]), data);
    pubsub.publish("userUpdated", {
      userUpdated: newUpdatedUser
    });
    return newUpdatedUser;
  },
  deleteUser: function deleteUser(parent, _ref5, _ref6) {
    var id = _ref5.id,
      fullName = _ref5.fullName;
    var pubsub = _ref6.pubsub;
    var userIndex = _data.users.findIndex(function (user) {
      return user.fullName == fullName || user.id == id;
    });
    if (userIndex == -1) {
      return new Error("Data not found!");
    }
    ;
    var deletedUser = _data.users[userIndex];
    _data.users.splice(userIndex, 1);
    pubsub.publish("userDeleted", {
      userDeleted: deletedUser
    });
    return deletedUser;
  },
  deleteAllUsers: function deleteAllUsers() {
    var length = _data.users.length;
    _data.users.splice(0, length);
    return {
      count: length
    };
  },
  // Posts
  createPost: function createPost(parent, _ref7, _ref8) {
    var data = _ref7.data;
    var pubsub = _ref8.pubsub;
    var post = _objectSpread(_objectSpread({}, data), {}, {
      id: uid
    }); // bu taktikle data'dan gelen bütün bilgileri kopyalamış olduk
    _data.posts.push(post);
    pubsub.publish("postCreated", {
      postCreated: post
    });
    pubsub.publish("postCount", {
      postCount: _data.posts.length
    });
    return post;
  },
  updatePost: function updatePost(parent, _ref9, _ref10) {
    var id = _ref9.id,
      data = _ref9.data;
    var pubsub = _ref10.pubsub;
    var postIndex = _data.posts.findIndex(function (post) {
      return post.id == id;
    });
    if (postIndex == -1) {
      return new Error("Data not found!");
    }
    ;
    var newupdatedPost = _data.posts[postIndex] = _objectSpread(_objectSpread({}, _data.posts[postIndex]), data);
    pubsub.publish("postUpdated", {
      postUpdated: newupdatedPost
    });
    return newupdatedPost;
  },
  deletePost: function deletePost(parent, _ref11, _ref12) {
    var id = _ref11.id,
      title = _ref11.title;
    var pubsub = _ref12.pubsub;
    var postIndex = _data.posts.findIndex(function (post) {
      return post.id == id || post.title == title;
    });
    if (postIndex == -1) {
      return new Error("Data not found");
    }
    ;
    var deletedPost = _data.posts[postIndex];
    _data.posts.splice(postIndex, 1);
    pubsub.publish("postDeleted", {
      postDeleted: deletedPost
    });
    pubsub.publish("postCount", {
      postCount: _data.posts.length
    });
    return deletedPost;
  },
  deleteAllPosts: function deleteAllPosts(parent, args, _ref13) {
    var pubsub = _ref13.pubsub;
    var length = _data.posts.length;
    _data.posts.splice(0, length);
    pubsub.publish("postCount", {
      postCount: _data.posts.length
    });
    return {
      count: length
    };
  },
  // Comments
  createComment: function createComment(parent, _ref14, _ref15) {
    var data = _ref14.data;
    var pubsub = _ref15.pubsub;
    var comment = {
      text: data.text,
      user_id: data.user_id,
      post_id: data.post_id,
      id: uid
    };
    _data.comments.push(comment);
    pubsub.publish("commentCreated", {
      commentCreated: comment
    });
    return comment;
  },
  updateComment: function updateComment(parent, _ref16, _ref17) {
    var id = _ref16.id,
      data = _ref16.data;
    var pubsub = _ref17.pubsub;
    var commentIndex = _data.comments.findIndex(function (comment) {
      return comment.id == id;
    });
    if (commentIndex == -1) {
      return new Error("Data not found!");
    }
    ;
    var newUpdatedComment = _data.comments[commentIndex] = _objectSpread(_objectSpread({}, _data.comments[commentIndex]), data);
    pubsub.publish("commentUpdated", {
      commentUpdated: newUpdatedComment
    });
    return newUpdatedComment;
  },
  deleteComment: function deleteComment(parent, _ref18, _ref19) {
    var id = _ref18.id,
      text = _ref18.text;
    var pubsub = _ref19.pubsub;
    var commentIndex = _data.comments.findIndex(function (comment) {
      return comment.id == id || comment.text == text;
    });
    if (commentIndex == -1) {
      return new Error("Data not found!");
    }
    ;
    var deletedComment = _data.comments[commentIndex];
    _data.comments.splice(commentIndex, 1);
    pubsub.publish("commentDeleted", {
      commentDeleted: deletedComment
    });
    return deletedComment;
  },
  deleteAllComments: function deleteAllComments() {
    var length = _data.comments.length;
    _data.comments.splice(0, length);
    return {
      count: length
    };
  }
}; // Mutation kısmı sonu

module.exports = Mutation;