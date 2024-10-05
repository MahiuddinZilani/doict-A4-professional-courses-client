import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Products = () => {
  const response = useLoaderData();
  const { name } = useContext(AuthContext);

  console.log(response, name);

  return <div>Products</div>;
};

export default Products;
