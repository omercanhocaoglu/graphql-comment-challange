
const { users, comments } = require("../../data")

const Post = {
    user: (parent, args) => {
      const user = users.find( ( user ) => user.id == parent.user_id );
      return user;
    },

    comments: (parent, args) => {
      const comment = comments.filter( ( comment ) => comment.post_id == parent.user_id );
      return comment;
    }
     
    
      };

      
module.exports = Post;

