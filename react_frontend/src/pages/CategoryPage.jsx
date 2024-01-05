import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";


function CategoryPage() {

    const category = useParams().category;
    const [isLoading, setLoading] = useState(true);
    const [dishes, setDishes] = useState();
    const [categoryName, setCategoryName] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/dishes/?category=${category}`).then(res => {
            setDishes(res.data);
            setLoading(false);
        });
    }, [category]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/categories/${category}`).then(res => {
            setCategoryName(res.data.name);
        });
    }, [category]);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1 className='subtitle'>{categoryName}:</h1>
            <hr width='80%'/>
            <div className='categories'>
                {dishes.map((name) => (
                <p key={name.id}><a className="r" href={`/recipe/${name.id}`}>{name.name}</a></p>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;

