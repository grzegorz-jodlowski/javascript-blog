{
    'use strict;'

    // document.getElementById('test-button').addEventListener('click', function(){
    //     const links = document.querySelectorAll('.titles a');
    //     console.log('links:', links);
    //     for(let link of links){
    //         console.log(link.innerText);
    //       }
    //   });

    const titleClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');

        /* [DONE] remove class 'active' from all article links  */

        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }

        /* [DONE] add class 'active' to the clicked link */

        console.log('clicked element: ', clickedElement);

        clickedElement.classList.add('active');

        /* [DONE] remove class 'active' from all articles */

        const activeArticles = document.querySelectorAll('.posts article.active');

        for (let activeArticle of activeArticles) {

            activeArticle.classList.remove('active');
        }

        /* [DONE] get 'href' attribute from the clicked link */

        const hrefAtribute = clickedElement.getAttribute('href')

        console.log(hrefAtribute);

        /* [DONE] find the correct article using the selector (value of 'href' attribute) */

        const clickedArticle = document.querySelector(hrefAtribute);

        console.log(clickedArticle);
        /* [DONE] add class 'active' to the correct article */

        clickedArticle.classList.add('active');

    }

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }


    function generateTitleLinks() {

        console.log("funkcja ruszyła...");

        /* [DONE] remove all links from "ALL POSTS" column */

        document.querySelector('.list.titles').innerHTML = "";

        /* catch all articles */

        const articles = document.querySelectorAll('.post');
        console.log(articles);

        /* in all articles: */
        /*find id of article and save it to variable */
        for (let article of articles) {


            const articleId = article.getAttribute('id');
            console.log(articleId);


            /* find element with title and save it to variable */

            const articleTitle = article.querySelector('.post-title').innerHTML;
            console.log(articleTitle);

            /* create HTML code based on id and title and save it to variable */

            const htmlCode = `<a href="#${articleId}"><span>${articleTitle}</span></a>`
            console.log(htmlCode);

            /* insert new HTML code to "ALL POSTS" column */
            let li = document.createElement('li');
            li.innerHTML = htmlCode;
            const ulList = document.querySelector('ul').appendChild(li);

            console.log(ulList);
        }
    }

    generateTitleLinks();


}