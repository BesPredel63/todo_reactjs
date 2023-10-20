import React, {useState} from 'react';

const CategoriesItemEdit = ({currentCat, update, setIsEditing}) => {

    const [cat, setCat] = useState({
        title: currentCat.title,
        color: currentCat.color
    })

    const upDateCategory = (e) => {
        e.preventDefault()
        let tempCat = {
            id: currentCat.id,
            ...cat
        }
        update(tempCat)
        setIsEditing(false)
    }

    const cancelUpdate = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <tr key={cat.id}>
            <td></td>
            <td>
                <input
                    type='text'
                    className='form-control'
                    value={cat.title}
                    onChange={e => setCat({...cat, title: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="color"
                    className='form-control inputColorSize'
                    value={cat.color}
                    onChange={e => setCat({...cat, color: e.target.value})}
                />
            </td>
            <td className='btnSetting'>
                <button className='btn btn-outline-success' onClick={upDateCategory}>Сохранить</button>
                <button className='btn btn-outline-danger' onClick={cancelUpdate}>Отмена</button>
            </td>
        </tr>
    );
};

export default CategoriesItemEdit;