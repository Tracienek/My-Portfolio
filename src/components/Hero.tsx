import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center px-6">
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
        className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;
