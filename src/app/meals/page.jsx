
import Meals from '@/components/Meals/Meals';

export const metadata = {
    title: "meals",
    description: "meals page",
    keywords: ["meals", "products", "items", "foods"]
};

const MealsPage = () => {
    return (
        <div className='p-12'>
            <h1 className='text-center m-4'>Choose meals of your choice</h1>
            <Meals />
        </div>
    );
};

export default MealsPage;