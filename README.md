This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Environment

The following environment variables must be setup:

- `AWS_ACCESS_KEY_ID`: The access key for digital ocean spaces storage.

- `AWS_SECRET_ACCESS_KEY`: The secret for digital ocean spaces.

Run the following:

```
npm install
```

## Deploying App

The following environment variables must be defined:

- `CREDENTIALS_SPACES_BUCKET`: The bucket name for the digital ocean spaces
  storage containing the credentials.

- `CREDENTIALS_SPACES_REGION`: The region name for the digital ocean spaces
  storage containing the credentials.

- `DOCKER_REGISTRY_USERNAME`: The username for the dockerhub registry.

- `DOCKER_REGISTRY_PASSWORD`: The password for the docker registry.

Do the following:

- Increment the version number in package.json
- Commit any changes
- Run the following command

```
npm run tag-version
npm run build-docker
npm run deploy-docker
```

This will deploy a new docker image to docker hub. To deploy the final
kubernetes service, you will need access to the Deployment Repo. Follow
instructions in that repo for deploying the newest version of this app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
