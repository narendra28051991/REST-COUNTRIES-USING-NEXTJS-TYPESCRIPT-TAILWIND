import Image from 'next/image';
import { joinArray } from '../data/utils';
import { useTheme } from '../context/ThemeContext';

type CountryDetailsProps = {
  country: {
    alpha3Code: string;
    name: string;
    flag: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain?: string[];
    currencies: {
      name: string;
    }[];
    languages: {
      name: string;
    }[];
    borders: string[];
  };
};

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${bgColor} ${textColor}`}>
      <div className="h-52 relative">
        <Image
          src={country.flag}
          alt="country-flag"
          width={600}
          height={600}
          objectFit="cover"
          objectPosition="center" 
        />
      </div>
      <div className="p-2 md:p-8 pb-12 text-small">
        <h3 className="text-lg font-bold mb-4">{country.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 pb-20">
          <div>
            <p className="font-small">
              <span className="font-semibold">Native Name: </span>
              {country.nativeName}
            </p>
            <p className="font-small">
              <span className="font-semibold">Population: </span>
              {country.population}
            </p>
            <p className="font-small">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p className="font-small">
              <span className="font-semibold">Sub Region: </span>
              {country.subregion}
            </p>
            <p className="font-small">
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
          </div>
          <div>
            <p className="font-small">
              <span className="font-semibold">Top Level Domain: </span>
              {joinArray(country.topLevelDomain, ', ')}
            </p>
            <p className="font-small">
              <span className="font-semibold">Currencies: </span>
              {joinArray(country.currencies.map((currency) => currency.name), ', ')}
            </p>
            <p className="font-small">
              <span className="font-semibold">Languages: </span>
              {joinArray(country.languages.map((language) => language.name), ', ')}
            </p>
          </div>
        </div>
        <p className="grid md:flex items-center font-small">
          <span className="font-semibold mr-2">Border Countries: </span>
          <span className="border px-4 py-2 rounded-sm shadow-md">
            {joinArray(country.borders, ', ')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
