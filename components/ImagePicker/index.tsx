'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

type Props = {
  label: string;
  name: string;
};

const ImagePicker: React.FC<Props> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImagePick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex gap-2 items-start'>
      <div className='w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative'>
        {pickedImage ? (
          <Image src={pickedImage as string} alt='Picked' className='w-full h-auto rounded mb-4' fill />
        ) : (
          <p className='text-gray-400 italic mb-4'>No image picked</p>
        )}
      </div>
      <input
        required
        ref={inputRef}
        type='file'
        id={name}
        name={name}
        accept='image/png, image/jpeg, image/jpg'
        className='hidden'
        onChange={handleImageChange}
      />
      <button
        type='button'
        className='px-6 py-2 bg-[#a4abb9] rounded-sm cursor-pointer hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]'
        onClick={handleImagePick}
      >
        {label}
      </button>
    </div>
  );
};

export default ImagePicker;
