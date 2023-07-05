import { Newsletter } from './Newsletter'
import { Footer } from './Footer'

import "../css/Home.css"
import Product from './Product';
import { Products } from './Products';
import { useState } from 'react';
function Home(props) {
    
  
    // const { products, setProducts, categories, setCategories } =
    // useContext(Context);
    // useEffect(() => {
    //     getProducts();
    //     getCategories();
    // }, []);

    // const getProducts = () => {
    //     fetchDataFromApi("/api/products?populate=*").then((res) => {
    //         setProducts(res);
    //     });
    // };
    // const getCategories = () => {
    //     fetchDataFromApi("/api/categories?populate=*").then((res) => {
    //         setCategories(res);
    //     });
    // };


    return (
        <>
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                            The visionary architect shaping the realm of e-commerce,
                            seamlessly uniting consumers and products with an elegant
                            click.
                        </p>
                        <div className="ctas">
                            <div className="banner-cta hov">Read More</div>
                            <div className="banner-cta v2 hov">Shop Now</div>
                        </div>
                    </div>
                    <div>
                        <img className="banner-img" src= "./banner-img.png" />
                    </div>
                    
                </div>
            </div>
            <div className="main-content">
                <div className="layout">
                    {/* <Category categories={categories} />  */}
                    <Products
   
                        headingText="Popular Products"
                        // products={products}
                    />
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home;
