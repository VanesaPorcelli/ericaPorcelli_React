import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, limpiar, removeById, total }) => {
    return (
        <div>
            <div className="cart-container">
                <div className="container-items">
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt="" />
                                <div className="cart-item-info">
                                    <h2>{item.title}</h2>
                                    <h2>${item.price}.-</h2>
                                    <h2>Cantidad: {item.quantity}</h2>
                                </div>
                                <Button
                                    className="btn-quitar"
                                    variant="contained"
                                    onClick={() => removeById(item.id)}
                                >
                                    Quitar
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <div className="cart-info">
                    <h2>El total de tu compra es: ${total}</h2>
                    {cart.length > 0 ? (
                        <div className="btn-cart">
                            <Button onClick={limpiar} variant="contained">
                                Vaciar carrito
                            </Button>
                            <Link to="/checkout">
                                <Button variant="contained">Finalizar compra</Button>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/">
                            <Button variant="contained">Agrega productos</Button>
                        </Link>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Cart;
