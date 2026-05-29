import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

import { getMeal } from '@/lib/meals';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const MealPage: React.FC<Props> = ({ params }) => {
  const { slug } = use(params);
  const meal = getMeal(slug) as MealDbRow;

  if (!meal) {
    notFound();
  }

  const { title, image, summary, creator, creator_email, instructions } = meal;

  return (
    <>
      <header className='mt-12 mb-8 lg:mt-24 flex gap-8 mx-auto text-2xl text-[#ddd6cb] w-[90%] max-w-6xl'>
        <div className='relative h-96 w-full mb-8'>
          <Image src={image} alt={title} className='object-cover rounded-md' fill />
        </div>
        <div className=''>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <p className='text-sm text-[#cfa69b] italic mb-4'>
            by{' '}
            <a href={`mailto:${creator_email}`} className='text-[#f9572a] hover:underline'>
              {creator}
            </a>
          </p>
          <p className='text-lg leading-relaxed'>{summary}</p>
        </div>
      </header>
      <main className='my-4 mx-auto text-[#ddd6cb] w-[90%] max-w-6xl p-8 pt-2 bg-linear-to-r from-[#2c1e19] to-[#25200f] rounded-sm shadow-[0_0_0.75rem_rgba(0,0,0,0.3)]'>
        <div
          className='text-lg leading-relaxed'
          dangerouslySetInnerHTML={{ __html: instructions.replace(/\n/g, '<br />') }}
        ></div>
      </main>
    </>
  );
};

export default MealPage;
