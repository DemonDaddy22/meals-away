type Props = {};

const NotFoundPage: React.FC<Props> = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center self-center p-4'>
      <h1 className='text-6xl font-bold mb-4 bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>
        404
      </h1>
      <p className='text-2xl text-gray-300'>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
