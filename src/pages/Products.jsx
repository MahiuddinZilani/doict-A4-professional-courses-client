import { useLoaderData } from "react-router-dom";

const Products = () => {
  const response = useLoaderData();

  console.log(response);

  return <div>Products</div>;
};

export default Products;
