import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();

  const realizarCompra = () => {
    console.log("Se agregaron los productos");
    // navegar
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Carrito de Compras
      </h1>
      <button
        style={{
          backgroundColor: "#4285F4",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={realizarCompra}
      >
        Comprar
      </button>
    </div>
  );
};

export default CartContainer;
