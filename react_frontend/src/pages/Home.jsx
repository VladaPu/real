import React, {useState, useEffect} from 'react';
import axios from "axios";


function Home() {
    const [isLoading, setLoading] = useState(true);  // Флаг готовности результата axios
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/categories/").then(res => {
            setCategories(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <h1 className='subtitle'>Выберите категорию:</h1>
            <hr width='80%'/>
        <div className="button">
            {categories.map((name) => (
                <a key={name.name} className="s" href={`/category/${name.id}`}>{name.name}</a>
            ))}
        </div>
        </>
    );
}


export default Home

