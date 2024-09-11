// const {users, posts} = require("../../data");

import { users, posts } from "../../data";

const Comment = {

    user: ( parent, args ) => {
      const user = users.find( ( user ) => user.id == parent.user_id );
      return user;
      
      
        },

    posts: (parent, args) => {
      const post = posts.find( ( post ) => post.user_id == parent.user_id );
      return post;
    }

};



module.exports = Comment;