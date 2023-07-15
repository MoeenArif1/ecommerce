import  { useEffect, useState } from 'react'
import { Badge, Button, Drawer, InputNumber, Table, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../css/Cart.css'
import { useLoginContext } from './LoginContext';
import { useAppContext } from './appContext';

function Cart() {
  
   
    const [id, setId] = useState(null)
    const [cartItems, setCartItems] = useState([]);
    const [visible, setVisible] = useState(false);
    const [cartCount, setcartCount] = useState(0);
    
    const {loginContext} = useLoginContext();
    const {appContext, setAppContext} = useAppContext();


    useEffect(()=> {
        if (loginContext!= null)
            setId(loginContext.id)
    }, [loginContext]);

    useEffect(()=> {
        setcartCount(appContext.cartCount)
    }, [appContext.cartCount])

    useEffect(() => {
        if (id != null ) {
            fetch(`https://dummyjson.com/carts/${id}`)
            .then(res => res.json())
            .then((data)=> {
                console.log(data)
                setCartItems(data.products)
                //////////////////////////
                // remove this if when your own api
                if (appContext.cartCount == 0)
                { 
                    const updatedAppContext = {...appContext, cartCount: data.totalProducts}
                    setAppContext(updatedAppContext)
 
                }
                  
            });

        }
    
    }, [visible, id])
   

    const handleClick = () => {
        if (id)
            setVisible(true); 
        else {
            message.error("Please Login First")
        }  
    
    }

    const onClose = () => {
        setVisible(false);
    };
    

  return (
    <>  
        <Badge count={cartCount} size='small' showZero={true} offset={[0, 10]}> 
            <Button  type="default" ghost style={{border: 'none'}} size='large' icon={<ShoppingCartOutlined />} onClick={handleClick}></Button>
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