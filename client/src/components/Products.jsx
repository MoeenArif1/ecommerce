import React, { useEffect, useState, useParams } from 'react'
import Product from './Product'
import "../css/Products.css"
import { Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
  Select, } from 'antd'

import { useLoginContext } from './LoginContext'
import { useAppContext } from './appContext'

export function Products({headingText}) {

    const innerPage = ''
    
    const [id, setId] = useState(null);
    const {loginContext} = useLoginContext();

    useEffect(()=> {
      if (loginContext!= null)
          setId(loginContext.id)
  }, [loginContext]);

  const {appContext, setAppContext} = useAppContext();

    const [loading, setLoading] = useState(false);
    // const param = useParams();
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //   setLoading(true);
    //   (param?.categoryId
    //     ? getProductsByCategory(param.categoryId)
    //     : getAllProducts()
    //   ).then((res) => {
    //     setItems(res.products);
    //     setLoading(false); 
    //   });
    // }, [param]);
    
    useEffect(()=> {
      setLoading(true)
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data)=> {
        setItems(data.products)
   
        
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

  
    return (
        <div>
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            {/* <div className={`products ${innerPage ? "innerPage" : ""}`}> */}

            {/* <div className='products'>
                {ids.map((_id) => (
                    <Product  id = {_id}/>
                ))}
            </div>
             */}
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
        dataSource={items}
      ></List>
        
        </div>
    )

    function AddToCartButton({ item }) {
      const [loading, setLoading] = useState(false);
      
     
      
      const addProductToCart = () => {
        setLoading(true)


        if (id) {
          fetch(`https://dummyjson.com/carts/${id}`, {
          method: 'PUT', /* or PATCH */
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            merge: true, // this will include existing products in the cart
            products: [
              item,
            ],
            
            

          })
        })
        .then(res => res.json())
        .then( (data) => {
          message.success(`${item.title} has been added to cart!`);

          const updatedAppContext = {...appContext, cartCount: appContext.cartCount + 1}
          setAppContext(updatedAppContext)
      
   
    
          setLoading(false)

        })

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