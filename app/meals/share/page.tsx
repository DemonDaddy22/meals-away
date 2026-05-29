import ImagePicker from '@/components/ImagePicker';
import { handleShareMeal } from '@/lib/actions';

type Props = {};

const ShareMealPage: React.FC<Props> = () => {
  return (
    <>
      <header className='flex flex-col w-[90%] max-w-300 mx-auto mt-12 mb-10 text-[#ddd6cb] text-[1.5rem]'>
        <h1>
          Share your{' '}
          <span className='bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className='w-[90%] max-w-300 mx-auto my-4 text-white'>
        <form className='w-full max-w-200' action={handleShareMeal}>
          <div className='flex gap-4 my-3'>
            <div>
              <label
                className='block mb-2 text-base font-[Montserrat] uppercase text-[#b3aea5] font-bold'
                htmlFor='name'
              >
                Your name
              </label>
              <input
                className='block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat] text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]'
                type='text'
                id='name'
                name='name'
                required
              />
            </div>
            <div>
              <label
                className='block mb-2 text-base font-[Montserrat] uppercase text-[#b3aea5] font-bold'
                htmlFor='email'
              >
                Your email
              </label>
              <input
                className='block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat] text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]'
                type='email'
                id='email'
                name='email'
                required
              />
            </div>
          </div>
          <div className='my-3'>
            <label
              className='block mb-2 text-base font-[Montserrat] uppercase text-[#b3aea5] font-bold'
              htmlFor='title'
            >
              Title
            </label>
            <input
              className='block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat] text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]'
              type='text'
              id='title'
              name='title'
              required
            />
          </div>
          <div className='my-3'>
            <label
              className='block mb-2 text-base font-[Montserrat] uppercase text-[#b3aea5] font-bold'
              htmlFor='summary'
            >
              Short Summary
            </label>
            <input
              className='block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat] text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]'
              type='text'
              id='summary'
              name='summary'
              required
            />
          </div>
          <div className='my-3'>
            <label
              className='block mb-2 text-base font-[Montserrat] uppercase text-[#b3aea5] font-bold'
              htmlFor='instructions'
            >
              Instructions
            </label>
            <textarea
              id='instructions'
              name='instructions'
              rows={10}
              required
              className='block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat] text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]'
            ></textarea>
          </div>
          <ImagePicker label='Pick an image' name='image' />
          <div className='text-right my-4'>
            <button
              type='submit'
              className='inline-block px-8 py-3 rounded-sm bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed'
            >
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
