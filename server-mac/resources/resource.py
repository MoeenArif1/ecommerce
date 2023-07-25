import random
import string

from flask_restful import Resource
from database.models import products, users, carts, orders
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
            p_id = data.get('p_id')

            new_product = products(

                title=title,
                description=description,
                price=price,
                discountPercentage=discount_percentage,
                rating=rating,
                stock=stock,
                brand=brand,
                category=category,
                thumbnail=thumbnail,
                p_id=p_id
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

            id = data.get("p_id")
            print("id", id)
            product = products.objects.get(p_id=id)
            print(product.title)



            # # # Update product fields based on the data
            if data.get('title'):
                product.title = data.get('title')

            if data.get("description") and data.get("description"!= ''):
                product.description = data.get('description')
            if data.get("price"):
                product.price = data.get('price')
            if data.get("discountPercentage") and data.get("discountPercentage") != '' :
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
            product_id = data.get('p_id')
            product = products.objects.get(p_id=product_id)
            print(product.title)

            # # Delete the product from the database
            product.delete()

            return {'message': 'Product deleted successfully'}, 200
        except product.DoesNotExist:
            return {'error': 'Product not found'}, 404
        except Exception as e:
            return {'error': 'Failed to delete product', 'message': str(e)}, 500


class UserApi(Resource):
    def get(self):
        try:

            users_all = users.objects.all()

            return jsonify(users_all)

        except Exception as e:
            return {'error': 'Failed to get users', 'message': str(e)}, 500


    def post(self):
        try:
            # Extract data from the request JSON payload
            data = request.get_json()
            username = data.get('username')
            password = data.get('password')
            gender = data.get('gender')
            phone = data.get('phone')
            address = data.get('address')
            firstName = data.get('firstName')
            lastName  = data.get('lastName')
            email = data.get('email')
            print(firstName + " " + lastName)

            u_id = data.get('u_id')
            try:
                exists = users.objects.get(username=username)
                return {'error': 'User with username: ' + username + ' Already Exist ',
                        'message': 'User with username ' + username + ' Already Exist '}, 501
            except Exception as e:
                user = users(
                    username= username,
                    password= password,
                    gender= gender,
                    phone= phone,
                    address= address,
                    firstName=firstName,
                    lastName= lastName,
                    email= email,
                    u_id= u_id).save()

                # Return a response indicating the successful creation of the product
                return {'message': 'user created SuccessFully', 'id': user.u_id}, 201

        except Exception as e:
            # Handle any exception that occurred during product creation
            return {'error': 'Failed to create user', 'message': str(e)}, 500


class LoginApi(Resource):
    def post(self):
        try:
            data = request.get_json()
            username = data.get('username')
            password = data.get('password')
            print(username +"  " + password)
            user = users.objects.get(username= username, password=password)
            print(user)
            # token generation
            letters = string.ascii_letters + string.digits
            token = ''.join(random.choice(letters) for _ in range(32))

            return_object = {
                "id": user.u_id,
                "username": user.username,
                "email": user.email,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "gender": user.gender,
                "image": "",
                "phone": user.phone,
                "address": user.address,
                "token": token
            }
            return jsonify(return_object)

        except Exception as e:
            return {'error': 'invalid Credentials', 'message': str(e)}, 500


class CartAddApi(Resource):
    def post(self):
        try:
            data = request.get_json()
            c_id = data.get('c_id')
            userId = data.get('userId')
            products = data.get('products')

            try:
                cart = carts.objects.get(c_id= c_id)
                return {'message': 'Cart already exist', 'error': 'cart already exist'}, 400
            except Exception as e:
                cart = carts(
                    c_id=c_id,
                    products=products,
                    userId=userId,
                    total=0,
                    discountedTotal= 0,
                    totalProducts=0,
                    totalQuantity=0
                ).save()
                return jsonify(cart)

        except Exception as e:
            return {'message': 'Cart Cannot be Created', 'error': str(e)}, 500



class CartApi(Resource):
    def post(self):
        try:
            data = request.get_json()
            userId = data['userId']

            cart = carts.objects.get(userId=userId)

            return jsonify(cart)
        except Exception as e:
            return {'message': "cart not found ", 'error': str(e)}, 400

    def put(self):
        try:
            data = request.get_json()
            user_id = data.get('userId')
            products = data.get('products')
            print(products)
            print(jsonify(products))
            print(products[0])
            # Check if the required fields are present in the JSON data
            if not user_id or not products:
                return {'error': 'Missing userId or product data'}, 400

            if len(products) == 1:

                # Add the product to the user's cart
                cart = carts.objects.get(userId= user_id)
                if products[0] not in cart.products:
                    print("not in products")
                    cart.products.append(products[0])
                    cart.total = cart.total + products[0].get("price")
                    # update to discount later
                    cart.discountedTotal = cart.discountedTotal + products[0].get("price")
                    cart.totalProducts = cart.totalProducts + 1
                    cart.totalQuantity = cart.totalQuantity + 1
                    cart.save()

                else:
                    print("in products")
                    cart.total =cart.total + products[0].get("price")
                    # update to discount later
                    cart.discountedTotal = cart.discountedTotal + products[0].get("price")
                    cart.totalQuantity = cart.totalQuantity + 1
                    cart.save()

                return {'message': 'Product added to cart successfully'}, 200
            else:
                print("lenth", len(products))
                total = data.get("total")
                total_products = data.get("totalProducts")
                cart = carts.objects.get(userId= user_id)
                cart.products = products
                cart.total = total
                cart.totalProducts = total_products
                cart.save()
                return {'message': 'cart updated'}, 200



        except Exception as e:
            return {'error': 'Failed to update cart', 'message': str(e)}, 500

class OrderApi(Resource):
    def post(self):
        try:
            data = request.get_json()

            userId = data.get("userId")
            username = data.get("username")
            phone = data.get("phone")
            email = data.get("email")
            shippingAddress = data.get("shippingAddress")
            cart = data.get("cart")
            total = data.get("total")
            totalProducts = data.get("totalProducts")



            order = orders(
                userId= userId,
                username= username,
                phone=phone,
                email=email,
                shippingAddress=shippingAddress,
                cart=cart,
                total=total,
                totalProducts=totalProducts
            ).save()
            return jsonify(order)
        except Exception as e:
            return {"message": str(e)},400

def initializeRoutes(api):
    api.add_resource(ProductApi, '/products')
    api.add_resource(UserApi, '/users')
    api.add_resource(LoginApi, '/auth')
    api.add_resource(CartAddApi, '/cart/add')
    api.add_resource(CartApi, '/cart/cart')
    api.add_resource(OrderApi, '/order')





