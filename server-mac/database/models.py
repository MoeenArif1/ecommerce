from database.db import db
class products(db.Document):
    brand = db.StringField()
    category = db.StringField()
    description = db.StringField()
    discountPercentage = db.FloatField()
    images = db.ListField()
    price = db.IntField()
    rating = db.FloatField()
    stock = db.IntField()
    thumbnail = db.StringField()
    # validation=lambda value: value.startswith('http://') or value.startswith('https://')
    title = db.StringField()
    p_id = db.IntField()

