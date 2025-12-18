import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <header className='flex items-center relative z-10 justify-between w-full py-8 lg:px-12 px-2'>
      <Link
        className='flex items-center justify-center gap-4 font-bold tracking-tight uppercase text-2xl bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'
        href='/'
      >
        <Image src={logo} alt='Food on a plate' priority className='object-contain w-20 h-20' />
        NextLevel Food
      </Link>
      <nav className='flex gap-4 p-4'>
        <Link className='text-white font-medium hover:text-yellow-200' href='/meals'>
          Meals
        </Link>
        <Link className='text-white font-medium hover:text-yellow-200' href='/community'>
          Community
        </Link>
        <Link className='text-white font-medium hover:text-yellow-200' href='/meals/share'>
          Share Meal
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
