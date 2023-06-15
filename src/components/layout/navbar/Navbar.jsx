import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">TUKURA - Conciencia Alimentaria</Link>
        <ul className={styles.categories}>
          <Link to="/">Todas</Link>
          <Link to="/category/Frutos">Frutos Secos</Link>
          <Link to="/category/Legumbres">Legumbres</Link>
          <Link to="/category/Cereales">Cereales</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
