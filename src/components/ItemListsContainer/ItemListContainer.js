import data from "../../Components/mockData";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./ItemListContainer.css"

const ItemListContainer = (prop) => {
  
  const {category} = useParams();
  const [productList, setProductList]= useState([])

  useEffect(() => {
    getProducts()}, [category])

  const getProducts= () => {
    const db=getFirestore();
    const querySnapshot= collection(db, 'items');
    if(category){
      const queryFilter = query(querySnapshot, where('category', '==', category));
    getDocs(queryFilter).then((response) =>{
      const data= response.docs.map((product) => {
          return{ id: product.id, ...product.data()}
      })
      setProductList(data)
    })
  }
  else{
    
    getDocs(querySnapshot).then((response) =>{
      const data= response.docs.map((product) => {
          return{ id: product.id, ...product.data()}
      })
      setProductList(data)
    })
  }
  }
    
  
  return (
    <>
      <Link to="/cart" > <button type="button" className="carrt"> Carrito</button> </Link>
    <ItemList lista={productList}/>
    </>
  )
};

export default ItemListContainer;