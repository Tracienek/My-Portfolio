import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_fcf38x9',
        'template_ex97gye',
        e.currentTarget,
        'yS8b_hwnCH-n1u1ai'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Thank you for contacting me. I appreciate your message and will respond shortly.');
          e.currentTarget.reset();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again');
          setIsSending(false);
        }
      );
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-700 px-4">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Contact Me
        </h2>

        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
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
          disabled={isSending}
          className={`w-full py-2 rounded-lg transition duration-300 ${
            isSending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-500 hover:bg-purple-700 text-white'
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
          Or reach me via email at:{' '}
          <a
            href="mailto:tranbaotran.dev@gmail.com"
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
