import React from "react";

function Product (props) {
    const {id, artist, image, info} = props.data;
    return(
        <div className="product">
            <img src={image}/>
            <div className="info">
                <p>
                    <b>{id}</b>
                </p>
                <p>
                    {artist}
                </p>
            </div>
            <button className="addToCartBttn"> Add To Cart</button>
        </div>
    )
}

export default Product