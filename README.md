# Navigation using React

This project is a simple page to understand and exercise the different types of routes to set the website navigation.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses the library [React Router](https://reactrouter.com/).

# Images
![Basic URL to Home](image.png)
![URL with a number parameter](image-5.png)
![URL with a text parameter](image-6.png)
![Basic route](image-3.png)
![Not found URL](image-4.png)

# Technologies
React, Html, CSS

# Learnings
- library react-router-dom
- CSS: 
    - unit vh (view height) - you can define a relative high, by the visible screen area... 80vh = 80% of the visible area
    - list-style: none; - to remove the list bullets 
    - text-decoration: none; - to remove the link underline
    - flex: 1; - to expand the element and the click area - important in the menu, to the user doesn't have to click exactly on the name
    - .Menu li a:hover {background: #00000030; } - to change the hover color, and the last 2 numbers are the transparency
- To pass parameters it's necessary the hook [useParams](https://reactrouter.com/en/main/hooks/use-params)
`import {useParams} from 'react-router-dom'`
and also:
```
<Link to="/param/123">Param #01</Link> ---> to set the path

<Route path="/param/:id" element={<Param/>}/> --> ":id" means a variable, without : it would be a literal value like: <Route path="/about" element={<About/>}/>

const { id } = useParams() --> to get id value

<p>Value: {id} </p> ---> to show the value
```
- To set unmapped pages to a specific path:
`<Route path="*" element={<NotFound/>}/>`


# To execute
Run `npm start`










<!-- # Getting Started with Create React App

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
