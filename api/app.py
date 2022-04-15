import os
import time
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)

# WEBSITE_HOSTNAME exists only in production environment
if not 'WEBSITE_HOSTNAME' in os.environ:
   # local development, where we'll use environment variables
   print("Loading config.development and environment variables from .env file.")
   app.config.from_object('azureproject.development')
else:
   # production
   print("Loading config.production.")
   app.config.from_object('azureproject.production')

app.config.update(
    SQLALCHEMY_DATABASE_URI=app.config.get('DATABASE_URI'),
    SQLALCHEMY_TRACK_MODIFICATIONS=False,
)

# Initialize the database connection
db = SQLAlchemy(app)

# Enable Flask-Migrate commands "flask db init/migrate/upgrade" to work
migrate = Migrate(app, db)

# Create databases, if databases exists doesn't issue create
# For schema changes, run "flask db migrate"
from models import Restaurant, Review
db.create_all()
db.session.commit()

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/restaurants')
def get_restaurants():
    from models import Restaurant
    print('Request for restaurants received')
    restaurants = Restaurant.query.all()  
    return {'restaurants' : restaurants}

@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    from models import Review    
    print('Request for reviews received')
    reviews = Review.query.all()
    return {'reviews': reviews}
