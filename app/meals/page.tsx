import Link from 'next/link';

import MealsGrid from '@/components/MealsGrid';

type Props = {};

const MealsPage: React.FC<Props> = () => {
  return (
    <>
      <header className='mt-12 mb-20 lg:my-24 mx-auto text-2xl text-[#ddd6cb] w-[90%] max-w-6xl'>
        <h1 className='text-4xl mb-4 font-bold'>
          Delicious meals, created{' '}
          <span className='bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>by you</span>
        </h1>
        <p>Choose a recipe to start cooking. It is easy and fun!</p>
        <p>
          <Link
            href='/meals/share'
            className='inline-block mt-4 py-3 px-4 rounded-lg font-bold text-white bg-linear-to-r from-[#f9572a] to-[#ff9b05]'
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <MealsGrid />
    </>
  );
};

export default MealsPage;
