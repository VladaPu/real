import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function RecipePage() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/recipe/${id}`).then(res => {
            setRecipe(res.data);
            setLoading(false);
        });
    }, [id]);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <h1 className='subtitle'>{recipe.name}:</h1>
            <hr width='80%'/>
            <div className='recipe'>
                <text style={{ whiteSpace: "pre-line" }}>{recipe.recipe}</text>
            </div>
        </>
    );
}

export default RecipePage;