import React, {useEffect, useState} from 'react';
import axios from "axios";


function CategoryPage() {

    const [isLoading, setLoading] = useState(true);
    const [dishes, setDishes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/dishes`).then(res => {
            setDishes(res.data);
            setLoading(false);
        });
    }, []);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1 className='subtitle'>Все рецепты:</h1>
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

