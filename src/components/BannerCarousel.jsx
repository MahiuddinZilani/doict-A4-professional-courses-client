import { useEffect, useState } from "react";
import carousel1 from "../../public/carousel-1.webp";
import carousel2 from "../../public/carousel-2.webp";
import carousel3 from "../../public/carousel-3.jpg";
import carousel4 from "../../public/carousel-4.jpeg";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
  const images = [carousel1, carousel2, carousel3, carousel4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full lg:h-96 overflow-hidden rounded-lg shadow-lg">
      {/* overlayed text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-400 z-10 bg-black bg-opacity-40">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
          Welcome to the Professional IT Course
        </h1>
        <p className="text-sm md:text-xl mt-4">
          Empowering your future in the tech industry
        </p>
        <Link
          to={"/products"}
          className="sticky mt-6 inline-block text-white bg-[#242145] px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#242145] transition duration-300"
        >
          Explore Our Courses
        </Link>
        {/* Left and Right Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2  p-2 rounded-full shadow-md"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 rounded-full shadow-md"
          onClick={() =>
            setCurrentIndex(
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-amber-300" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
      {/* Carousel Images */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-fill"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
