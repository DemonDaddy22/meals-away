import { use } from 'react';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const MealPage: React.FC<Props> = ({ params }) => {
  const { id } = use(params);

  return <h1>Meal - {id}</h1>;
};

export default MealPage;
