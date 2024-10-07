const HowItWorks = () => {
  return (
    <section className="bg-[#242145] py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-300 mb-8">How It Works</h2>

        {/* Steps */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          {/* Step 1 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4">
              1
            </div>
            <h3 className="text-2xl font-semibold">Sign Up</h3>
            <p className="max-w-lg">
              Create your free account by signing up with your email, Google, or
              Facebook to access thousands of IT professional courses.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4">
              2
            </div>
            <h3 className="text-2xl font-semibold">Browse Courses</h3>
            <p className=" max-w-lg">
              Explore our wide range of courses in various IT fields, including
              programming, cybersecurity, cloud computing, and more.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr  from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4">
              3
            </div>
            <h3 className="text-2xl font-semibold">Start Learning</h3>
            <p className=" max-w-lg">
              Choose a course and start learning through video lectures,
              hands-on projects, and assessments to gain practical IT skills.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center border rounded-box p-4 bg-gradient-to-tr from-[#242145] to-pink-800">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4">
              4
            </div>
            <h3 className="text-2xl font-semibold">Earn Certificates</h3>
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
