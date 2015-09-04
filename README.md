#Bloc-Chat
>A chat app for [Bloc](https://www.bloc.io) made with React/Flux

##Design
###User Stories
    1. I want to change my username
        a. Usernames should be unique
        b. I want to be given a default username on entry
        c. The change should reflect all my previous messages
        
    2. I want to see a list of rooms
        a. I want to see a room by clicking on it
        b. The server should remember the room I was last on
        c. I want to see a splash page introducing the interface if I have no rooms (optional)
    
    3. I want to create chat rooms
        a. I want to create using a modal and own the room
        b. I want to destroy a room if I'm its owner
        c. Rooms should destroy themselves if empty and inactive (advanced)
    
    4. I want to see all the messages of the current rooms
        a. Messages should persist on the server
        b. Messages should include timestamps
        c. I want to go to the last unread message if I join a room (advanced)
    
    5. I want to send a message associated with my name to the current room
        a. I want my messages to be Markdown compatible (advanced)
        b. I want to edit my messages (advanced)
        c. I want to delete my messages (advanced)
        
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

