const ContactUs = () => {
  return (
    <div>
      <section id="contact" className="py-8 bg-[#242145]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-white text-center mb-8">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-gray-700"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-gray-700"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
