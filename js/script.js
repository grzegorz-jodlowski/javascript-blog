{
  'use strict';

  const opts = {
    tagSizes: {
      count: 5,
      classPrefix: 'tag-size-',
    },
  };

  const select = {
    all: {
      articles: '.post',
      linksTo: {
        tags: 'a[href^="#tag-"]',
        authors: 'a[href^="#author-"]',
      },
    },
    article: {
      tags: '.post-tags .list',
      author: '.post-author',
      title: '.post-title',
    },
    listOf: {
      titles: '.titles',
      tags: '.tags.list',
      authors: '.authors.list',
    },
  };

  const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    articleTag: Handlebars.compile(document.querySelector('#template-article-tag').innerHTML),
    articleAuthor: Handlebars.compile(document.querySelector('#template-article-author').innerHTML),
    tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
    authorCloudLink: Handlebars.compile(document.querySelector('#template-author-cloud-link').innerHTML),
  };

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

    const hrefAtribute = clickedElement.getAttribute('href');
    console.log(hrefAtribute);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const clickedArticle = document.querySelector(hrefAtribute);

    console.log(clickedArticle);

    /* [DONE] add class 'active' to the correct article */

    clickedArticle.classList.add('active');
  };

  function generateTitleLinks(customSelector = '') {
    console.log('funkcja ruszyła...');

    /* [DONE] remove all links from "ALL POSTS" column */

    const titleList = document.querySelector(select.listOf.titles);

    titleList.innerHTML = '';

    /* [DONE] catch all articles */

    const articles = document.querySelectorAll(select.all.articles + customSelector);

    console.log(articles);

    // to third method: let entireHTML = "";

    /* in all articles: */
    /* [DONE] find id of article and save it to variable */
    for (let article of articles) {
      const articleId = article.getAttribute('id');

      console.log(articleId);

      /* [DONE] find element with title and save it to variable */

      const articleTitle = article.querySelector(select.article.title).innerHTML;

      console.log(articleTitle);

      /* [DONE] create HTML code based on id and title and save it to variable */

      //const htmlCode = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`;

      const linkHTMLData = { id: articleId, title: articleTitle };
      const htmlCode = templates.articleLink(linkHTMLData);

      console.log(htmlCode);

      /* [DONE] insert new HTML code to "ALL POSTS" column */

      // first method (bad one): titleList.innerHTML += htmlCode;
      // second method:
      titleList.insertAdjacentHTML('beforeend', htmlCode);
      // third method: entireHTML += htmlCode;
      // fourth method (without <li></li> in htmlCode):
      // let li = document.createElement('li');
      // li.innerHTML = htmlCode;
      // titleList.appendChild(li);

    }
    // to third method: titleList.innerHTML = entireHTML;

    /* [DONE] add eventListener for all links in All posts section */

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags() {

    /* [DONE] find all articles */

    const articles = document.querySelectorAll(select.all.articles);

    console.log(articles);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {

      /* [DONE] find tags wrapper */

      const htmlTagsWrapper = article.querySelector(select.article.tags);

      console.log(htmlTagsWrapper);

      /* [DONE] make html variable with empty string */

      let htmlCode = '';

      /* [DONE] get tags from data-tags attribute */

      const articleTagsString = article.getAttribute('data-tags');

      console.log(articleTagsString);

      /* [DONE] split tags into array */

      const articleTagsArray = articleTagsString.split(' ');
      console.log(articleTagsArray);

      /* [DONE] START LOOP: for each tag */

      for (let tag of articleTagsArray) {
        /* [DONE] generate HTML of the link */

        const linkHTMLData = { tag: tag };
        const linkHtml = templates.articleTag(linkHTMLData);

        //const linkHtml = `<li><a href="#tag-${tag}">${tag}</a>&nbsp;&nbsp;</li>`;
        //console.log(linkHtml);

        /* [DONE] add generated code to html variable */

        htmlCode += linkHtml;
        console.log(htmlCode);

        /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */

      htmlTagsWrapper.insertAdjacentHTML('beforeend', htmlCode);

      /* [DONE] END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event) {

    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;
    console.log(clickedElement);

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* [DONE] find all tag links with class active */

    const allActiveTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(allActiveTags);

    /* [DONE] START LOOP: for each active tag link */

    for (let activeTag of allActiveTags) {
      /* remove class active */

      activeTag.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    const linksEqualToClicked = document.querySelectorAll('a[href="' + href + '"]');
    console.log(linksEqualToClicked);

    /* [DONE] START LOOP: for each found tag link */

    for (let links of linksEqualToClicked) {

      /* [DONE] add class active */

      links.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {

    /* [DONE] find all links to tags */

    const allLinksToTag = document.querySelectorAll(select.all.linksTo.tags);
    console.log(allLinksToTag);

    /* [DONE] START LOOP: for each link */

    for (let link of allLinksToTag) {

      /* [DONE] add tagClickHandler as event listener for that link */

      link.addEventListener('click', tagClickHandler);

      /* [DONE] END LOOP: for each link */
    }
  }

  function generateAuthors() {

    /* [DONE] find all articles */

    const articles = document.querySelectorAll(select.all.articles);
    console.log(articles);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {

      /* [DONE] get authors from data-author attribute */

      const authorAtribute = article.getAttribute('data-author');
      console.log(authorAtribute);

      /* [DONE] get author title from article */

      const authorTitle = article.querySelector(select.article.author);
      console.log(authorTitle);

      /* [DONE] generate HTML of the link */

      const linkHtmlData = { author: authorAtribute };
      authorTitle.innerHTML = templates.articleAuthor(linkHtmlData);

      //authorTitle.innerHTML = `<a href="#author-${authorAtribute}">by ${authorAtribute}</a>`;
      //console.log(authorTitle);

      /* [DONE] END LOOP: for every article: */
    }
  }

  function generateAuthorsList() {

    /* [DONE] create a new variable allUthors with an empty object */

    let allAuthors = {};

    /* [DONE] find all articles */

    const everyArticles = document.querySelectorAll(select.all.articles);
    console.log(everyArticles);

    /* [DONE] START LOOP: for every article: */

    for (let article of everyArticles) {

      /* [DONE] get authors from data-author attribute */

      const articleAuthorStr = article.getAttribute('data-author');
      console.log(articleAuthorStr);

      /* [DONE] check if this author is NOT already in allAuthors */

      if (!allAuthors.hasOwnProperty(articleAuthorStr)) {

        /* [DONE] add tag to allAuthors object */

        allAuthors[articleAuthorStr] = 1;

      } else {

        /* if it was add 1 */

        allAuthors[articleAuthorStr]++;
      }
      /* [DONE] END LOOP: for every article: */
    }
    /* [DONE] find list of authors in right column */

    const authorList = document.querySelector(select.listOf.authors);

    /* [DONE] create variable for all links HTML code */

    //let allAuthorsHTML = '';

    const allAuthorsData = { authors: [] };

    /* [DONE] START LOOP: for each author in allAuthors */

    for (let author in allAuthors) {

      /* [DONE] generate code of a link and add it to allAuthorsHTML */

      //allAuthorsHTML += `<li><a href="#author-${author}">${author} (${allAuthors[author]})</a>&nbsp;&nbsp;</li>`;

      allAuthorsData.authors.push({
        author: author,
        count: allAuthors[author]
      });
      /* [DONE] END LOOP: for each author in allAuthors */
    }
    /* [DONE] add html from allAuthorsHTML to authorList */

    authorList.innerHTML = templates.authorCloudLink(allAuthorsData);
  }

  generateAuthors();

  generateAuthorsList();

  function authorClichHandler(event) {

    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;
    console.log(clickedElement);

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "author" and extract author from the "href" constant */

    const author = href.replace('#author-', '');
    console.log(author);

    /* [DONE] find all author links with class active */

    const allActiveAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(allActiveAuthors);

    /* [DONE] START LOOP: for each active author link */

    for (let article of allActiveAuthors) {

      /* [DONE] remove class active */

      article.classList.remove('active');

      /* [DONE] END LOOP: for each active tag link */
    }
    /* [DONE] find all author links with "href" attribute equal to the "href" constant */

    const linksEqualToClicked = document.querySelectorAll('a[href="' + href + '"]');
    console.log(linksEqualToClicked);

    /* [DONE] START LOOP: for each found tag link */

    for (let link of linksEqualToClicked) {

      /* [DONE] add class active */

      link.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks(`[data-author="${author}"]`);
  }

  function addClickListenersToAuthors() {

    /* [DONE] find all links to authors */

    const authorLinks = document.querySelectorAll(select.all.linksTo.authors);
    console.log(authorLinks);

    /* [DONE] START LOOP: for each link */

    for (let link of authorLinks) {

      /* [DONE] add tagClickHandler as event listener for that link */

      link.addEventListener('click', authorClichHandler);

      /* [DONE] END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();

  function calculateTagsParams(tags) {

    const counter = [];

    for (let tag in tags) {
      counter.push(tags[tag]);

    }
    console.log(counter);

    return {
      min: Math.min(...counter),
      max: Math.max(...counter)
    };
  }

  function calculateTagClass(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor((opts.tagSizes.count - 1) * percentage + 1);

    return opts.tagSizes.classPrefix + classNumber;
  }

  function generateTagsList() {

    /* [DONE] create a new variable allTags with an empty object */

    let allTags = {};

    /* [DONE] find all articles */

    const everyArticles = document.querySelectorAll(select.all.articles);
    console.log(everyArticles);

    /* [DONE] START LOOP: for every article: */

    for (let article of everyArticles) {

      /* [DONE] get tags from data-tags attribute */

      const articleTagsStr = article.getAttribute('data-tags');
      console.log(articleTagsStr);

      /* [DONE] split tags into array */

      const articleTagsArr = articleTagsStr.split(' ');
      console.log(articleTagsArr);

      /* [DONE] START LOOP: for each tag */

      for (let tag of articleTagsArr) {

        /* [DONE] check if this tag is NOT already in allTags */

        if (!allTags.hasOwnProperty(tag)) {

          /* [DONE] add tag to allTAgs object */

          allTags[tag] = 1;

        } else {

          /* if it was add 1 */

          allTags[tag]++;
        }
        /* [DONE] END LOOP: for each tag */
      }
      /* [DONE] END LOOP: for every article: */
    }
    /* [DONE] find list of tags in right column */

    const tagList = document.querySelector(select.listOf.tags);

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [DONE] create variable for all links HTML code */

    //let allTagsHTML = '';

    const allTagsData = { tags: [] };

    /* [DONE] START LOOP: for each tag in allTags */
    for (let tag in allTags) {
      /* [DONE] generate code of a link and add it to allTagsHTML */
      //allTagsHTML += `<li><a class="${calculateTagClass(allTags[tag], tagsParams)}" href="#tag-${tag}">${tag}</a>&nbsp;&nbsp;</li>`;

      allTagsData.tags.push({
        tag: tag,
        count: allTags[tag],
        className: calculateTagClass(allTags[tag], tagsParams)
      });
      /* [DONE] END LOOP: for each tag in allTags */
    }
    /* [DONE] add html from allTagsHTML to tagList */

    //tagList.innerHTML = allTagsHTML;

    tagList.innerHTML = templates.tagCloudLink(allTagsData);
    console.log(allTagsData);
  }

  generateTagsList();

  addClickListenersToTags();
}
