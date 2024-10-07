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
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        {/* Header Section */}
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={img_url}
              alt={title}
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <p className="text-lg text-gray-300 mt-2">{level} Level</p>
              <button className="mt-4 bg-[#242145] text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-900 transition-colors">
                Enroll Now - ${price}
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-10">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Column */}
              <div className="w-full md:w-3/4 space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">{details}</p>

                <h2 className="text-2xl font-semibold text-gray-900">
                  What You’ll Learn
                </h2>
                {/* <ul className="list-disc ml-5 text-gray-600 space-y-2">
                  {lesson.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}

                <h2 className="text-2xl font-semibold text-gray-900">
                  Assessments
                </h2>
                <p className="text-gray-600">{assessments}</p>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/4 space-y-6">
                {/* Author Info */}
                <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
                  <img
                    src={author_img_url}
                    alt={author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {author}
                    </p>
                    <p className="text-sm text-gray-600">Instructor</p>
                  </div>
                </div>

                {/* Course Info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      {duration} hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold text-gray-900">
                      {student}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold text-gray-900">
                      {ratings} ★
                    </span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full py-3 bg-[#242145] text-white font-semibold rounded-lg hover:bg-pink-900 transition-colors">
                  Enroll Now - ${price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
