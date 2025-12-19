import { MEALS } from '@/data/meals';
import Meal from '../Meal';

type Props = {};

const MealsGrid: React.FC<Props> = () => {
  return (
    <ul className='w-[90%] max-w-360 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto p-0 list-none'>
      {MEALS.map(meal => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
