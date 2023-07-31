import React, {useState} from 'react';
import CategoriesItemEdit from "./CategoriesItemEdit";

const CategoriesItem = ({categories, update, remove}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [currentCat, setCurrentCat] = useState()

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
            categories.map((cat, index) => (
                currentCat !== cat || isEditing !== true
                    ?
                        <tr key={cat.id}>
                            <td>{index + 1}</td>
                            <td>{cat.title}</td>
                            <td><span className='colorCat' style={{background: `${cat.color}`}}></span></td>
                            <td className='btnSetting'>
                                <button className='btn btn-success' onClick={() => {
                                    setCurrentCat(cat)
                                    setIsEditing(true)
                                }}>Изменить</button>
                                <button className='btn btn-danger' onClick={() => remove(cat)}>Удалить</button>
                            </td>
                        </tr>
                    : <CategoriesItemEdit currentCat={currentCat} update={update} setIsEditing={setIsEditing}/>
                )
            )
        }
        </tbody>
    );
};

export default CategoriesItem;