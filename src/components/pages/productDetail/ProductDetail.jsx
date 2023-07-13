import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount
          stock={productSelected.stock}
          initial={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <h3>No hay stock</h3>
      )}
    </>
  );
};

export default ProductDetail;
