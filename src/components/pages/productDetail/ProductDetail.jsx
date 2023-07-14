import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <div>
      <div>
        <div>
          <img
            src={productSelected.img}
            alt=""
            style={{
              width: "25%",
              height: "260px",
              paddingTop: "20px",
              marginLeft: "20px",
            }}
          />
        </div>

        <div>
          <h2 style={{ marginLeft: "20px" }}>
            Nombre: {productSelected.title}
          </h2>
          <h2 style={{ marginLeft: "20px"}}>
            Descripción: {productSelected.description}
          </h2>
          <h2 style={{ marginLeft: "20px" }}>
            Precio: ${productSelected.price}
          </h2>
        </div>
      </div>
      {productSelected.stock > 0 ? (
        <div>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={cantidad}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}
    </div>
  );
};

export default ProductDetail;
