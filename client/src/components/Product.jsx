import React from 'react'
import "../css/Product.css"
import { Rate } from 'antd';
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
                <div className='detail_col'>
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
                <div className='detail_col detail-col-less'>
                    <div className='product-rating'>
                        <Rate/>
                    </div>
                    <div className='product-star'>
                        stars
                    </div>
                </div>
                                 
            </div>
        </div>
    );
};

export default Product;
