import React, { useEffect, useState } from "react";
import Recipe from '../data.json';
import { Link } from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Recipe);
    }, []);

    return (
        <div className="bg-green-950 min-h-screen w-screen py-7">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-10">
                {data.map((recipe) => (
                    <div 
                        key={recipe.id} 
                        className="bg-green-100 flex flex-col rounded shadow hover:scale-105 transition-transform duration-500 ease-in-out"
                    >
                        <Link to={`/recipe/${recipe.id}`}>
                            <img 
                                src={recipe.image} 
                                alt="food" 
                                className="rounded h-52 w-full object-cover" 
                            />
                            <h1 className="text-green-800 text-base font-bold px-3 mt-6 uppercase hover:text-green-700">
                                {recipe.title}
                            </h1>
                            <p className="mt-2 mb-7 px-3 text-gray-600 text-sm">
                                {recipe.summary}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
