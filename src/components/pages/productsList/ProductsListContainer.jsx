import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";

import { useParams } from "react-router";
import { GridLoader } from "react-spinners";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(dataBase, "products");
    let consulta;

    if (categoryName) {
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "90%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridLoader eLoader color="orange" width={60} height={111} />
      </div>
    );
  }

  return (
    <div>
      <ProductsListPresentacional items={items} />
      {/* {items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
      )} */}

      {/* {items.length > 0 && <ProductsListPresentacional items={items} />} */}
    </div>
  );
};

export default ProductsListContainer;