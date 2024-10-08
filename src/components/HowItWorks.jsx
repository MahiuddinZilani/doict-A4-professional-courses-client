import { RxAvatar } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";

const HowItWorks = () => {
  return (
    <section className="bg-[#242145] py-8 px-4">
      <div className="w-2/3 lg:w-full lg:max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-300 mb-8">How It Works</h2>

        {/* Steps */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          {/* Step 1 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 text-6xl text-[#242145] bg-white font-bold rounded-full mb-4">
              <RxAvatar />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sign Up
            </h3>
            <p className="max-w-lg">
              Create your free account by signing up with your email, Google, or
              Facebook to access thousands of IT professional courses.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 text-3xl text-[#242145] bg-white font-bold rounded-full mb-4">
              <FaCartPlus />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enroll Course
            </h3>
            <p className=" max-w-lg">
              Explore our wide range of courses in various IT fields, including
              programming, cybersecurity, cloud computing, and more.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr  from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 text-4xl text-[#242145] bg-white font-bold rounded-full mb-4">
              <GiRead />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start Learning
            </h3>
            <p className=" max-w-lg">
              Choose a course and start learning through video lectures,
              hands-on projects, and assessments to gain practical IT skills.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 text-4xl text-[#242145] bg-white font-bold rounded-full mb-4">
              <PiCertificate />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Become Certified
            </h3>
            <p className=" max-w-lg">
              After completing a course, receive a certificate that showcases
              your skills to potential employers or clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
