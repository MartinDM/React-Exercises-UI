# Exercise App

__This is a demo app which uses an endpoint of exercises to create a user experience around them.__

**[App demo on Surge.sh 🚀 ](https://gymshark-fitness-app.surge.sh)**

![App Preview](https://github.com/MartinDM/exercises/blob/main/preview-1.png?raw=true "App preview")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project uses SASS files for each component, with a global stylesheet for general layout and Material UI library overrides.

- Borrows from GS brand identity/colours
- Exercise details show in a modal
- Gender of the model photos for each exercise can be toggled

## NFRs
- The SASS convention is BEM for maintainability
- The app shows a 'loading' state while fetching the data
- If no exercises are returned, a helpful onward journey into the 'Central' section of the site is shown
- Fully-responsive
- Components used can be developed in isolaton in the Storybook UI (See below)

## Available Scripts

In the project directory, you can run:

### `npm run start`

To sart development locally

### `npm run publish`

This will build the app and publish it on Surge for demo purposes at the url named in the CNAME file. Hit enter on the command line to confirm source directory.
The app is then available at `http://gymshark-fitness-app.surge.sh/`

### `npm run storybook`

This will open he React UI development environment to view each component in isolation and modify its state and content.
Access the storybook at [http://localhost:6006/](http://localhost:6006/); 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
