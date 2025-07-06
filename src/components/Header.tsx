import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [showAvatar, setShowAvatar] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-6">
        <div className="text-xl font-bold">
          <a href="#"
          onClick={(e) => {
                e.preventDefault();
                setShowAvatar(true);
              }}
              >Pham Tran Bao Tran</a>
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
      
      {showAvatar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowAvatar(false)}
        >
          <img
            src="/src/img/ava.jpg"
            alt="Avatar Large"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
}

export default Header;
