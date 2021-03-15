# Intro
This project is meant to be an example of how to implement an hangman game system on the server and on the client. This git repo has a folder for client and server but they are meant to be viewed as two seperate project. They are in the same git repo for convienence sake. Pretend that the client folder has no idea the server folder exists and visa versa. The client folder is a normal create-react-app project. The server folder has the typical MVC code setup.

# .env
Sometimes your code needs to be provided sensitive information. In our server, we need the url to our mongodb database which includes the username and password. This information should not be public but if we include it in our code which is part of a git repo, what will happen when you push it to github? This sensitive information will be viewable by the world. We need to organize our code such that all private information is in one specific file. The rest of the code can then retrieve the information from this file. This file should then not be included in the git repo. How do you tell git to ignore certain files? What happens when someone clones your repo and needs that file?


# Setup
* fork and clone
* do a `npm i` in each folder seperately (/client and /server)
* in the /client folder do a npm start
* in the /server folder do a nodemon server.js
* create an .env file in /server and put information like PORT and DB_URL
* create an .env file in /client and put information like REACT_APP_API_END_POINT

# Database
* Make sure you are running mongoDB or using Mlab
* Make sure you have a database setup called “games" or similiar
* put your database url in the env file

# Client
* Create a component called Login
* Use any email for an example
* Make sure the button says Sign In 
* In handleSubmit, call onSubmit function
* in App.js, have two main components login and game 
* If user is not sign-in it will go to login component first after entering a valid email go to game component
* The game component has different child components like keyboard, hangman, newgamebutton and so on.

### Build
* Make sure you have everything working locally as you intend
* Do a `npm run build`
* Copy the contents of /client/build into /server/public. Don't copy the actual /build folder into the /server/public folder

# Server
* Create 4 routes on the server
* It is to getGameStates, getGameStates, setupNewGame, updategame



### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
