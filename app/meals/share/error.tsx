'use client';

type Props = {};

const ErrorPage: React.FC<Props> = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center self-center p-4'>
      <h1 className='text-6xl font-bold mb-4 bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>
        Uh-oh!
      </h1>
      <p className='text-2xl text-gray-300'>Failed to create meal.</p>
    </div>
  );
};

export default ErrorPage;
