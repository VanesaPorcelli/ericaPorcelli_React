import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img
          src={productSelected.img}
          alt=""
          style={{ width: "350px", height: "auto" }}
        />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>Momentáneamente no hay stock</h3>
      )}
    </>
  );
};

export default ProductDetail;
