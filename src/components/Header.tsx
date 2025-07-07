import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [showAvatar, setShowAvatar] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center p-6 transition duration-300">
        <div className="text-xl font-bold">
          <a href="#about">Pham Tran Bao Tran</a>
        </div>
        <div className="flex gap-6 items-center">
          <nav className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
