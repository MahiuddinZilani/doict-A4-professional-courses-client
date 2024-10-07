import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://pro-course-39y60bkzw-mahiuddinzilanis-projects.vercel.app/courses/${id}`
    )
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [id]);

  const {
    title,
    details,
    lesson,
    student,
    duration,
    price,
    assessments,
    author,
    level,
    ratings,
    author_img_url,
    img_url,
  } = course;
  console.log(course);

  return (
    <div>
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Course Image */}
          <img className="w-full h-48 object-cover" src={img_url} alt={title} />
          {/* Title and Details */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg mb-6">{details}</p>

          {/* Course Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <span className="font-bold text-gray-700">Author:</span>
              <img
                className="w-10 h-10 rounded-full ml-2 border-2 border-blue-400"
                src={author_img_url}
                alt={author}
              />
              <span className="ml-2 text-gray-800">{author}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-700">Level:</span>
              <span className="ml-2 text-gray-800">{level}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-700">Duration:</span>
              <span className="ml-2 text-gray-800">{duration}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-700">Price:</span>
              <span className="ml-2 text-gray-800">${price}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-700">
                Students Enrolled:
              </span>
              <span className="ml-2 text-gray-800">{student}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-700">Assessments:</span>
              <span className="ml-2 text-gray-800">{assessments}</span>
            </div>
          </div>

          {/* Lesson List */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Lessons: {lesson}
          </h2>
          {/* <ul className="list-disc list-inside mb-6">
            {lesson.map((lesson, index) => (
              <li key={index} className="text-gray-700">
                {lesson}
              </li>
            ))}
          </ul> */}

          {/* Ratings */}
          <div className="flex items-center mb-6">
            <span className="font-bold text-gray-700">Rating:</span>
            <div className="ml-2 flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${
                    index < ratings ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a.833.833 0 011.902 0l1.475 4.548 4.792.007a.833.833 0 01.511 1.512l-3.748 2.675 1.423 4.527a.833.833 0 01-1.272.883L10 14.435l-3.631 2.646a.833.833 0 01-1.272-.883l1.423-4.527-3.748-2.675a.833.833 0 01.511-1.512l4.792-.007L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">{ratings} / 5</span>
          </div>

          {/* Enroll Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default CourseDetails;
