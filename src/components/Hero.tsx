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
      <section className="flex flex-col justify-center items-center h-screen text-center px-6">
        <section className="flex justify-center gap-6 flex-wrap my-8">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Avatar ${index + 1}`}
              className="w-32 h-38 rounded-lg object-cover border-2 border-purple-300 shadow-md cursor-pointer hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.15 }}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </section>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-12"
        >
          Hi, I'm Pham Tran Bao Tran
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-4"
        >
          Major: Information Technology Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-l mb-8"
        >
          Minor: Artificial Intelligence & Machine Learning | Enterprise Systems Development
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700"
        >
          View My Work
        </motion.a>
      </section>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="Selected Avatar"
            className="max-w-md max-h-[80vh] rounded-xl shadow-2xl"
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
