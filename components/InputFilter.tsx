import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

type InputFilterProps = {
  searchInput: string;
  setSearchInput: (value: string) => void;
};

const InputFilter: React.FC<InputFilterProps> = ({ searchInput, setSearchInput }) => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? 'bg-gray-700' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-800' : 'border-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`relative font-small text-sm`}>
      <input
        type="text"
        className={`pl-20 py-2 border rounded-sm shadow-md pr-20 md:pr-52 focus:outline-none focus:border-gray-500 ${bgColor} ${textColor} ${borderColor}`}
        placeholder="Search for a country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-8">
        <Image
          src="/search.svg"
          alt="Search Icon"
          width={16}
          height={16}
          style={{ filter: darkMode ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
    </div>
  );
};

export default InputFilter;
