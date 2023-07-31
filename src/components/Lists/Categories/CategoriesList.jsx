import React from 'react';
import CategoriesItem from "./CategoriesItem";

const CategoriesList = ({categories, update, remove}) => {
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='col-md-1'>#</th>
                        <th className='col-md-6'>Название</th>
                        <th className='col-md-2'>Цвет</th>
                        <th className='col-md-3'>Изменение списка</th>
                    </tr>
                </thead>
                <CategoriesItem categories={categories} update={update} remove={remove}/>
            </table>
        </>
    );
};

export default CategoriesList;