import { useEffect, useState } from "react";
import React from "react";
import Recipe from '../data.json'

const HomePage = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        setdata(Recipe)
    }, []);

    return (
        <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 my-8">
            {data.map((recipe) => (
                <div key={recipe.id} className="">
                   <div className="bg-green-100 w-64 md:w-60 md:h-90 flex flex-col rounded shadow hover:scale-110 transition-transform duration-500 ease-in-out">
                        <img src={recipe.image} alt="food" className="rounded h-52" />
                        <h1 className="text-green-800 text-base font-bold px-3 mt-6 uppercase hover:text-green-700">{recipe.title}</h1>
                        <p className="max-w-72 mt-2 mb-7 px-3 text-gray-600 text-sm">{recipe.summary}</p>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
