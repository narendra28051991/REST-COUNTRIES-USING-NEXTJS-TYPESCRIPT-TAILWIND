import { useTheme } from '../context/ThemeContext';

type SearchFilterProps = {
  uniqueRegions: string[];
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
};

const SearchFilter: React.FC<SearchFilterProps> = ({
  uniqueRegions,
  selectedRegion,
  setSelectedRegion,
}) => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? 'bg-gray-700' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-600' : 'border-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`relative font-small text-sm mt-4 md:mt-0`}>
      <select
        id="country"
        name="country"
        className={`block w-full px-4 py-2 border rounded-sm shadow-md focus:outline-none focus:border-gray-500 ${bgColor} ${textColor} ${borderColor}`}
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        style={{ cursor: 'pointer' }}
      >
        <option value="" disabled>
          Filter by Region
        </option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
