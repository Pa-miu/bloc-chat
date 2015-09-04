#Bloc-Chat
>A chat app for [Bloc](https://www.bloc.io) made with React/Flux

##Design
##Structure
###Components
###Dispatcher
###Actions
###Constants
###Store

##Gulp Tasks
#####gulp
   * Builds `src/js` files into `dev/js` as `bundle.js`.
   
   * Copies `index.html` into `dev` and replaces script sources with `bundle.js`.
   
   * Includes `live-reload` for browsers with the [extension](http://livereload.com/extensions/).

#####gulp production
   * Builds and Uglifies `src/js` files into `prod/js` as `bundle.min.js`.
   
   * Copies `index.html` into `prod` and replaces script sources with `bundle.min.js`.

