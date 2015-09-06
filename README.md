#Bloc-Chat
>A chat app for [Bloc](https://www.bloc.io) made with React/Flux

##Design
###Basic Features
    1. User
        a. Change Username
            * Usernames unique across all rooms
            * Default username on new session
        b. Saved Session
            * Remember chosen username (if still available)
            * Remember active room
    2. Room
        a. List
            * Splash page to introduce interface on new session
            * Join any room by clicking on it
        b. Create
            * Create a new room on the server with a modal form
            * Room creator assumes ownership of the room
            * Ownership passes to other users at the end of a user's session
        d. Members
            * Display active users in a room as well as the owner
    3. Message 
        a. List
            * Every message is associated with a name and timestamp
            * Every message for a room persists on the server
            * Show joining and leaving of users
            * Every user has a default "guest" icon next to their name
        b. Send
            * Send new message to the room associated with current username
            * Messages support Markdown
###Advanced Features
    1. User
        a. Register
            * Creates a persistent user account with associated an email and password
            * Access to additional featureset
        b. Change Username
            * Changed names propagate to all messages associated with registered user
            * Registered users have hidden, unique numeric identifiers so they may use any name
        c. Change Icon
            * Changed icons propagate to all messages associated with registered user
    2. Room
        a. Subscription
            * List of rooms "watched" by a registered user
            * Can unsubscribe at any time
            * Rooms remember subscribed users and will not "empty" unless all users unsubscribe
        b. Members
            * Display active users and whether they're an Owner, a Registered User, or a Temporary User
        c. Create
            * Ownership persists for registered users
            * Ownership passes along subscribed users first
        d. Delete
            * Inactive rooms will self-delete
            * Owners can delete their own room
        e. Log
            * Generate plaintext of room's history
        f. Scramble
            * Owners can force all active registered users to assume unique, randomly generated display names
    3. Message 
        a. Edit
            * Messages of registered users can be edited
        b. Delete
            * Messages of registered users can be deleted
        
##Structure
###Components
###Dispatcher
###Actions
###Constants
###Store

##Gulp Tasks
#####gulp
    * Watches for changes to `index.html` or `src/` and then recopies changed files to `dev`.
    * Includes `live-reload` for browsers with the [extension](http://livereload.com/extensions/).
    * Run `gulp dev` first for fresh development builds.
    
#####gulp dev
    * Builds `src/js` files into `dev/js` as `bundle.js`.
    * Copies `src/styles` into `dev/styles`.
    * Copies `src/images` into `dev/images`.
    * Copies `index.html` into `dev` and replaces `js` script sources with `build.js`.

#####gulp production
    * Builds and Uglifies `src/js` files into `prod/js` as `build.min.js`.
    * Copies `src/styles` into `prod/styles`.
    * Copies `index.html` into `prod` and replaces `js` script sources with `bundle.min.js`.

