import { useState } from "react";
import { motion } from "framer-motion";

import ava1 from "../img/ava1.jpg";
import ava2 from "../img/ava2.jpg";
import ava3 from "../img/ava3.jpg";
import ava4 from "../img/ava4.jpg";
import ava5 from "../img/ava5.jpg";

function Hero() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [ava1, ava2, ava3, ava4, ava5];

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6">
        {/* Avatar images */}
        <section className="flex justify-center gap-4 flex-wrap my-6 w-full max-w-4xl">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Avatar ${index + 1}`}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover border-2 border-purple-300 shadow-md cursor-pointer hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </section>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold mb-6"
        >
          Hi, I'm Pham Tran Bao Tran 👋
        </motion.h1>

        {/* Major */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl mb-2"
        >
          Aspiring fullstack developer with a background in <b>IT, AI, and enterprise systems</b>.
        </motion.p>

        {/* Minor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg mb-6 px-2 sm:px-0"
        >
          Currently seeking opportunities in frontend or full-stack roles where I can apply my skills and grow with a collaborative team.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700 transition"
        >
          View My Work
        </motion.a>
        <a
          href="/PHAM TRAN BAO TRAN - CV - ENGLISH VERSION.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          📄 Download My Resume
        </a>

      </section>

      {/* Modal for selected avatar */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="Selected Avatar"
            className="max-w-[90%] max-h-[80vh] rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </>
  );
}

export default Hero;
