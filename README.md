# Vue, Typescript, SASS and Parcel template

An opinionated template based on the files I've set up previously.

It uses

- [Parcel](https://parceljs.org/): Asset bundler
- [Vue](https://vuejs.org): front end framework
- [TypeScript](https://www.typescriptlang.org): development language
- [SASS](https://sass-lang.com/): CSS preprocessor

## How to use

1. [Install parcel](https://parceljs.org/getting_started.html) with `npm install -g parcel-bundler`
1. Go to github.com/andrewstanton94/vue-ts-sass-parcel
1. Create repo from template
1. Clone it
1. Run `npm init`
1. Add these sections to the `package.json` file
1. Replace this file with a relevant README

```javascript
"scripts": {
	"start": "parcel src/index.html"
},
"dependencies": {
	"bulma": "^0.8.0",
	"vue": "^2.6.10",
	"vue-hot-reload-api": "^2.3.4"
},
"devDependencies": {
	"@vue/component-compiler-utils": "^3.0.2",
	"eslint": "^6.7.2",
	"eslint-plugin-vue": "^6.0.1",
	"parcel-bundler": "^1.12.4",
	"sass": "^1.23.7",
	"typescript": "^3.7.3",
	"vue-template-compiler": "^2.6.10"
}
```
