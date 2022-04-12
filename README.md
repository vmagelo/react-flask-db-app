## Flask, React, Postgres

This is how to construct this project from scratch. If you are cloning everything is here that you need.
### Step 1: Create project structure

Create frontend (React)

```dos
$ npx create-react-app react-flask-db-app
$ cd react-flask-db-app
```

Create backend (Flask)

```dos
$ mdir api  (backend)
$ cd api
$ python3 -m venv .venv
$ .venv\Scripts\activate
$ pip install -r requirements.txt
```

Create [app.py](./api/app.py) and [.flaskenv](./api/.flaskenv) files in the `api` folder.

Run flask to make sure everything is working in the `api` folder with `flask run`.

### Step 2: Connect up React to flask

In the root project directory, `package.json` is the configuration for the frontend. Edit package.json to add to bottom line to proxy calls to Flask.

```json
"proxy": "http://localhost:5000"`
```
and to help out under scripts

```json
"start-api": "cd api && .venv/Scripts/flask run --no-debugger",
```

### Step 3: Edit .gitignore and prepare repo

The `npx` command created and React project as a repo. Add ignore for flask stuff by edit .gitignore and add

```yml
.venv
__pycache__
```
Do check in:

```dos
$ git status
$ git add .gitignore package.json api
$ git commit -m "flask backend"
```

### Step 4: Code frontend and test

Edit [App.js](./src/App.js) to add code to call Flask api. Then,

```dos
$ yarn start
```

This opens localhost:3000 as frontend. Next,

```dos
$ yarn start-api
```

This uses custom script command in `package.json` that was created and opens up Flask backend. Go to `https://localhost:3000/<api-name>`.



## Original Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### #`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
