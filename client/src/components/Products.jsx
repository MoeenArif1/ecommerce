import React, { useEffect, useState, useParams, useMemo } from 'react'
import Product from './Product'
import "../css/Products.css"
import { Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Space,
  Typography,
  Input,
  Divider } from 'antd'

import { useLoginContext } from './LoginContext'
import { useAppContext } from './appContext'

export function Products({headingText}) {

    const innerPage = ''
    
    const [id, setId] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const {loginContext} = useLoginContext();

    useEffect(()=> {
      if (loginContext != null)
        setId(loginContext.id)
  }, [loginContext]);

  const {appContext, setAppContext} = useAppContext();

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(()=> {
      setLoading(true)
      fetch('http://127.0.0.1:5000/products')
      .then(res => res.json())
      .then((data)=> {
        // setItems(data[0]["products"] )
        setItems(data)
        console.log("asdsad")
        console.log("products", data[0])
      
        console.log("data", data)
        
   
         
      });
      setLoading(false)
    }, [])

    const gridConfig = {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    };

    const onSearch = (value) => {
      setSearchValue(value)
    }

    const products = useMemo(() => {
      if(searchValue === "") return items;
      return items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [items, searchValue])
  
    return (
        <div>
          <div className="sec-heading">
            <Space className='header-div'>
              {!innerPage && <div className='header-div-col'>{headingText}</div>}
              <Divider type="vertical" style={{color: 'grey'}}/>
              
              <Input.Search className="search-bar header-div-col" size='large' allowClear onSearch={onSearch} placeholder='Search Product' />
            </Space>
          </div>
         
  
          <List
            loading={loading}
            grid={gridConfig}
            style={{padding: 16}}

            renderItem={(product, index) => {
          return (
            <Badge.Ribbon
              className="itemCardBadge"
              text={`${product.discountPercentage}% Off`}
              color="purple"
            >
              <Card
                className="itemCard"
                title={product.title}
                key={index}
                cover={
                  <Image className="itemCardImage" src={product.thumbnail} />
                }
                actions={[
                  <Rate allowHalf disabled value={product.rating} />,
                  <AddToCartButton item={product} />,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: Rs {product.price}{" "}
                      <Typography.Text delete type="danger">
                        Rs 
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 1, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={products}
      ></List>
        
        </div>
    )

    function AddToCartButton({ item }) {
      const [loading, setLoading] = useState(false);
      
     
      
      const addProductToCart = () => {
        setLoading(true)


        if (id ) {
          console.log("item ", item)
    
          const index = appContext.cart.findIndex(obj => obj.id === item.id);
          if (index !== -1) {
            appContext.cart[index] = {...appContext.cart[index], quantity: appContext.cart[index].quantity + 1, total: appContext.cart[index].total +  appContext.cart[index].price}
            appContext.cartTotal = appContext.cartTotal + item.price
            console.log("cart", appContext.cart)
            message.success(`${item.title} has been added to cart!`)
          
            
          } else {
            const discount_price = parseInt(item.discountPercentage * item.price /100)

      
            const new_item = {
              id: item.id,
              discountPercentage: item.discountPercentage,
              discountedPrice: item.price -  discount_price ,
              price: item.price,
              quantity: 1,
              title: item.title,
              total: item.price

            }
         
            appContext.cart.push(new_item)
            appContext.cartTotal = appContext.cartTotal + new_item.price
            appContext.cartCount = appContext.cartCount + 1
            
            const updateContext = {...appContext}
            setAppContext(updateContext)
            message.success(`${new_item.title} has been added to cart!`)
            
            
          }
      
       
        //    // add item to cart here and update total and cartCount correctly
        //   fetch(`https://dummyjson.com/carts/${id}`, {
        //   method: 'PUT', /* or PATCH */
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     merge: true, // this will include existing products in the cart
        //     products: [
        //       item,
        //     ]

        //   })
        // })
        // .then(res => res.json())
        // .then( (data) => {
        //   message.success(`${item.title} has been added to cart!`);
        //   let updatedAppContext = null
          
        //   if (appContext.cartCount == 0) {
        //     updatedAppContext = {...appContext, cartCount: 1}
        //   } else {
        //     updatedAppContext = {...appContext, cartCount: appContext.cartCount + 1}
        //   }
        //   // updatedAppContext = {...updatedAppContext, cartTotal: appContext.cartTotal + item.price}
        //   setAppContext(updatedAppContext)
      
   
    
          setLoading(false)

        } else {
          message.error("LOGIN FIRST")
        }
        
     
      }

      return (
        <Button
          type="link"
          onClick={() => {
            addProductToCart();
          }}
          loading={loading}
        >
          Add to Cart
        </Button>
      )}
    
}