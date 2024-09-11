const {users, posts, comments} = require("../../data");


const Query =  {
  //user Kısmı burada
    users: () => users,
  
    user: (parent, args) => {
    const user =  users.find(user => user.id == args.id);
    if (!user) {return new Error("Kullanıcı Bulunamadı!")}
    return user;
  },
  
  // Post kısmı burada
  posts: () => posts,
  
  post: (parent, args) => {
    const post = posts.find(post => post.id == args.id);
    if (!post) {return new Error("Post Bulunamadı!")}
    return post;
  },
  
  
  
  // Comment kısmı burada
  comments: () => comments,

  comment: (parent, args) => {
    const comment = comments.find(comment => comment.id == args.id);
    if (!comment) {return new Error("Kullanıcı yorumu bulunamadı!")}
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

