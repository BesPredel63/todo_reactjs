import React from 'react';

const CategoriesItem = ({categories, remove}) => {

    if (!categories.length) {
        return (
            <tbody>
                <tr>
                    <td colSpan='4'>
                        <h4 style={{textAlign: 'center'}}>Список пуст</h4>
                    </td>
                </tr>
            </tbody>
        )
    }

    return (
        <tbody>
        {
            categories.map((cat, index) =>
                <tr key={cat.id}>
                    <td>{index + 1}</td>
                    <td>{cat.title}</td>
                    <td>{cat.color}</td>
                    <td>
                        <button className='btn btn-success'>Изменить</button>
                        <button className='btn btn-danger' onClick={() => remove(cat)}>Удалить</button>
                    </td>
                </tr>
            )
        }
        </tbody>
    );
};

export default CategoriesItem;