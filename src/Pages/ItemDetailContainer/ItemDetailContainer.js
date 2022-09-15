import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Components/mockData";
import ItemDetails from "../../Components/itemDetail/ItemDetails";

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
    : < h2>Obteniendo Detalle</h2>}
    </>

  )
}

export default ItemDetailContainer