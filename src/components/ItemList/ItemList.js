import Item from "../Item/Item"
import { Link } from "react-router-dom"
const ItemList = ({lista}) => {
  return (
    <>
    <div className="destination"> 
 
        {
          lista.map((product)=>(
            <Link  key={product.id} to={"/detail/"+ product.id} style={{textDecoration:"none"}}
            >

                <div >
                <Item  
                    key={product.id}
                    tittle={product.tittle}
                    price= {product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}/>
                </div>
                </Link>

))
}
        <footer>  This Application Was Created by       <strong>Simon Barrau </strong> 
 
 </footer> 
</div> 
    </>
  )
}

export default ItemList