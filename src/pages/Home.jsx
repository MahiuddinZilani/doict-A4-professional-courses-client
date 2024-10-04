import { useLoaderData } from "react-router-dom";

const Home = () => {
  const response = useLoaderData();
  console.log(response);

  return <div className="tex">home</div>;
};

export default Home;
