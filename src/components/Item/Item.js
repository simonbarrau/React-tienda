
const Item = ({tittle, price, image}) => {
  return (
    <div>
<img height="300px" width="400px" src={image} alt="foto"/>
<h3>{tittle}</h3>
<h3>{price}</h3>
    </div>
  );
};

export default Item