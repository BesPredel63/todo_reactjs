import React, {useState} from 'react';
import CategoriesList from "./Lists/Categories/CategoriesList";

const Categories = () => {

    const [categories, setCategories] = useState([
        {id: 1, title: 'Семья', color: '#008000'},
        {id: 2, title: 'Работа', color: '#FF0000'},
        {id: 3, title: 'Личное', color: '#0000FF'},
    ])

    const removeCategory = (category) => {
        setCategories(categories.filter(c => c.id !== category.id))
    }

    return (
        <div>
            <h3>Категории</h3>
            <CategoriesList categories={categories} remove={removeCategory}/>
        </div>
    );
};

export default Categories;