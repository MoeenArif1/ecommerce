import React from 'react'
import "../css/Product.css"
// { data, id }
const Product = ({id}) => { 
    // const navigate = useNavigate();
    return (
        
        <div className="product-card">
            {/* // onClick={() => navigate("/product/" + id)}
        > */}
            <div className="product-thumbnail">
                <img className='thumbnail-img'
                    src="/iphone.png"
                    // src={
                    //     process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    //     data.image.data[0].attributes.url
                    // }
                />
            </div>
            <div className="prod-details">
                <span className="name">
                    Iphone X  {id}
                    {/* {data.title} */}
                </span>
                <span className="price">
                    Rs. 
                    120,000
                    {/* {data.price} */}
                </span>
            </div>
        </div>
    );
};

export default Product;
