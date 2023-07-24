from flask import Flask, render_template, request, redirect, jsonify
from flask_restful import Api, Resource
from flask_mongoengine import MongoEngine
from database.db import dbInitialize
from resources.resource import initializeRoutes
from flask_cors import CORS

# from resources.routes import initializeRoutes
app = Flask(__name__)
CORS(app)

app.config['MONGODB_SETTINGS'] = {
    'db': 'ecommerce',
    'host': 'localhost',
    'port': 27017
}

api = Api(app)
dbInitialize(app)
initializeRoutes(api)




if __name__ == '__main__':
    app.run()
