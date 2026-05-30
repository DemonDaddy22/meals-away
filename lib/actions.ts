'use server';

import { redirect } from 'next/navigation';
import { addMeal } from './meals';

const isInvalid = (value: string) => {
  if (!value || value.trim() === '') {
    return true;
  }
  return false;
};

export const handleShareMeal = async (prevState: { error: string | null }, formData: FormData) => {
  console.log({ prevState, formData });
  const meal = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
  };

  if (
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    !meal.image
  ) {
    return {
      error: 'All fields are required',
    };
  }

  if (!meal.creator_email.includes('@')) {
    return {
      error: 'Invalid email address',
    };
  }

  await addMeal(meal);
  redirect('/meals');
};
