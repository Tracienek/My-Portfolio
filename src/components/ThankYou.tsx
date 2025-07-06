const ThankYou = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 className="text-3xl sm:text-5xl font-bold text-purple-600 mb-4">
      ✅ Thank you for your message!
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-300">
      I’ll get back to you as soon as possible.
    </p>
    <a
      href="/"
      className="mt-6 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
    >
      Back to Home
    </a>
  </div>
);

export default ThankYou;
