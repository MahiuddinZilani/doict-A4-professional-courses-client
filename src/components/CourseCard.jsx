import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    course_id,
    title,
    duration,
    price,
    author,
    level,
    ratings,
    author_img_url,
    img_url,
  } = course;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Course Image */}
      <img className="w-full h-52 object-cover" src={img_url} alt={title} />

      <div className="p-4">
        {/* Course Title */}
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>

        {/* Author Info */}
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full border-2 border-blue-500"
            src={author_img_url}
            alt={author}
          />
          <div className="ml-3">
            <p className="text-gray-700 font-semibold">{author}</p>
            <p className="text-gray-500 text-sm">Duration: {duration}</p>
          </div>
        </div>

        {/* Course Details */}
        <div className="mt-4">
          <p className="text-lg font-bold text-gray-900">${price}</p>
          <p className="text-gray-600">Level: {level}</p>
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < ratings ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a.833.833 0 011.902 0l1.475 4.548 4.792.007a.833.833 0 01.511 1.512l-3.748 2.675 1.423 4.527a.833.833 0 01-1.272.883L10 14.435l-3.631 2.646a.833.833 0 01-1.272-.883l1.423-4.527-3.748-2.675a.833.833 0 01.511-1.512l4.792-.007L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <p className="ml-2 text-gray-600">{ratings} / 5</p>
        </div>

        {/* details */}
        <div className="w-full">
          <Link to={`/products/${course_id}`}>
            <button className="btn w-full mt-4">Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
