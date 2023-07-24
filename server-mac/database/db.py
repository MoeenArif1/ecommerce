

from flask_mongoengine import MongoEngine

db = MongoEngine()
def dbInitialize(app):
    db.init_app(app)