import React from 'react';
import CategoriesItem from "./CategoriesItem";

const CategoriesList = ({categories}) => {
    return (
        <>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цвет</th>
                </thead>
                <CategoriesItem categories={categories}/>
            </table>
        </>
    );
};

export default CategoriesList;