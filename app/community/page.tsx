import Image from 'next/image';

import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import mealIcon from '@/assets/icons/meal.png';

type Props = {};

const CommunityPage: React.FC<Props> = () => {
  return (
    <>
      <header className='my-12 lg:my-24 mx-auto text-center w-[90%] max-w-6xl text-2xl text-[#ddd6cb]'>
        <h1 className='mb-6 text-6xl font-bold'>
          One shared passion:{' '}
          <span className='bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <div className='w-[90%] max-w-4xl my-0 mx-auto text-center'>
        <h2 className='text-4xl font-bold text-[#ddd6cb] mb-12'>Community Perks</h2>
        <ul className='list-none flex flex-col lg:flex-row gap-12 lg:gap-16 p-0 my-12 mx-0'>
          <li className='flex flex-col items-center gap-4 flex-1'>
            <Image className='w-32 h-32 object-contain' src={mealIcon} alt='A delicious meal' />
            <p className='text-lg font-semibold m-0 text-[#ddd6cb]'>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center gap-4 flex-1'>
            <Image className='w-32 h-32 object-contain' src={communityIcon} alt='A crowd of people, cooking' />
            <p className='text-lg font-semibold m-0 text-[#ddd6cb]'>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center gap-4 flex-1'>
            <Image className='w-32 h-32 object-contain' src={eventsIcon} alt='A crowd of people at a cooking event' />
            <p className='text-lg font-semibold m-0 text-[#ddd6cb]'>Participate in exclusive events</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommunityPage;
