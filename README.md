# Wordpress twenty fourteen theme built with Grunt and Sass

To quickly deploy new instances of Wordpress, it would be handy to generate and test copy's of the Wordpress Twenty Fourteen theme (2014) with Grunt. The original theme comes with quite a lot of CSS. To quickly change the basic colors Sass comes in handy. To develop, test and deploy our theme we need Grunt. If you know Grunt this should be an easy ride. If you don't, I'm sorry, but you have to do some learning before using this repository.

## Dependencies

- Node and NPM
- Ruby
- Sass
- Grunt-cli

## How to

- Edit the basic colors in style.scss
- Run `grunt watch` while developing (with live reload)
- Run `grunt` for copying everything to a new theme folder `jemanitori-theme`. This is the theme should you include in your Wordpress instance.
- Change the names in `package.json`, `Gruntfile.js` and `style.scss` to the names you like.

## TO DO

- Clean up the huge amounts of Wordpress CSS
- CSSLint
- Build and test JS
- Test all pages with grunt-photobox
- Deploy over FTP
- Other cool stuff (?)