{
    'use strict;'

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

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


    function generateTitleLinks() {

        console.log("funkcja ruszyła...");

        /* [DONE] remove all links from "ALL POSTS" column */

        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = "";

        /* catch all articles */

        const articles = document.querySelectorAll(optArticleSelector);
        console.log(articles);

        // to third method: let entireHTML = "";

        /* in all articles: */
        /*find id of article and save it to variable */
        for (let article of articles) {


            const articleId = article.getAttribute('id');
            console.log(articleId);


            /* find element with title and save it to variable */

            const articleTitle = article.querySelector(optTitleSelector).innerHTML;
            console.log(articleTitle);

            /* create HTML code based on id and title and save it to variable */

            const htmlCode = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`
            console.log(htmlCode);

            /* insert new HTML code to "ALL POSTS" column */

            // first method (bad one): titleList.innerHTML += htmlCode;
            // second method:
            titleList.insertAdjacentHTML("beforeend", htmlCode);
            // third method: entireHTML += htmlCode;
            // fourth method (without <li></li> in htmlCode):
            // let li = document.createElement('li');
            // li.innerHTML = htmlCode;
            // titleList.appendChild(li);

        }
        // to third method: titleList.innerHTML = entireHTML;

        const links = document.querySelectorAll('.titles a');

        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }

    generateTitleLinks();


}