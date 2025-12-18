import HeaderBackground from '@/components/HeaderBackground';

import Navbar from '../Navbar';

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className='flex items-center justify-between fixed top-0 z-20 w-full py-8 lg:px-12 px-2'>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
