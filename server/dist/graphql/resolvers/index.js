"use strict";

var Query = require("./Query");
var Mutation = require("./Mutation");
var Subscription = require("./Subscription");
var User = require("./User");
var Post = require("./Post");
var Comment = require("./Comment");
module.exports = {
  Query: Query,
  Mutation: Mutation,
  Subscription: Subscription,
  User: User,
  Post: Post,
  Comment: Comment
};