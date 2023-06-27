import React, {createContext, useState} from "react";

export const ShopContext = createContext(null)

function ShopContext (props) {
    const [cartItems, setCartItems] = useState({});
    return (
        <ShopContext.Provider>{props.children}</ShopContext.Provider>
    )
};

export default ShopContext