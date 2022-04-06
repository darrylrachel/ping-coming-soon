# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](/images/screenshots/Screen%20Shot%202022-04-06%20at%209.47.45%20AM.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Javascript
- Mobile-first workflow


### What I learned

I learned how to validate an input field and show error messages using javascript

```js
if (email.match(pattern)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Your Email Address is Valid.";
		text.style.color = "hsl(223, 87%, 63%)";
	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Please provide a valid email address";
		text.style.fontSize = "12px";
		text.style.color = "hsl(354, 100%, 66%)";
	}
}
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@darrylrachel](https://www.frontendmentor.io/profile/darrylrachel)
- Twitter - [@_darrylcodes](https://www.twitter.com/_darrylcodes)