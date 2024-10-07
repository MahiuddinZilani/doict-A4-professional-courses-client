import owner from "../../public/owner-image.jpg";
const AboutOwner = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            About Director
          </h2>
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
              src={owner}
              alt="Founder"
            />
            <h3 className="text-2xl mb-4 font-bold text-gray-900">
              Mahiuddin Zilani
            </h3>
            <h3 className="text-2xl font-medium text-gray-900">
              Upazila ICT Officer
            </h3>
            <h3 className="text-xl font-medium text-gray-500">
              ICT Division, Ministry of Post, Telecommunication & ICT
            </h3>
            <p className="text-lg leading-relaxed mt-4 text-gray-600">
              Mahiuddin Zilani the founder of the DevUp Courses platform with
              over 10 years of experience in IT and education. He is committed
              to sharing his knowledge and helping others excel in the tech
              world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOwner;
