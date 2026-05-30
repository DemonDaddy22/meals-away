'use client';

import { useFormStatus } from 'react-dom';

type Props = {
  label: string;
};

const MealsFormSubmit: React.FC<Props> = ({ label }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='inline-block px-8 py-3 rounded-sm bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed'
    >
      {pending ? 'Submitting...' : label}
    </button>
  );
};

export default MealsFormSubmit;
