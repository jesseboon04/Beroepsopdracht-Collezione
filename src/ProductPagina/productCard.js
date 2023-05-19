import React from "react";

import "./productCard.css";


function ProductCard(props){
    return  (
    <div className="card1">
        <div className="border mb-4 rounded overflow-hidden product-card">
            <div>
                {/* <div style={{'backgroundImage': `url('${props.product.image}`}}> */}
                    <img className="image-product" src={props.product.image}></img>
                    <div className="product-shirt">{props.product.name}</div>
                    <div className="product-categorie">{props.product.categorie}</div>
                    <div className="product.price">${props.product.price}</div>

                    
                </div>
            
        </div>
    </div>
    )
}

export default ProductCard