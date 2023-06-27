import React from "react";

function Product (props) {
    const {id, name, artist, image, info} = props.data;
    return(
        <div className="product">
            <img src={image}/>
            <div className="info">
                <p>
                    <b>{name}</b>
                </p>
                <p>
                    <b>{artist}</b>
                </p>
            </div>
            <button className="addToCartBttn"> Add To Cart</button>
        </div>
    );
};

export default Product