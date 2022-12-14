import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
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
      const queryBase= collection(db, 'items');
      const querySnapshot = category ? query(queryBase, where('category', '==', category)) : queryBase;
     
      
      getDocs(querySnapshot).then((response) =>{
        const data= response.docs.map((product) => {
            return{ id: product.id, ...product.data()}
        })
        setProductList(data)
      })
    
    }
    
  
  return (
    <>
        <div className="destination">
           

      <Link to="/cart" > <button type="button" className="carrt"> Carrito</button> </Link>
    <ItemList lista={productList}/>
    </div> 

    </>
  )
};

export default ItemListContainer;