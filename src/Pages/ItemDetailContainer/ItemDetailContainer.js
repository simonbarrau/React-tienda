import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Components/mockData";
import Items from "../../Components/itemDetail/Items";

const ItemDetailContainer = () => {
    const { id }= useParams();

    const [productDetail, setProductDetail] = useState();

    useEffect(() => {
getDetail.then((response) =>{
setProductDetail(response)
})
    }, [])

    const getDetail= new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(data.filter(product => product.id === id )) 

        },2000)
    })
    
   

  return (
    <div>
hola
<Items detalles={productDetail}/>


{/* <ItemDetail detalles={productDetail}/> */}

        {/* <DetailItem product={productDetail}/>  */}

    </div>
  )
}

export default ItemDetailContainer