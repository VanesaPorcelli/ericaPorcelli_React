import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { GridLoader } from "react-spinners";

const objetoLoader = {
  display: "block",
  margin: "150px",

};

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items.length);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 500);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <GridLoader cssOverride={objetoLoader} color="orange" />
      </div>
    );
  }

  return (
    <div>
      <ProductsListPresentacional items={items} />
      {}

      {}
    </div>
  );
};

export default ProductsListContainer;
