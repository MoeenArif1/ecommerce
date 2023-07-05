import React from 'react'
import Product from './Product'

export function Products({headingText}) {
    const innerPage = ''
    const ids = [1,2,3,4,5,6,7,8,9]
  
    return (
        <div className='products-containter'>
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            {/* <div className={`products ${innerPage ? "innerPage" : ""}`}> */}

            <div>
                {ids.map((id) => (
                    <Product  id = {id}/>
                ))}
            </div>
        </div>
    )
}
