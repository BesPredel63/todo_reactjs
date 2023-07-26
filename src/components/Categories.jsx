import React, {useState} from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([
        {id: 1, title: 'Семья', color: '#008000'},
        {id: 2, title: 'Работа', color: '#FF0000'},
        {id: 3, title: 'Личное', color: '#0000FF'},
    ])

    return (
        <div>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цвет</th>
                </thead>
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
            </table>
        </div>
    );
};

export default Categories;