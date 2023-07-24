import  { useEffect, useState } from 'react'
import { Badge, Button, Drawer, InputNumber, Table, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../css/Cart.css'
import { useLoginContext } from './LoginContext';
import { useAppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  
   
    const [id, setId] = useState(null)
    const [cartItems, setCartItems] = useState([]);
    const [visible, setVisible] = useState(false);

    const [total, setTotal] = useState(0);
    
    const {loginContext} = useLoginContext();
    const {appContext, setAppContext} = useAppContext();
    const navigate = useNavigate()


    useEffect(()=> {
        if (loginContext!= null)
            setId(loginContext.id)
    }, [loginContext]);

  
   

    useEffect(() => {
        if (true) {

        fetch('http://127.0.0.1:5000/cart/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: id,
            })
            })
            .then(res => res.json())
            .then((data)=> {
                console.log(data)
                setCartItems(data.products)
            

                if (data && data.totalProducts){
                    const updatedAppContext = {...appContext, cartCount: data.totalProducts, cart:cartItems, cartTotal:data.total}

                    setAppContext(updatedAppContext)
                }
               
                
                  
            });

        }
    
    }, [id])
   
    useEffect(()=> {
        const updatedAppContext = {...appContext, cart:cartItems}

        setAppContext(updatedAppContext)

    }, [cartItems])

    const handleClick = () => {
        if (id){
            updateCart()
            setVisible(true); 
            updateTotal()

        }
            
        else {
            message.error("Please Login First")
        }  
    
    }

    const onClose = () => {
        setVisible(false);
        updateCart()
        fetch(`http://127.0.0.1:5000/cart/cart`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

              userId: id,
              products: appContext.cart,
              total: appContext.cartTotal,
              totalProducts: appContext.cartCount

              
  
            })
          })
          .then(res => res.json())
          .then( (data) => {
            message.success(`cart has been updated!`);
            console.log(data)
          })

        updateTotal()

        /// set update cart call to api
    };
    const updateTotal = () => {
        const updatedTotal = cartItems.reduce((prev, current) => prev + current.total, 0);
        setTotal(updatedTotal);
       const updateContext = {...appContext, cartTotal: updatedTotal}
       setAppContext(updateContext)
      };

    const updateCart = () => {
        const filteredCartItems = cartItems.filter((cartItem) => cartItem.quantity > 0);
        setCartItems(filteredCartItems)
        const updateContext = {...appContext, cart:filteredCartItems}
        setAppContext(updateContext)
        // update cart on api

    }
    const orderProcess = () => {
        onClose()
        
        
        fetch(`http://127.0.0.1:5000/cart/cart`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

              userId: id,
              products: appContext.cart,
              total: appContext.cartTotal,
              totalProducts: appContext.cartCount

              
  
            })
          })
          .then(res => res.json())
          .then( (data) => {
            message.success(`cart has been updated!`);
            console.log(data)
          })

        navigate("/Order")
        
      
    
     
       


    }
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);
    const drawerWidth = window.width ? 600 : '100vw';
    useEffect(() => {
        const handleWindowSizeChange = () => {
          setIsWideScreen(window.innerWidth >= 1000);
        };
    
        // Add an event listener to track window resize
        window.addEventListener('resize', handleWindowSizeChange);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
        };
      }, []);

  return (
    <>  
        <Badge count={appContext.cartCount} size='small' showZero={true} offset={[0, 10]}> 
            <Button  type="default" ghost style={{border: 'none'}} size='large' icon={<ShoppingCartOutlined />} onClick={handleClick}></Button>
        </Badge>
                  
        <Drawer     
        placement="right"
        closable={true}
        onClose={onClose}
        open = {visible}
        title="Your Cart"
        contentWrapperStyle={{
            width: '100vw',
            maxWidth: 600, // Optional: Limit the maximum width to 600px for larger screens
          }}
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
                            onChange={(newValue) => {
                                setCartItems((prevCartItems) =>
                                    prevCartItems.map((cartItem) => {
                                        if (record.p_id === cartItem.p_id) {
                                            //return { ...cartItem, quantity: newValue, total: cartItem.price * newValue };
                                            cartItem.quantity = newValue;
                                            cartItem.total = cartItem.price * newValue
                                            if (newValue  <= 0 ){
                                                appContext.cartCount -= 1
                                            }

                                    
                                        }
                                        return cartItem;
                                    })
                                    
                                );
                                updateTotal()
                            }}
                        />

                  
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
         
            summary={() => (
                <p className="cart-big-font">Total: &nbsp; &nbsp;Rs {total}</p>
              )}
                
            
            />
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Button type="primary" onClick={orderProcess}>Confirm Order</Button>
            </div>
            
        </Drawer>
        
    </>
  )
}

export default Cart