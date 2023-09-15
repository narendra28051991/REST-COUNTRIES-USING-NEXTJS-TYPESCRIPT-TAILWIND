import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="px-5 md:px-20 py-4 border-b-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-extrabold text-lg md:text-2xl">Where is the world?</p>
        </div>
        <div className="flex items-center">
          <Image
            src="/moon.svg"
            alt="moon-icon"
            width={10}
            height={10}
            className="mr-2"
          />
          <span className="font-medium text-sm md:text-base">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
