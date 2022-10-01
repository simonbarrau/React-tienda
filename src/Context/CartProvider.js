import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart= (id) => {
        return cart.some((item) => item.id === id)
    };
    
    const addToCart= (item, cantidad) => {
        if(isInCart (item.id, cantidad)){
            alert("ya esta en el carrito")
        }else{
            setCart([...cart,{...item, cantidad}])
        }
        console.log('cart',[...cart, {...item, cantidad}]);
    };


   const removeProduct=(productId) =>{
    let newArray=[]
        cart.forEach((product) =>{
            if (product.id === productId){
               console.log(product);
            }else{
                newArray.push(product)
            }
        })
        setCart(newArray)
       
   }

    const clear = () =>{
        setCart([])
    }
    
    const totalItems = () => {
        return (cart.reduce((ac, cartItem) => ac + cartItem.cantidad, 0))
      };

    return(
        <CartContext.Provider value={{cart, addToCart, removeProduct, clear, totalItems}}>
            {children}
    </CartContext.Provider >

    )



}
