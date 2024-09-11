const { posts, comments } = require("../../data");


const User = {
    posts: (parent,args) => {
      const post = posts.filter( ( post ) => post.user_id == parent.id  );
      return post;
    },

    comments: ( parent,args ) => {
      const comment = comments.filter( ( comment ) => comment.user_id == parent.id );
      return comment;
    }
      
    
};


module.exports = User;

