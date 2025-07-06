import { useState } from 'react';
const ContactForm = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <form
        action="https://formsubmit.co/baotran09042004@gmail.com"
        method="POST"
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Contact Me
        </h2>

        {/* Disable CAPTCHA and set redirect message */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://my-portfolio-9odn.onrender.com/thank-you"
        />

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"
            rows={5}
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-500 hover:bg-purple-700 text-white rounded-lg transition duration-300"
        >
          Send Message
        </button>

        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
          Or reach me directly at:{' '}
          <a
            href="mailto:baotran09042004@gmail.com"
            className="text-purple-500 underline"
          >
            baotran09042004@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
