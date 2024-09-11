const {  withFilter, PubSub } = require("graphql-yoga");

const {users, posts, comments} = require("../../data");


const pubsub = new PubSub();




const Subscription = {
    //Users
    userCreated: {
      // subscribe: (parent, args, { pubsub }) =>  pubsub.asyncIterator("userCreated") 
      subscribe: withFilter(
        (parent, args, { pubsub }) =>  pubsub.asyncIterator("userCreated"),

        ( payload, variables  ) => { console.log(payload, variables); return true; }
      ),
    },

    userUpdated: {
      subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator("userUpdated")
    },

    userDeleted: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator("userDeleted")
    },

    
    
    
    
    
    //Posts
    postCreated: {
      subscribe:  withFilter(
        (parent, args, {pubsub} ) => pubsub.asyncIterator("postCreated"),

        ( payload, variables ) => { 
        // console.log("payload:", payload); 
        // console.log("variables:", variables); 

        return variables.user_id ? (payload.postCreated.user_id == variables.user_id) : true;

        }
      )
    },

    postUpdated: {
      subscribe: (parent,args, { pubsub } ) => pubsub.asyncIterator("postUpdated")
    },

    postDeleted: {
      subscribe: (parent, args, { pubsub } ) => pubsub.asyncIterator("postDeleted")
    },

    postCount: {
      subscribe: (parent, args, {pubsub} ) => {
      
      setTimeout( () => { pubsub.publish("postCount", { postCount: posts.length }) }, );
      
      return  pubsub.asyncIterator("postCount")
      }
    },

    
    
    
    
    //Comments
    commentCreated: {
      subscribe: withFilter(
        (args, parent, { pubsub } ) => pubsub.asyncIterator("commentCreated"),

        ( payload, variables ) => {
          return variables.post_id ? (payload.commentCreated.post_id == variables.post_id) : true ;
        },
      )
    },

    commentUpdated: {
      subscribe: (args, parent, { pubsub } ) => pubsub.asyncIterator("commentUpdated")
    },

    commentDeleted: {
      subscribe: (args, parent, { pubsub } ) => pubsub.asyncIterator("commentDeleted")
    }



    


  };

  module.exports = Subscription;