from flask_restful import Resource
from database.models import products
from flask import jsonify, request, Response



class ProductApi(Resource):
    def get(self):
        try:
            data = products.objects.all()
            return jsonify(data)
        except Exception as e:
            return {'error': 'error' + str(e)}, 400

    def post(self):
        try:
            # Extract data from the request JSON payload
            data = request.get_json()
            title = data.get('title')
            description = data.get('description')
            price = data.get('price')
            discount_percentage = data.get('discountPercentage')
            rating = data.get('rating')
            stock = data.get('stock')
            brand = data.get('brand')
            category = data.get('category')
            thumbnail = data.get('thumbnail')
            _id = data.get('_id')

            new_product = products(

                title=title,
                description=description,
                price=price,
                discountPercentage=discount_percentage,
                rating=rating,
                stock=stock,
                brand=brand,
                category=category,
                thumbnail=thumbnail
                # Add more fields as needed
            ).save()



            # Return a response indicating the successful creation of the product
            return {'message': 'Product created successfully', 'product_id': str(new_product.id)}, 201

        except Exception as e:
            # Handle any exception that occurred during product creation
            return {'error': 'Failed to create product', 'message': str(e)}, 500

 # important give _id for finding the object not id
    def put(self):
        try:
            print("in put")
            # Retrieve the product based on the provided product_id
            data = request.get_json()

            id = data.get("id")
            print("id", id)
            product = products.objects.get(id=id)
            print(product.title)



            # # # Update product fields based on the data
            if data.get('title'):
                product.title = data.get('title')

            if data.get("description"):
                product.description = data.get('description')
            if data.get("price"):
                product.price = data.get('price')
            if data.get("discountPercentage"):
                product.discountPercentage = data.get('discountPercentage')
            if data.get("rating"):
                product.rating = data.get('rating')
            if data.get("stock"):
                product.stock = data.get('stock')
            if data.get("brand"):
                product.brand = data.get('brand')
            if data.get("category"):
                product.category = data.get('category')
            if data.get("thumbnail"):
                product.thumbnail = data.get('thumbnail')

            product.save()

            return {'message': 'Product updated successfully'}, 200
        except product.DoesNotExist:
            return {'error': 'Product not found'}, 404
        except Exception as e:
            return {'error': 'Failed to update product', 'message': str(e)}, 500

    def delete(self):
        try:
            # Retrieve the product based on the provided product_id
            data = request.get_json()
            product_id = data.get('id')
            product = products.objects.get(id=product_id)
            print(product.title)

            # # Delete the product from the database
            product.delete()

            return {'message': 'Product deleted successfully'}, 200
        except product.DoesNotExist:
            return {'error': 'Product not found'}, 404
        except Exception as e:
            return {'error': 'Failed to delete product', 'message': str(e)}, 500


def initializeRoutes(api):
    api.add_resource(ProductApi, '/products')





