import  { useEffect, useState } from 'react'
import { Badge, Button, Drawer, InputNumber, Table } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../css/Cart.css'
function Cart() {
    // cart component gets id 
    const id = 1
    const [visible, setVisible] = useState(false);
    const [cartCount, setcartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        fetch(`https://dummyjson.com/carts/${id}`)
        .then(res => res.json())
        .then((data)=> {
            return setCartItems(data.products)
        });
    }, [visible])
   

    const handleClick = () => {
        setVisible(true);   
    
    }

    const onClose = () => {
        setVisible(false);
    };


  return (
    <>
        <Badge count={cartCount} size='small'> 
            <Button type="default" ghost style={{border: 'none'}} size='large' icon={<ShoppingCartOutlined />} onClick={handleClick}></Button>
        </Badge>
                  
        <Drawer 
        placement="right"
        closable={true}
        onClose={onClose}
        open = {visible}
        title="Your Cart"
        contentWrapperStyle={{ width: 600 }}
        className='cart-drawer'


        > 
            <Table
            pagination={false}
            scroll={{ y: '100%' }}
            className={'cart-table'}
            size='large'
            rowClassName={'cart-table-row'}
            columns={[
                {
                title: <span className="cart-big-font">Title</span>,
                dataIndex: "title"
                },
                {
                title: <span className="cart-big-font">Price</span>,
                dataIndex: "price",
                render: (value) => {
                    return <span>Rs {value}</span>;
                },
                },
                {
                title: <span className="cart-big-font">Quantity</span>,
                dataIndex: "quantity",
                render: (value, record) => {
                    return (
                    <InputNumber
                        min={0}
                        defaultValue={value}
                        onChange={(value) => {
                        setCartItems((pre) =>
                            pre.map((cart) => {
                            if (record.id === cart.id) {
                                cart.total = cart.price * value;
                            }
                            return cart;
                            })
                        );
                        }}
                    ></InputNumber>
                    );
                },
                },
                {
                title: <span className="cart-big-font">Total</span>,
                dataIndex: "total",
                render: (value) => {
                    return <span>Rs {value}</span>;
                },
                },
            ]}
            dataSource={cartItems}
            summary={(data) => {
                const total = data.reduce((pre, current) => {
                return pre + current.total;
                }, 0);
                return <p className="cart-big-font">Total: &nbsp; &nbsp;Rs {total}</p>;
            }}
            />
        </Drawer>
    </>
  )
}

export default Cart