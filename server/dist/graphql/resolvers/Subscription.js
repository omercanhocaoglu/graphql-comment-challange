"use strict";

var _require = require("graphql-yoga"),
  withFilter = _require.withFilter,
  PubSub = _require.PubSub;
var _require2 = require("../../data"),
  users = _require2.users,
  posts = _require2.posts,
  comments = _require2.comments;
var pubsub = new PubSub();
var Subscription = {
  //Users
  userCreated: {
    // subscribe: (parent, args, { pubsub }) =>  pubsub.asyncIterator("userCreated") 
    subscribe: withFilter(function (parent, args, _ref) {
      var pubsub = _ref.pubsub;
      return pubsub.asyncIterator("userCreated");
    }, function (payload, variables) {
      console.log(payload, variables);
      return true;
    })
  },
  userUpdated: {
    subscribe: function subscribe(parent, args, _ref2) {
      var pubsub = _ref2.pubsub;
      return pubsub.asyncIterator("userUpdated");
    }
  },
  userDeleted: {
    subscribe: function subscribe(parent, args, _ref3) {
      var pubsub = _ref3.pubsub;
      return pubsub.asyncIterator("userDeleted");
    }
  },
  //Posts
  postCreated: {
    subscribe: withFilter(function (parent, args, _ref4) {
      var pubsub = _ref4.pubsub;
      return pubsub.asyncIterator("postCreated");
    }, function (payload, variables) {
      // console.log("payload:", payload); 
      // console.log("variables:", variables); 

      return variables.user_id ? payload.postCreated.user_id == variables.user_id : true;
    })
  },
  postUpdated: {
    subscribe: function subscribe(parent, args, _ref5) {
      var pubsub = _ref5.pubsub;
      return pubsub.asyncIterator("postUpdated");
    }
  },
  postDeleted: {
    subscribe: function subscribe(parent, args, _ref6) {
      var pubsub = _ref6.pubsub;
      return pubsub.asyncIterator("postDeleted");
    }
  },
  postCount: {
    subscribe: function subscribe(parent, args, _ref7) {
      var pubsub = _ref7.pubsub;
      setTimeout(function () {
        pubsub.publish("postCount", {
          postCount: posts.length
        });
      });
      return pubsub.asyncIterator("postCount");
    }
  },
  //Comments
  commentCreated: {
    subscribe: withFilter(function (args, parent, _ref8) {
      var pubsub = _ref8.pubsub;
      return pubsub.asyncIterator("commentCreated");
    }, function (payload, variables) {
      return variables.post_id ? payload.commentCreated.post_id == variables.post_id : true;
    })
  },
  commentUpdated: {
    subscribe: function subscribe(args, parent, _ref9) {
      var pubsub = _ref9.pubsub;
      return pubsub.asyncIterator("commentUpdated");
    }
  },
  commentDeleted: {
    subscribe: function subscribe(args, parent, _ref10) {
      var pubsub = _ref10.pubsub;
      return pubsub.asyncIterator("commentDeleted");
    }
  }
};
module.exports = Subscription;