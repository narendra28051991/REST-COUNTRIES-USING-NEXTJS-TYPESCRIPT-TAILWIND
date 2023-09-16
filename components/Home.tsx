import { useState } from 'react';
import InputFilter from './InputFilter';
import SearchFilter from './SearchFilter';
import CountryCard from './CountryCard';
import Navbar from './Navbar';
import data from '../data/data.json';
import { useTheme } from '../context/ThemeContext';

type Unique = {
  alpha3Code: string;
  region: string;
};

type Country = {
  alpha3Code: string;
  name: string;
  region: string;
  population: number;
  capital?: string;
  flag: string;
};

const Home: React.FC = () => {
  const { darkMode } = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const uniqueRegions: string[] = [...new Set(data.map((country: Unique) => country.region))];

  const filteredCountries = data.filter((country: Country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchInput.toLowerCase()) || !searchInput;

    const matchesRegion = country.region === selectedRegion || !selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div>
      <Navbar />
      <div className={`min-h-screen px-5 md:px-20 py-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        <div className="grid md:flex justify-between items-center">
          <InputFilter searchInput={searchInput} setSearchInput={setSearchInput} />
          <SearchFilter
            uniqueRegions={uniqueRegions}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 pt-8">
          {filteredCountries.map((country: Country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
