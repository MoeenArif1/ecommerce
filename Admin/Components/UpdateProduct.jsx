import React from 'react';
import { Form, Input, Button, message, InputNumber} from 'antd';

const UpdateProduct = () => {
  const onFinish = (values) => {
    // Here, you can perform your API call to add the product with the 'values' object
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    // For simplicity, we'll just show a success message without making an actual API call.
    let product = {
        p_id: values.p_id,
        title: values.title,
        description: values.description,
        price: values.price, 
        rating: values.rating,
        brand: values.brand,
        category: values.category,
        discountPercentage: 0,
        stock: values.stock,
       

    }
  
    fetch(`http://127.0.0.1:5000/products`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })  .then(res => res.json())
      .then( (data) => {
        message.success('Product Updated successfully!');
        console.log(data)
      })
    
  };

  return (
    <div style={{marginTop: '10em', padding: '1em'}}>
        <h1>Update product Product</h1>
    <Form onFinish={onFinish}>
    <Form.Item
        name="p_id"
        label="Product ID"
        rules={[
          {
            required: true,
            message: 'Please enter the product ID!',
          },
        ]}
      >
        <Input placeholder="Enter the product ID" />
      </Form.Item>

      <Form.Item
        name="name"
        label="Product Name"
        rules={[
          {
            required: true,
            message: 'Please enter the product name!',
          },
        ]}
      >
        <Input placeholder="Enter the product name" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Product Description"
        rules={[
          {
            required: true,
            message: 'Please enter the product description!',
          },
        ]}
      >
        <Input.TextArea placeholder="Enter the product description" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Product Price"
        rules={[
          {
            required: true,
            message: 'Please enter the product price!',
          },
          {
            type: 'number',
            min: 0,
            message: 'Price must be a positive number!',
          },
        ]}
      >
        <InputNumber placeholder="Enter the product price" />
      </Form.Item>

      <Form.Item
        name="rating"
        label="Product Rating"
        rules={[
          {
            required: true,
            message: 'Please enter the product rating!',
          },
          {
            type: 'number',
            min: 0,
            max: 5,
            message: 'Rating must be between 0 and 5!',
          },
        ]}
      >
        <InputNumber placeholder="Enter the product rating" />
      </Form.Item>

      <Form.Item
        name="stock"
        label="Product Stock"
        rules={[
          {
            required: true,
            message: 'Please enter the product stock!',
          },
          {
            type: 'number',
            min: 0,
            message: 'Stock must be a positive number!',
          },
        ]}
      >
        <InputNumber placeholder="Enter the product stock" />
      </Form.Item>

      <Form.Item
        name="brand"
        label="Product Brand"
        rules={[
          {
            required: true,
            message: 'Please enter the product brand!',
          },
        ]}
      >
        <Input placeholder="Enter the product brand" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Product Category"
        rules={[
          {
            required: true,
            message: 'Please enter the product category!',
          },
        ]}
      >
        <Input placeholder="Enter the product category" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default UpdateProduct;
