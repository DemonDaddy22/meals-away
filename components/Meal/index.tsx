import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  id: string;
  image: string;
  summary: string;
  creator: string;
};

const Meal: React.FC<Props> = ({ title, id, image, summary, creator }) => {
  return (
    <article className='flex flex-col justify-between h-full rounded-sm overflow-hidden shadow-[0_0_0.75rem_rgba(0,0,0,0.3)] ease-in-out text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]'>
      <header>
        <div className='relative h-60'>
          <Image src={image} alt={title} className='object-cover' fill />
        </div>
        <div className='pt-2 px-4'>
          <h2 className='m-0 text-2xl'>{title}</h2>
          <p className='text-[0.75rem] text-[#cfa69b] italic'>by {creator}</p>
        </div>
      </header>
      <div className='flex flex-col justify-between h-full'>
        <p className='p-4 pb-0'>{summary}</p>
        <div className='p-4 text-right'>
          <Link
            href={`/meals/${id}`}
            className='inline-block mt-4 py-2 px-4 rounded-lg font-bold bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Meal;
