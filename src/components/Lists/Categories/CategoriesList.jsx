import React from 'react';
import CategoriesItem from "./CategoriesItem";

const CategoriesList = ({categories, remove}) => {
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Цвет</th>
                        <th>Изменение списка</th>
                    </tr>
                </thead>
                <CategoriesItem categories={categories} remove={remove}/>
            </table>
        </>
    );
};

export default CategoriesList;