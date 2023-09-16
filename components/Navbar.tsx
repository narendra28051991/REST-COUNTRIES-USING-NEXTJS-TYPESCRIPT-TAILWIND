import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const bgColor = darkMode ? 'bg-gray-700' : 'white border-b-2';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <nav className={`px-5 md:px-20 py-4 ${bgColor} ${textColor}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-extrabold text-lg md:text-2xl">Where is the world?</p>
        </div>
        <div className="flex items-center">
          <Image
            src='/moon.svg'
            alt='moon-icon'
            width={10}
            height={10}
            onClick={toggleDarkMode}
            style={{ cursor: 'pointer', filter: darkMode ? 'invert(100%)' : 'invert(20%)' }}
          />
          <span className="ml-2 font-medium text-sm md:text-base">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
