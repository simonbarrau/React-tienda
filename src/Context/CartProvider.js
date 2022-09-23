import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart= (item, cantidad) => {
        if(isInCart (item.id, cantidad)){
            alert("ya esta en el carrito")
        }else{
            setCart([...cart,{...item, cantidad}])
        }
        console.log('cart',[...cart, {...item, cantidad}]);
    };

    const isInCart= (id) => {
        return cart.some((item) => item.id === id)
    };

    const removeProduct= (id) =>{
            console.log(removeProduct);
            return cart.splice((product)  => product.id === id)
    }

    const clear = () =>{
        setCart([])
    }
    

    return(
        <CartContext.Provider value={{cart, addToCart, clear}}>
            {children}
    </CartContext.Provider >

    )



}
