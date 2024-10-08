import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
      {/* Course Image */}
      <div className="relative h-36 md:56">
        <img
          src={img_url}
          alt={title}
          className="object-cover w-full h-full opacity-95"
        />
        <div className="absolute top-0 right-0 m-2 px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-lg">
          {level}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4 bg-gray-100">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-gray-500">Duration: {duration}</span>
          <span className="text-lg font-bold text-teal-600">${price}</span>
        </div>

        {/* Author Information */}
        <div className="flex items-center mt-4">
          <img
            src={author_img_url}
            alt={author}
            className="w-10 h-10 rounded-full border-2 border-teal-500 object-cover"
          />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-700">{author}</p>
            <p className="text-xs text-gray-500">{ratings} ★ Rating</p>
          </div>
        </div>
      </div>

      {/* Footer with Call-to-Action */}
      <div className="bg-gray-200 py-2 px-8">
        <Link to={`/products/${course_id}`}>
          <button className="w-full py-2 bg-[#242145] text-white font-semibold rounded-lg hover:bg-pink-900 transition-colors duration-300">
            See Course Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

CourseCard.propTypes = {
  course: PropTypes.object,
};
