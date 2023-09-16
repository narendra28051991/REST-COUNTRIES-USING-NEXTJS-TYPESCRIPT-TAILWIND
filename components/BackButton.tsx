import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';

const BackButton: React.FC = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const buttonBgColor = darkMode ? 'bg-gray-700' : 'bg-white';
  const buttonTextColor = darkMode ? 'text-gray-100' : 'text-gray-900';

  const goBack = () => {
    router.back();
  };

  return (
    <div className="font-small text-sm pb-16">
      <button
        className={`flex items-center font-semibold py-4 px-8 border rounded-lg shadow-sm transition duration-300 ease-in-out ${buttonBgColor} ${buttonTextColor}`}
        onClick={goBack}
      >
        <Image
          src="/left.svg"
          alt="left-icon"
          width={16}
          height={16}
          style={{ filter: darkMode ? 'invert(100%)' : 'invert(20%)' }}
        />
        <p className="ml-2">Back</p>
      </button>
    </div>
  );
};

export default BackButton;
