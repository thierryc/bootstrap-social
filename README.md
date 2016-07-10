###Note

This is a fork from bootstrap-social. (WIP)

[bootstrap-social](http://lipis.github.io/bootstrap-social)

This version uses brand-color project as input for the color buttons

[brand-color](https://github.com/reimertz/brand-colors/)


Social Buttons for Bootstrap
============================
[![npm version](https://badge.fury.io/js/bootstrap-social.svg)](https://badge.fury.io/js/bootstrap-social)
[![Bower version](https://badge.fury.io/bo/bootstrap-social.svg)](https://badge.fury.io/bo/bootstrap-social)

Social Buttons made in pure CSS based on
[Bootstrap](http://twbs.github.io/bootstrap/) and
[Font Awesome](http://fortawesome.github.io/Font-Awesome/)!

[Check the live demo!](http://lipis.github.io/bootstrap-social)


Build
-----

This version is in progress.

```bash

npm install
gulp sass

```

To build your css file in css folder.

LESS build is not yet implemented.

Installation
------------

Include the `bootstrap-social.css`, `bootstrap-social.sass` or `bootstrap-social.less` in your project, or
install it through [Bower](http://bower.io/):

    bower install bootstrap-social

Available classes
-----------------
 - `btn-adn`
 - `btn-bitbucket`
 - `btn-dropbox`
 - `btn-facebook`
 - `btn-flickr`
 - `btn-foursquare`
 - `btn-github`
 - `btn-google`
 - `btn-instagram`
 - `btn-linkedin`
 - `btn-microsoft`
 - `btn-odnoklassniki`
 - `btn-openid`
 - `btn-pinterest`
 - `btn-reddit`
 - `btn-soundcloud`
 - `btn-tumblr`
 - `btn-twitter`
 - `btn-vimeo`
 - `btn-vk`
 - `btn-yahoo`
 - `btn-youtube`

How to add a new button
-----------------------

Examples: YouTube into your scss file.

```scss
.btn-youtube       { @include btn-social($bc-youtube); } // youtube-play

```

###HTML

```html
<a class="btn btn-block btn-social btn-youtube">
  <span class="fa fa-youtube"></span>
  Sign in with Twitter
</a>

<a class="btn btn-block btn-social btn-youtube">
  <span class="fa fa-youtube-play"></span>
  Sign in with Twitter
</a>

```

Examples
--------

```html
<a class="btn btn-block btn-social btn-twitter">
  <span class="fa fa-twitter"></span>
  Sign in with Twitter
</a>

<a class="btn btn-social-icon btn-twitter">
  <span class="fa fa-twitter"></span>
</a>
```

Pull Requests
-------------
If you are about to create a new **Pull Request** for adding a new button or
fixing something, don't update the minified `bootstrap-social.css` file. It
will be generated automatically after a successful merge.
