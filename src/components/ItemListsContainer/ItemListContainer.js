import data from "../../Components/mockData";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { getFirestore, getDocs } from "firebase/firestore";

const ItemListContainer = (prop) => {
  
  const {category} = useParams();
  const [productList, setProductList]= useState([])

  useEffect(() => {
    getProducts.then((response)=>{
      category ? setProductList(response.find((Item)=> Item.category === category )) : setProductList(response)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [category])

  const getProducts= 
    new Promise ((resolve, reject)=>{

      setTimeout(() =>{
        resolve(data)
      }, 2000)
    })
  
  return (
    <ItemList lista={productList}/>
      
  )
};

export default ItemListContainer;