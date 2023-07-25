import React from 'react';
import { Form, Input, Button, message } from 'antd';

const DeleteProduct = () => {
  const onFinish = (values) => {
    // Extract the p_id from the form values
    const { p_id } = values;

    // Call the API delete method with p_id
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch(`http://127.0.0.1:5000/products`, {
        method: 'DELETE', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          p_id:p_id

          

        })
      })
      .then((response) => {
        if (response.ok) {
          // Handle the response, e.g., show success message
          message.success('Product deleted successfully!');
        } else {
          // Handle non-2xx status codes as errors
          message.error('Failed to delete product.');
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions
        message.error('An error occurred while deleting the product.');
      });
  };

  return (
    <div style={{marginTop: '10em', padding: '1em'}}>
        <h1>Delete Product</h1>
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Delete Product
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default DeleteProduct;
