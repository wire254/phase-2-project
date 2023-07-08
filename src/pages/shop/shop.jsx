import React, { useState, useEffect} from "react";
import "./shop.css";

function Shop() {

    const apiGet = useEffect(() => {
        fetch("https://phase-2-project-json-server-n38l.onrender.com/PRODUCTS/1")
        .then((res) => res.json())
        .then(productData => console.log(productData))
    })
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1> Chicago Institute Shop </h1>
            </div>
            <div className="products">


            </div>
        </div>
    )
};

export default Shop; 