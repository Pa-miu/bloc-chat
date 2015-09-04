#Bloc-chat
>with React/Flux

##Design
##Structure
###Components
###Dispatcher
###Actions
###Constants
###Store

##Gulp Tasks
#####gulp
Bundles `src/` files into `dev/` as `src/bundle.js`.
Copies `index.html` into `dev/` and replaces script sources with `bundle.js`.
Includes `live-reload` for browsers with the [extension](http://livereload.com/extensions/).

#####gulp production
Bundles and Uglifies `src/` files into `prod/` as `bundle.min.js`.
Copies `index.html` into `dev/` and replaces script sources with `bundle.min.js`.

