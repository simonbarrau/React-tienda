import Item from "../Item/Item"
const ItemList = ({lista}) => {
  return (
    <div>
        {
            lista.map((product)=>(
                <div>
                <Item key={product.id} 
                    tittle={product.tittle}
                    price= {product.price}
                    image={product.image}/>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList