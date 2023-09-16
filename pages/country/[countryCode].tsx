import { useRouter } from 'next/router';
import data from '@/data/data.json';
import BackButton from '@/components/BackButton';
import CountryDetails from '@/components/CountryDetails';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';

type CountryProps = {
  country: {
    alpha3Code: string;
    name: string;
    flag: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: {
      name: string;
    }[];
    languages: {
      name: string;
    }[];
    borders: string[];
  } | null;

  notFound: boolean;
};

const Country: React.FC<CountryProps> = ({ country, notFound }) => {
  const router = useRouter();
  const { darkMode } = useTheme();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-white';

  if (notFound) {
    return <div>Country not found</div>;
  }

  if (!country) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className={`min-h-screen px-5 md:px-20 py-16 ${bgColor}`}>
        <BackButton />
        <CountryDetails country={country} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = data.map(({ alpha3Code }) => ({
    params: { countryCode: alpha3Code },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { countryCode } }: { params: { countryCode: string } }) {
  const country = data.find((country) => country.alpha3Code === countryCode);

  if (!country) {
    console.log(`Country with countryCode ${countryCode} not found.`);
    return {
      props: {
        country: null,
        notFound: true,
      },
    };
  }

  return {
    props: {
      country,
      notFound: false,
    },
  };
}

export default Country;
