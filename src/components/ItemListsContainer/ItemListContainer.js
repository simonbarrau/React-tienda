import data from "../../Components/mockData";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

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
    <div>
      <Link to="/cart"> Carrito </Link>
    <ItemList lista={productList}/>
    </div>
  )
};

export default ItemListContainer;