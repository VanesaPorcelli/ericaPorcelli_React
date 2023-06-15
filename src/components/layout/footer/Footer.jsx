const Footer = () => {
  const footerStyle = {
    backgroundImage: "linear-gradient(90deg, #F76B1C 0%, #fac261 100%)",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  };

  return (
    <div style={footerStyle}>
      <h3>
        &copy; 2021 <b>TUKURA</b> - Todos los Derechos Reservados.
      </h3>
    </div>
  );
};

export default Footer;
