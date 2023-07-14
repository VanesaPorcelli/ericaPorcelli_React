import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 300, height: 325, backgroundColor: "rgb(240, 240, 240)" }}>
      <CardMedia
        sx={{ height: 150 }}
        image={elemento.img}
      />
      <CardContent sx={{ height: 120 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {elemento.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {elemento.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${elemento.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              backgroundColor: "#f76c1cce",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
