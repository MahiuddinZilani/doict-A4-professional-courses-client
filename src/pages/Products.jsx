import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import CourseCard from "../components/CourseCard";

const Products = () => {
  const courses = useLoaderData();
  const { name } = useContext(AuthContext);

  console.log(courses, name);

  return (
    <div className="max-w-screen-lg mx-auto my-4 md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course?._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
