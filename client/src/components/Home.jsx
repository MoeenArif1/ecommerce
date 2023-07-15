import { Newsletter } from './Newsletter'
import { Footer } from './Footer'

import "../css/Home.css"
import Product from './Product';
import { Products } from './Products';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const mainContentDivRef = useRef(null);
    const navigate = useNavigate();
    const [isDisable, setIsDisabled] = useState(null);


    const scrollToDiv = (scrollTo) => {
        if (scrollTo == 'main'){
            setIsDisabled(true)
        
            if (mainContentDivRef.current) {
                mainContentDivRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            setIsDisabled(false)

        }
        else if(scrollTo == 'news') {
            if (newsletterRef.current) {
                newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
              }

        }
 
       
      };
  
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
                            <div className="banner-cta hov">
                                <button style={{border: 'none', background: 'none', color: 'white'}} onClick={() => navigate('/About')}>
                                    Read More
                                </button>
                                </div>
                            <div className="banner-cta v2 hov">
                                <button style={{border: 'none', background: 'none'}} disabled= {isDisable} onClick={scrollToDiv.bind(null, 'main')}> 
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='hero-img'> 
                        <img className="banner-img" src= "./banner-img.png" />
                    </div>
                    
                </div>
            </div>
            <div className="main-content" ref={mainContentDivRef} >
                <div className="layout">
                    {/* <Category categories={categories} />  */}
                    <Products
   
                        headingText="Popular Products"
                        className= "products"
                        // products={products}
                    />
                </div>
            </div>
            <Newsletter />
            <Footer/>
        </>
    )
}

export default Home;
