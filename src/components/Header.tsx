interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-xl font-bold"><a href="#">PhamTranBaoTran</a></div>
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
  );
}

export default Header;
