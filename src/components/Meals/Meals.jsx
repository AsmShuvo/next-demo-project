"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            console.log(data);
            setMeals(data.meals);
        } catch (error) {
            console.log("Error fetching data: ", error); 
            alert("No data found");
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div>
            <input
                onChange={handleSearch}
                type='text'
                className='p-2 m-1'
                placeholder='search meals..'
                value={search}
            />
            <button onClick={() => loadData()} type="submit">Search</button>
            <div className="mt-12 grid grid-cols-3 gap-4">
                {
                    meals?.length > 0 &&
                    meals?.map((meal) => (
                        <div key={meal.idMeal} className="border p-4">
                            <Image width={500} height={500} src={meal.strMealThumb} alt=""/>
                            <h6>{meal.strMeal}</h6>
                            <h6>{meal.strInstructions}</h6>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Meals;