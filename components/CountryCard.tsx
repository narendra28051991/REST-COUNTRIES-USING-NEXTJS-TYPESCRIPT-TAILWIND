import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

type CountryCardProps = {
  country: {
    alpha3Code: string;
    name: string;
    region: string;
    population: number;
    capital?: string;
    flag: string;
  };
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? 'bg-gray-700' : 'bg-white border-b-2';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <div className={`rounded-sm shadow-md ${bgColor} ${textColor}`}>
      <Link legacyBehavior href="/country/[countryCode]" as={`/country/${country.alpha3Code}`}>
        <a>
          <div className="w-full h-52 relative">
            <Image
              src={country.flag}
              alt="country-flag"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="p-8 pb-12 text-small">
            <h3 className="text-lg font-bold mb-4">{country.name}</h3>
            <p className="font-small">
              <span className="font-semibold">Population: </span>
              {country.population}
            </p>
            <p className="font-small">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            {country.capital && (
              <p className="font-small">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CountryCard;
