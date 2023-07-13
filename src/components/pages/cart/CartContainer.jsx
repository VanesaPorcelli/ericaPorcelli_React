import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  // Alerta para vaciar carrito
  const limpiar = () => {
    Swal.fire({
      title: "Deseas vaciar el carrito de compras?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Volver al carrito", "", "info");
      }
    });
  };

  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
            <h3>{product.quantity}</h3>
            <button
              onClick={() => {
                Swal.fire({
                  title: "Estas seguro de eliminar el producto?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Si, eliminar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    removeById(product.id);
                    Swal.fire("Producto eliminado!");
                  }
                });
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <h2>El total del carrito es : $ {total}</h2>
      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}
    </div>
  );
};

export default CartContainer;
