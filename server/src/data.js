const users = [
    {
        id:"1",
        fullName: "Ömer Can Hocaoğlu",
        profile_photo: "https://randomuser.me/api/portraits/men/63.jpg",
        age: 31
    },

    {
        id:"2",
        fullName: "Onur Hocaoğlu",
        profile_photo: "https://randomuser.me/api/portraits/men/0.jpg",
        age: 29
    }
];



const posts = [
    {
        id:"1",
        title:"Ömer'in gönderisi",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        short_description: "lorem ipsum mipsum falan filan",
        user_id:"1",
        cover: "https://plus.unsplash.com/premium_photo-1673028716408-51942fd0b117?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id:"2",
        title:"Ömer'in diğer gönderisi",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        short_description: "lorem ipsum mipsum falan filan",
        user_id:"1",
        cover: "https://images.unsplash.com/photo-1725493279968-bc968e5f704e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id:"3",
        title:"Onur'un gönderisi",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        short_description: "lorem ipsum mipsum falan filan",
        user_id:"2",
        cover: "https://images.unsplash.com/photo-1725429967564-cebd8d7a98d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id:"4",
        title:"Onur'un gönderisinin yenisi buradadır.",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
        short_description: "lorem ipsum mipsum falan filan",
        user_id:"2",
        cover: "https://plus.unsplash.com/premium_photo-1673028716408-51942fd0b117?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

];

const comments = [
    {
        id:"1",
        text:"Ömer'in yorumudur.",
        post_id:"1",
        user_id:"1"
    },

    {
        id:"2",
        text:"Ömer'in ikinci yorumudur.",
        post_id:"1",
        user_id:"1"
    },

    {
        id:"3",
        text:"Onur'un yorumudur.",
        post_id:"2",
        user_id:"2"
    },

    {
        id:"4",
        text:"Onur'un diğer yorumudur.",
        post_id:"2",
        user_id:"2"
    }
];

module.exports = {users, posts, comments}

// export default  {users, posts, comments};