


const uid = () => { return Date.now().toString(36) + Math.random().toString(36).substr(2); } //Burası kendimiz yaptığımız fake id kısmı... 

// const {users, posts, comments} = require("../../data");

import { users, posts, comments } from "../../data";




const Mutation = { // burası mutation kısmı içindir
    createUser: (parent, {data}, {pubsub}) => {
      const user = { id: uid, fullName: data.fullName, age: data.age };
      users.push( user );
      pubsub.publish("userCreated", { userCreated: user });
      return user; 
    },

    
    
    updateUser: (parent, {id, data}, {pubsub}) => {
      const userIndex = users.findIndex( ( user ) => user.id == id );
      // console.log(userIndex);
      if (userIndex === -1) {return new Error("Data not found!")};

      const newUpdatedUser = users[userIndex] = {...users[userIndex], ...data };


      pubsub.publish("userUpdated", { userUpdated: newUpdatedUser });

      return newUpdatedUser;
    },

    deleteUser: ( parent, {id, fullName}, {pubsub} ) => {

      const userIndex = users.findIndex(( user ) => user.fullName == fullName || user.id == id );

      if ( userIndex == -1 ) { return new Error("Data not found!") };

      const deletedUser = users[userIndex];
      
      users.splice(userIndex, 1);

      pubsub.publish("userDeleted", { userDeleted: deletedUser })

      return deletedUser;



    },

    deleteAllUsers: () => {

      const length = users.length;

      users.splice(0, length);

      return {
        
        count: length,


      }

    },


    
    
    
    
    // Posts
    createPost: (parent, { data }, {pubsub}) => { 
      const post = { ...data, id: uid }; // bu taktikle data'dan gelen bütün bilgileri kopyalamış olduk
      posts.push(post);
      
      pubsub.publish("postCreated", { postCreated: post });
      pubsub.publish("postCount", { postCount: posts.length } )
      return post;

    },

    updatePost: (parent, {id, data }, {pubsub}) => {
      const postIndex = posts.findIndex((post) => post.id == id );

      if (postIndex == -1) {return new Error("Data not found!")};

      const newupdatedPost = posts[postIndex] = { ...posts[postIndex], ...data };

      pubsub.publish("postUpdated", { postUpdated: newupdatedPost } );

      return newupdatedPost;
    },

    deletePost: ( parent, {id, title}, {pubsub} ) => {

      const postIndex = posts.findIndex( ( post ) => post.id == id || post.title == title );

      if (postIndex == -1) { return new Error("Data not found") };

      const deletedPost = posts[postIndex];

      posts.splice(postIndex, 1);

      
      pubsub.publish("postDeleted", { postDeleted: deletedPost });
      pubsub.publish("postCount", { postCount: posts.length } )

      return deletedPost;

    },

    deleteAllPosts: (parent, args, {pubsub} ) => {
      const length = posts.length;

      posts.splice(0, length);

      pubsub.publish("postCount", { postCount: posts.length } )

      return {
        count: length
      };
    },





    
    
    
    
    // Comments
    createComment: ( parent, {data}, {pubsub} ) => {
      const comment = { text:data.text, user_id: data.user_id, post_id: data.post_id, id: uid };
      comments.push(comment);

      pubsub.publish("commentCreated", { commentCreated: comment } );
      return comment;

    },

    updateComment: ( parent, {id, data}, {pubsub} ) => {
      const commentIndex = comments.findIndex( ( comment ) => comment.id == id );
      
      if (commentIndex == -1) { return new Error("Data not found!") };

      const newUpdatedComment = comments[commentIndex] = { ...comments[commentIndex], ...data };

      pubsub.publish("commentUpdated", { commentUpdated: newUpdatedComment } );

      return newUpdatedComment;
    },

    deleteComment: ( parent, {id, text}, {pubsub} ) => {

      const commentIndex = comments.findIndex( ( comment ) => comment.id == id || comment.text == text );

      if (commentIndex == -1) { return new Error("Data not found!") };

      const deletedComment = comments[commentIndex];

      comments.splice(commentIndex, 1);

      pubsub.publish("commentDeleted", { commentDeleted: deletedComment } )

      return deletedComment;

    },

    deleteAllComments: () => {
      const length = comments.length;

      comments.splice(0 , length );
  

      return {
        count: length
      };
    },


    
  }; // Mutation kısmı sonu

  module.exports = Mutation;