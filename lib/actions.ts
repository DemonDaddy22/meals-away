'use server';

import { redirect } from 'next/navigation';
import { addMeal } from './meals';

export const handleShareMeal = async (formData: FormData) => {
  const meal = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  };

  await addMeal(meal);
  redirect('/meals');
};
