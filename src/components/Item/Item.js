import "./Item.css"

const Item = ({tittle, price, image}) => {
  return (
    <>
      <div class="card" >
      <h5 class="card-title">{tittle}</h5>

  <img src={image} class="card-img-top" alt="foto"></img>

  <div class="card-body">
    <p class="card-text">{price}</p>
    <a href="./" class="btn btn-primary">Buy🤑</a>
  </div>
</div>
</>
  );
};

export default Item