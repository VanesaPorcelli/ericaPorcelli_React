import { Button, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="form-container">
      <h2 className="form-title">Completa tus datos y finaliza la compra</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
          className="form-input"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
          className="form-input"
        />
        <TextField
          label="Teléfono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
          className="form-input"
        />
        <Button variant="contained" type="submit" className="form-button">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
