import "./Item.css"

const Item = ({tittle, price, image}) => {
  return (
    <>
      <div className="card" >
      <h5 className="title">{tittle}</h5>

  <img src={image} className="card-img-top" alt="foto"></img>

  <div className="card-body">
    <p className="precio">Price:${price}</p>
  </div>
</div>
</>
  );
};

export default Item