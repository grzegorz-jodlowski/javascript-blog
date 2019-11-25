<p align="center">
<a href="https://grzegorz-jodlowski.github.io/javascript-blog/"><img src="logo5.jpg" title="logo" alt="title of blog: 'my blog'"></a>
</p>

# <p align="center">📖 JavaScript Blog</p>
<p align="center">Project for JavaScript learning</p>

</br>

## Table of Contents

- [What's this project about?](#about)
- [Technologies used](#technologies)
- [What I learned?](#what)
- [Interesting code snippet](#interesting)
- [GitHub Pages](#gitHub)

</br>

## <a name="about"></a>What's this project about?

Simple blog for displaying articles, table of contents and tag cloud. It allows to filter content according to tags and authors.

</br>

## <a name="technologies"></a>Technologies used
- HTML
- CSS
- SCSS
- GIT
- npm
- JavaScript

</br>

## <a name="what"></a>What I learned?
- good practices for creating variables and determining scopes,
- use ES6 standards,
- suggest changes in JavaScript language (TC39 process),
- create a tag cloud based on the number of tag occurrences in articles,
- use "this" keyword in various contexts,
- block the default event action by event.preventDefault();
- debug code in VS code (using <a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome">Debugger for Chrome</a> plugin),
- use arrays and objects in more advanced way,
- configure, install and use tools for automatic code checking (ex. <a href="https://eslint.org/">ESLint</a> for JS, <a href="https://stylelint.io/">StyleLint</a> for SCSS),
- use tool for rapid prototyping code online (<a href="https://codepen.io/">CodePen</a>),
- separate code written in different languages into separate files,
- use HTML templates (ex. <a href="https://handlebarsjs.com/">Handlebars</a>),

</br>

## <a name="interesting"></a>Interesting code snippet (for me of course 😉)
- loops in Handlebars templates

```html
  <script id="template-author-cloud-link" type="text/x-handlebars-template">
    {{#each authors}}
      <li><a href="#author-{{ author }}">{{ author }} ({{ count }})</a>&nbsp;&nbsp;</li>
    {{/each}}
  </script>
```

- ESLint config file

```json
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {"allowTemplateLiterals": true}
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "off"
        ]
    }
}
```

</br>

## <a name="gitHub"></a>GitHub Pages
<a href="https://grzegorz-jodlowski.github.io/javascript-blog/">JavaScript Blog</a>


