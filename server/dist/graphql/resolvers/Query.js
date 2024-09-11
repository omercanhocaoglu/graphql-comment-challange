"use strict";

var _require = require("../../data"),
  _users = _require.users,
  _posts = _require.posts,
  _comments = _require.comments;
var Query = {
  //user Kısmı burada
  users: function users() {
    return _users;
  },
  user: function user(parent, args) {
    var user = _users.find(function (user) {
      return user.id == args.id;
    });
    if (!user) {
      return new Error("Kullanıcı Bulunamadı!");
    }
    return user;
  },
  // Post kısmı burada
  posts: function posts() {
    return _posts;
  },
  post: function post(parent, args) {
    var post = _posts.find(function (post) {
      return post.id == args.id;
    });
    if (!post) {
      return new Error("Post Bulunamadı!");
    }
    return post;
  },
  // Comment kısmı burada
  comments: function comments() {
    return _comments;
  },
  comment: function comment(parent, args) {
    var comment = _comments.find(function (comment) {
      return comment.id == args.id;
    });
    if (!comment) {
      return new Error("Kullanıcı yorumu bulunamadı!");
    }
    return comment;
  }
};

// const Query =  {
//     //user Kısmı burada
//       users: ( _, _, { db } ) => db.users,

//       user: (parent, args, { db }) => {
//       const user =  db.users.find(user => user.id == args.id);
//       if (!user) {return new Error("Kullanıcı Bulunamadı!")}
//       return user;
//     },

//     // Post kısmı burada
//     posts: (_, _, { db }) => db.posts,

//     post: (parent, args, { db }) => {
//       const post = db.posts.find(post => post.id == args.id);
//       if (!post) {return new Error("Post Bulunamadı!")}
//       return post;
//     },

//     // Comment kısmı burada
//     comments: (_, _, { db }) => db.comments,

//     comment: (parent, args, { db }) => {
//       const comment = db.comments.find(comment => comment.id == args.id);
//       if (!comment) {return new Error("Kullanıcı yorumu bulunamadı!")}
//       return comment;
//     }
//   };

module.exports = Query;