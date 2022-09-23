import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../mockData";
import ItemDetails from "../itemDetail/ItemDetail";
import {doc, getFirestore, getDoc} from "firebase/firestore";


const ItemDetailContainer = () => {
    const { id }= useParams();
    const db= getFirestore();
    const queryDoc= doc(db,'items','HJrE9wgOSKl8IFe0lLmR')
    getDoc(queryDoc).then(res => {
      console.log(res.id);
      console.log(res.data())
    }).catch(error => {
      console.log(error);
    })
    // const itemsCollections= db.collection('items');
    // const item=itemsCollections.doc('HJrE9wgOSKl8IFe0lLmR')
    // console.log(item);

    const [productDetail, setProductDetail] = useState();

    useEffect(() => {
getDetail.then((response) =>{
    setProductDetail(response)})
    .catch(error=>{console.log(error);})
    }, [])

    const getDetail= new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(data.find(product => product.id === id )) 

        },2000)
    })
    
   

  return (
    <> 
    {productDetail
    ? <ItemDetails product={productDetail}/>
    : < h2>Obteniendo Detalles...</h2>}
    </>

  )
}

export default ItemDetailContainer