import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';
import Navlink from '../Navlink';

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
      <nav className='flex gap-8 p-4 text-lg'>
        <Navlink href='/meals' label='Browse Meals' />
        <Navlink href='/community' label='Community' />
        <Navlink href='/meals/share' label='Share Meal' />
      </nav>
    </header>
  );
};

export default Navbar;
