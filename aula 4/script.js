const posts = [
    {
        title:"5SOS5",
        // image: "https://i.pinimg.com/564x/32/71/a1/3271a110ce74a010b019dfa3bb3f7f5b.jpg",
        content:"The new album 5SOS5 is yours now <3 Click here to listen!"
    },
    {
        title:"New Tour",
        content: "new tour this year"
    }
    
];

const wrapper = document.getElementById('posts');

for (var i=0;i<posts.length;i++){
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText)
    article.appendChild(title);

    // const image = document.createElement('img');
    // image.classList.add('articleImg');
    // image.src = postData.image;
    // image.appendChild(image);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);






}