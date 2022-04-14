from dataclasses import dataclass
from datetime import datetime
from app import db
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, validates

# declarative base class
Base = declarative_base()

@dataclass
class Restaurant(db.Model):
    __tablename__ = 'restaurant'
    id: str
    name: str
    street_address: str
    description: str
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    street_address = Column(String(50))
    description = Column(String(250))
    def __str__(self):
        return self.name

@dataclass
class Review(db.Model):
    __tablename__ = 'review'
    id: int
    restaurant: int
    user_name: str
    rating: int
    review_text: str
    review_date: datetime

    id = Column(Integer, primary_key=True)
    restaurant = Column(Integer, ForeignKey('restaurant.id', ondelete="CASCADE"))
    user_name = Column(String(30))
    rating = Column(Integer)
    review_text = Column(String(500))
    review_date = Column(DateTime)

    @validates('rating')
    def validate_rating(self, key, value):
        assert value is None or (1 <= value <= 5)
        return value

    def __str__(self):
        return self.restaurant.name + " (" + self.review_date.strftime("%x") +")"