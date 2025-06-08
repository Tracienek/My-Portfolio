import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qq9p9aj',
      'template_x2dma8j',
      e.currentTarget,
      'TXiwIkGITiIxuGZEs'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again');
    });

    e.currentTarget.reset();
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <form onSubmit={sendEmail} className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100"
            rows={5}
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
