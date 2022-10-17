import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../itemDetail/ItemDetail";
import {doc, getFirestore, getDoc} from "firebase/firestore";
import { Link } from "react-router-dom";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const { id }= useParams();
    const db= getFirestore();
    
    const queryDoc= doc(db,'items',id)
    getDoc(queryDoc).then(res => {
        console.log(res);
    }).catch(error => {
      console.log(error);
    })
    // const itemsCollections= db.collection('items');
    // const item=itemsCollections.doc('HJrE9wgOSKl8IFe0lLmR')
    // console.log(item);

    const [productDetail, setProductDetail] = useState();

    useEffect(() => {
                      getDetail()}, [id])

    const getDetail= () => {
      const queryDoc= doc(db,'items',id)
    getDoc(queryDoc).then(res => {
        setProductDetail({id: res.id, ...res.data()})
    }).catch(error => {
      console.log(error);
    })
    }
    
   

  return (
    <> 
        <div className="destination"> 

          <Link to="/cart" > <button type="button" className="carrt"> Carrito</button> </Link>

    {productDetail
    ? <ItemDetails product={productDetail}/>
    : <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>}
  </div> 

    </>

  )
}

export default ItemDetailContainer