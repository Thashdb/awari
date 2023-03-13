const posts = [
    {
        title:"5SOS5",
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

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);






}