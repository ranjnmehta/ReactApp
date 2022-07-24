import React from 'react';
import Product from './Product';

export default class Products extends React.Component{

    private productList=[
        {name:"Ipad",price:100,description:"ipas is good"},
        {name:"Redmi",price:200,description:"Redmi is good"},
        {name:"Oneplus",price:300,description:"Oneplus is good"}
    ]

    render(){   
        return(  
            <div>
                <div>Products ---</div>
                {
                    this.productList.map((item,index)=>{
                        return(
                           <Product name={item.name} price={item.price} description={item.description}></Product>
                        )
                    })
                }
                
            </div>

        )
    }

}