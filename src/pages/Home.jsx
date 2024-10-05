import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Home = () => {
  const response = useLoaderData();
  console.log(response);
  const { name } = useContext(AuthContext);
  console.log(name);

  return <div className="tex">home</div>;
};

export default Home;
