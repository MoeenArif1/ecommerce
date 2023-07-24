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

class users(db.Document):
    u_id = db.IntField(primary_key=True)
    firstName = db.StringField()
    lastName = db.StringField()
    maidenName = db.StringField()
    age = db.IntField()
    gender = db.StringField()
    email = db.StringField()
    phone = db.IntField()
    username = db.StringField(unique=True)
    password = db.StringField()
    birthDate = db.StringField()
    image = db.URLField()
    bloodGroup = db.StringField()
    height = db.IntField()
    weight = db.FloatField()
    eyeColor = db.StringField()
    hair = db.StringField()
    domain = db.StringField()
    ip = db.StringField()
    address = db.StringField()
    macAddress = db.StringField()
    university = db.StringField()
    bank = db.StringField()
    company = db.StringField()
    userAgent = db.StringField()  # Add the 'userAgent' field
    ssn = db.StringField()  # Add the 'ssn' field
    ein = db.StringField()  # Add the 'ein' field



class carts(db.Document):
    c_id = db.IntField()
    products = db.ListField()
    total = db.IntField()
    discountedTotal = db.IntField()
    totalProducts = db.IntField()
    userId = db.IntField()
    totalQuantity = db.IntField()


class orders(db.Document):
    userId = db.IntField()
    username = db.StringField()
    phone = db.StringField()
    email = db.StringField()
    shippingAddress = db.StringField()
    cart  = db.ListField()
    total = db.IntField()
    totalProducts = db.IntField()