# Getting Started with React Redux
The point of Redux, is to avoind passing parameters (props) across a lot of react components and functions, mainly when working with variables that is of the system's concern - that the community call as the application states or variables of global meaning from specific node->react applications.


### How do we implement this? 
Lets imagine that someone say that will help you with holding the values in the memory and public accessible, so you don't need to worry about this work.
But this person proposes you a condition to help you with that: you have to transport the values to they, inside objects "nested" into another objects, in a way that they will be able to track the whole trajectory of the data until achieve on they, and you have to build and provide all this.

Lets understand what they want exactly: 
* Data integrity
* Data tracking
* Not changing directly the states (variable values) - make a copy changed of the original object (immutability)
* Let it as semantic as possible accordlying to React resource names.

Then with got this folder structure: 
```bash
redux-project-example
└── src/
    ├── store/
    │   ├── index.js
    │   ├── actions/
    │   ├── types/
    │   └── reducers/
    │       └── index.js
    ├── app.js
    ├── index.js
    └── components/
```

### Understanding the main folders of the store (that essentialy builds the Redux behaviour)
  actions - keeps all named action files that exports one or more functions whose inherit the 'types' and just maps (transform) the parameters into some payload that respect the contract from reducers, requesting some state changing.
  
  types - keeps the functions types (can be interpreted as interfaces of some application that defines the class or module contract, that every action should inherit the related type that represents in few words what each action do.
  
  reducers - are the actors of this use case, being the files within it that receives the actions as parameters and accordingly to them, effects the actions to make changes in the states inside store.



### The running flow might be like this: 
  
  1 - index.js - import the redux provider and apply to app.js.
  
  2 - app.js - inheirts the redux provider and apply to its children objects such as components.
  
  3 - components - imports the actions and stores (current states) and inherit app.js content. 
    depending on the front-end object needs on rendering process, call the useDispatch() method passing the action as parameter.
    the action might receive parameters as well, but the state chaging related values (the chaging request).

  4 - actions - receives the components request parameters and prepare the payload (request to reducer)
  
  5 - reducer - receive the action object with the payload within it, by dispatch.
            then evaluates the state changing request and perform the changings locally waiting to be attached to store.

  6 - store - receives the reducer object attached by redux under hoods methods, 
          then evaluates the reducer state and make the changes permanently in the running memory.

  7 - components - re-renders and reads the current store state, populating dinamically the front-end with and based on store state values.
            
  
  
  



---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
