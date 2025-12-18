import Link from 'next/link';
import SlideShow from '../Slideshow';

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <>
      <header className='flex gap-12 mt-32 mb-12 mx-auto max-w-6xl w-[90%]'>
        <div className='w-2xl h-96'>
          <SlideShow />
        </div>
        <div>
          <div>
            <h1 className='font-bold text-3xl mb-2 uppercase tracking-wide bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>
              NextLevel Food for
              <br />
              NextLevel Foodies
            </h1>
            <p className='text-[#ddd6cb] text-2xl'>Taste & share food from all over the world.</p>
          </div>
          <div className='text-xl flex gap-4'>
            <Link
              href='/community'
              className='inline-block mt-4 py-2 px-4 rounded-md font-normal text-[#ff9b05] bg-transparent pl-0 hover:text-[#f9b241] active:text-[#f9b241]'
            >
              Join the Community
            </Link>
            <Link
              href='/meals'
              className='inline-block mt-4 px-4 py-2 rounded-md font-bold text-white bg-linear-to-r from-[#f9572a] to-[#ffc905] hover:from-[#fd4715] hover:to-[#f9b241] active:from-[#fd4715] active:to-[#f9b241]'
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <div className='self-center'>
        <section className='flex flex-col text-[#ddd6cb] text-2xl w-[90%] max-w-3xl text-center my-8 mx-auto'>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
        <section className='flex flex-col text-[#ddd6cb] text-2xl w-[90%] max-w-3xl text-center my-8 mx-auto'>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </div>
    </>
  );
};

export default Home;
