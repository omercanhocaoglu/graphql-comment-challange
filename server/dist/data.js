"use strict";

var users = [{
  id: "1",
  fullName: "Ömer Can Hocaoğlu",
  age: 31
}, {
  id: "2",
  fullName: "Onur Hocaoğlu",
  age: 29
}];
var posts = [{
  id: "1",
  title: "Ömer'in gönderisi",
  user_id: "1"
}, {
  id: "2",
  title: "Ömer'in diğer gönderisi",
  user_id: "1"
}, {
  id: "3",
  title: "Onur'un gönderisi",
  user_id: "2"
}, {
  id: "4",
  title: "Onur'un gönderisinin yenisi buradadır.",
  user_id: "2"
}];
var comments = [{
  id: "1",
  text: "Ömer'in yorumudur.",
  post_id: "1",
  user_id: "1"
}, {
  id: "2",
  text: "Ömer'in ikinci yorumudur.",
  post_id: "1",
  user_id: "1"
}, {
  id: "3",
  text: "Onur'un yorumudur.",
  post_id: "2",
  user_id: "2"
}, {
  id: "4",
  text: "Onur'un diğer yorumudur.",
  post_id: "2",
  user_id: "2"
}];
module.exports = {
  users: users,
  posts: posts,
  comments: comments
};

// export default  {users, posts, comments};