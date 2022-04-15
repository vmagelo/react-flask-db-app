## React, Flask, Postgres - Sample App

### What does this do?

The idea is that this app should function with restaurant reviews as is used in [Deploy a Python (Django or Flask) web app with PostgreSQL in Azure](https://docs.microsoft.com/azure/app-service/tutorial-python-postgresql-app), but instead of rendering templates in Django or Flask, use [React](https://reactjs.org/) as the frontend. This means built-in templating engines are not used in Python (Django or Flask), instead Python is used only as backend to return JSON. The React frontend receives JSON by calling the backend. For example, the JSON could be a list of restaurants or reviews. Python backend gets data from database.

The React frontend should look and act like an single-page application.

To test locally, start Flask, which will run on localhost:5000 and start React, which will run on localhost:3000. The React package.json configuration proxies request to Flask. Make sure to start Flask in the `\api` folder and in the virtual environment.

Example screenshots:

![Flask backend returning restaurant list](/public/screenshot%201.png)
![React frontend showing restaurant list](/public/screenshot%202.png)

### From scratch step 1: Create project structure

This is how to construct this project from scratch. If you are cloning this, everything is here that you need and you don't need to follow these steps.

Create frontend (React)

```dos
$ npx create-react-app react-flask-db-app
$ cd react-flask-db-app
```

Create backend (Flask). In this sample app, the backend will be in a folder in the main React project for convenience.

```dos
$ mdir api  (backend)
$ cd api
$ python3 -m venv .venv
$ .venv\Scripts\activate
$ pip install -r requirements.txt
```

Create [app.py](./api/app.py) and [.flaskenv](./api/.flaskenv) files in the `api` folder.

Run flask to make sure everything is working in the `api` folder with `flask run`.

### From scratch step 2: Connect up React to flask

In the root project directory, `package.json` is the configuration for the frontend. Edit package.json to add to bottom line to proxy calls to Flask.

```json
"proxy": "http://localhost:5000"
```
and to help out, under scripts add:

```json
"start-api": "cd api && .venv/Scripts/flask run --no-debugger"
```

### From scratch step 3: Edit .gitignore and prepare repo

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

### From scratch step 4: Code frontend and test

Add modules that we'll need:

```dos
npm install --save react-bootstrap
npm install --save react-helmet
npm install --save bootstrap
```

Edit [App.js](./src/App.js) to add code to call Flask api. Then,

```dos
$ yarn start
```

This opens localhost:3000 as frontend. Next,

```dos
$ yarn start-api
--or--
$ cd api
$ flask run
```

This uses custom script command in `package.json` that was created and opens up Flask backend. Go to `https://localhost:3000/<api-name>`.

## Conversion tips

We'll make uses of [dataclasses](https://docs.python.org/3/library/dataclasses.html) decorator on `restaurant` and `review` tables. This allows use to go from object (list) to JSON. It requires fields that annotate the types. For example: `name: str`. We did not need these before in just Python (Django or Flask) + database (PostgreSQL) version.

In Python + DB version, we had a route like this and definition like this:

```python
@app.route('/', methods=['GET'])
def index():
    from models import Restaurant
    restaurants = Restaurant.query.all()    
    return render_template('index.html', restaurants=restaurants)
```

These definitions don't use built-in renders and instead return JSON:

```python
@app.route('/api/restaurants', methods=['GET'])
def get_restaurants():
    from models import Restaurant
    restaurants = Restaurant.query.all()  
    return {"restaurants": restaurants}
```

We use the structure of `api` (Flask or Django) folder inside root React folder. This is just for convenience and can be broken apart.
