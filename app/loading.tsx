type Props = {};

const LoadingPage: React.FC<Props> = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center self-center p-4'>
      <p className='text-xl text-gray-300'>Loading...</p>
    </div>
  );
};

export default LoadingPage;
