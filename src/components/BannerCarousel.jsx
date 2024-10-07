const BannerCarousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to the Professional IT Course
          </h1>
          <p className="text-xl mt-4">
            Empowering your future in the tech industry
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default BannerCarousel;
