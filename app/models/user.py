# coding = utf-8
from app.extensions import db


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password_hash = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(64), nullable=False, unique=True)
    gender = db.Column(db.Boolean, default=False)
    status = db.Column(db.Boolean, default=False)
    info = db.Column(db.String(255), nullable=True)
    uid = db.Column(db.String(50), nullable=True, unique=True)
    phone = db.Column(db.String(25), nullable=True, unique=True)

    def __repr__(self):
        return self.username

    pass
