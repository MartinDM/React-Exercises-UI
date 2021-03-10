# Exercise App

__This is a demo app which uses an endpoint of exercises to create a user experience around them.__

**[🚀 App demo on Surge.sh  ↗️ ](https://martin-fitness-app.surge.sh)**

**[🚀 Storybook of components at /storybook-static ↗️  ](https://martin-fitness-app.surge.sh/storybook-static)**

![App Preview](https://github.com/MartinDM/exercises/blob/main/preview-1.png?raw=true "App preview")

ℹ The project uses SASS files for each component, with a global stylesheet for general layout and Material UI library overrides.

- Borrows from GS brand identity/colours
- Exercise details show in a modal
- Gender of the model photos for each exercise can be toggled
- **⚠ NOTE: 'Pull up' female image is incorrectly returned as male from the API as seen in `./data/data.json`**

## NFRs
- Each component has tests - using `npm un test` (Fairly simple ones but would like to extend)
- The SASS convention is BEM for maintainability
- The app shows a 'loading' state while fetching the data
- If no exercises are returned, a helpful onward journey into the 'Central' section of the site is shown
- Fully-responsive
- Components used can be developed in isolation in the Storybook UI (See below)

## Possible enhancements
- More tests for different states
- Address console warning relating to `useEffect` dependency array 
- Cache *smaller* versions of the images in a cloud service
- Filter features, such as by muscle group
- Lazy loading as the user scrolls
- UI: Fade out images on toggle
- Store toggle state/filter in local storage for return visits
- Create script for publishing Storybook
## Available Scripts
In the project directory, you can run:
### `npm run start` or `yarn start`
To start development locally
### `npm run publish`
Run after `npm run build` to create a production-optimised bundle.
This will publish to Surge.sh for demo purposes at the url named in the CNAME file. Hit enter on the command line to confirm source directory.
The app is then available at `http://martin-fitness-app.surge.sh/`

ℹ If you copy the **storybook** output to `./build` this will also be uploaded for online preview at the respective url.

### `npm run storybook`
This will open a UI development environment to view each component in isolation and modify its state and content.
Access the storybook at [http://localhost:6006/](http://localhost:6006/).

### Analyzing the Bundle Size
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)