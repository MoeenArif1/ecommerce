import React, { useState } from 'react';
import { Form, Input, Button, Table, message } from 'antd';
import axios from 'axios';
import { useAppContext } from './appContext';

const OrderManagement = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const {appContext, setAppContext} = useAppContext();

  const onFinish = async (values) => {
    setLoading(true);
    try {
  
      // const response = await axios.post('YOUR_API_ENDPOINT', {
      //   ...values,
      //   cartItems,
      // });
      // make api call here
      const response = {
        data: {
          success: true
        }
      }

      // Assuming the API returns a success message
      if (response.data.success) {
        message.success('Order placed successfully!');

        const updateContext = {...appContext, cart: null, cartTotal: 0}
        // make order status to waiting for approval
        setAppContext(updateContext)
      } else {
        message.error('Failed to place the order.');
      }
    } catch (error) {
      console.error('Error placing the order:', error);
      message.error('An error occurred while placing the order.');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    {title: 'Total', dataIndex: 'total', key: 'total' }
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  width: "100%", height: "88vh", paddingTop: '15em'}}>
    
      <h2 style={{ paddingBottom:'2em'}}>Cart</h2>
      <Table dataSource={appContext.cart} columns={columns} pagination={false} style={{flex: '1fr', width: '80%'}}
           summary={() => (
            <p className="cart-big-font">Total: &nbsp; &nbsp;Rs {appContext.cartTotal}</p>
          )}
      />


      <h2 style={{paddingTop: '4em', paddingBottom:'2em'}}>Shipping Address</h2>

      <Form form={form} layout="vertical" onFinish={onFinish} style={{width: '80%'}}>
        <Form.Item
          name="shippingAddress"
          label="Shipping Address"
          rules={[{ required: true, message: 'Please enter the shipping address' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Place Order
          </Button>
        </Form.Item>
      </Form>
     
    </div>
  );
};

export default OrderManagement;
