import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart= (item, caantidad) => {
        if(isInCart (item.id, caantidad)){
            alert("ya esta en el carrito")
        }else{
            setCart([...cart,{...item, caantidad}])
        }
    };

    const isInCart= (id) => {
        return cart.some((item) => item.id === id)
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
    </CartContext.Provider >

    )



}
