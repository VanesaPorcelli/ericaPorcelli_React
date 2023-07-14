  import { useContext } from "react";
  import { CartContext } from "../../../context/CartContext";
  import Swal from "sweetalert2";
  import Cart from "./Cart";

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
        <Cart
          total={total}
          limpiar={limpiar}
          cart={cart}
          removeById={removeById}
        />
      </div>
    );
  };

  export default CartContainer;