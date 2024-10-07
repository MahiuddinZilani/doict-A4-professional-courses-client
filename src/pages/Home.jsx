// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// const Home = () => {
//   // const response = useLoaderData();
//   // console.log(response);

import AboutOwner from "../components/AboutOwner";
import BannerCarousel from "../components/BannerCarousel";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

//   // const { name } = useContext(AuthContext);
//   // console.log(name);

//   return (
//     <div>
//       <div className="min-h-screen flex flex-col">
//         {/* Banner Section */}
//         <section className="bg-blue-600 text-white py-20">
//           <div className="container mx-auto text-center">
//             <h1 className="text-4xl font-bold">
//               Welcome to the Professional IT Course
//             </h1>
//             <p className="text-xl mt-4">
//               Master the skills to excel in the IT industry
//             </p>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
//             <p className="text-lg leading-relaxed">
//               Our platform offers comprehensive courses designed by industry
//               professionals. Simply sign up, explore our wide range of courses,
//               and start learning at your own pace. Whether you&apos;re a
//               beginner or a professional looking to enhance your skills, our
//               platform is designed to meet your needs.
//             </p>
//           </div>
//         </section>

//         {/* Image Section */}
//         <section className="py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-semibold mb-8">Explore Our Courses</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <img
//                 className="rounded-lg shadow-lg"
//                 src="https://via.placeholder.com/300x200"
//                 alt="Product 1"
//               />
//               <img
//                 className="rounded-lg shadow-lg"
//                 src="https://via.placeholder.com/300x200"
//                 alt="Product 2"
//               />
//               <img
//                 className="rounded-lg shadow-lg"
//                 src="https://via.placeholder.com/300x200"
//                 alt="Product 3"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Contact Us Section */}
//         <section className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-semibold text-center mb-8">
//               Contact Us
//             </h2>
//             <form className="max-w-lg mx-auto">
//               <div className="mb-4">
//                 <label className="block text-lg mb-2" htmlFor="name">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg mb-2" htmlFor="email">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg mb-2" htmlFor="message">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   rows="4"
//                   placeholder="Enter your message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </section>

//         {/* About Us Section */}
//         <section className="py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-semibold mb-8">About Us</h2>
//             <div className="flex flex-col items-center">
//               <img
//                 className="w-32 h-32 rounded-full mb-4"
//                 src="https://via.placeholder.com/150"
//                 alt="Owner"
//               />
//               <h3 className="text-2xl font-bold">John Doe</h3>
//               <p className="text-lg leading-relaxed mt-4">
//                 John is the founder of the Professional IT Course platform. With
//                 over 10 years of experience in the IT industry, he is passionate
//                 about helping others develop the skills they need to succeed in
//                 the tech world.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Footer Section */}
//         <footer className="bg-blue-800 text-white py-8">
//           <div className="container mx-auto px-4 text-center">
//             <p className="text-lg">1234 IT Avenue, Tech City, 56789</p>
//             <p className="text-lg">
//               Phone: (123) 456-7890 | Email: info@itcourse.com
//             </p>
//             <div className="mt-4">
//               <a href="#" className="mx-2 hover:underline">
//                 Facebook
//               </a>
//               <a href="#" className="mx-2 hover:underline">
//                 Twitter
//               </a>
//               <a href="#" className="mx-2 hover:underline">
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Section */}
      <BannerCarousel></BannerCarousel>

      {/* How It Works Section */}
      <HowItWorks></HowItWorks>

      {/* Image Section */}
      <section className="py-16 bg-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Explore Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              className="rounded-lg shadow-lg w-1/2 md:w-full h-52 md:h-72 mx-auto"
              src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png"
              alt="IT Course 1"
            />
            <img
              className="rounded-lg shadow-lg w-1/2 md:w-full h-52 md:h-72 mx-auto"
              src="https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png"
              alt="IT Course 2"
            />
            <img
              className="rounded-lg shadow-lg w-1/2 md:w-full h-52 md:h-72 mx-auto"
              src="https://coderstrustbd.com/wp-content/uploads/2021/06/dgm-n.jpg"
              alt="IT Course 3"
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs></ContactUs>

      {/* About Us Section */}
      <AboutOwner />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
