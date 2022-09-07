
const Item = ({tittle, price, image}) => {
  return (
    <>
      <div class="card" >
  <img src={image} class="card-img-top" height="350px" width="400px" alt="foto"></img>

  <div class="card-body">
    <h5 class="card-title">{tittle}</h5>
    <p class="card-text">{price}</p>
    <a href="./" class="btn btn-primary">Buy</a>
  </div>
</div>
</>
  );
};

export default Item