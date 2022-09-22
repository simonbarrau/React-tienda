import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../mockData";
import ItemDetails from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id }= useParams();

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