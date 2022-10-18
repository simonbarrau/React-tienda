import "./Item.css"

const Item = ({tittle, price, image}) => {
  return (

   <div className="carsh" >
      <h5 className="title">{tittle}</h5>
      <img src={image} className="image" alt="foto"></img>
      <p className="precio">Price:${price}</p>
  </div>


  );
};

export default Item