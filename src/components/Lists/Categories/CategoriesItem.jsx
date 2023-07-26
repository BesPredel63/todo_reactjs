import React from 'react';

const CategoriesItem = ({categories}) => {
    return (
        <tbody>
        {
            categories.map(cat =>
                <tr>
                    <td>{cat.id}</td>
                    <td>{cat.title}</td>
                    <td>{cat.color}</td>
                </tr>
            )
        }
        </tbody>
    );
};

export default CategoriesItem;