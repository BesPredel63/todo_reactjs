import React, {useState} from 'react';

const CategoryForm = ({create}) => {

    const defaultColor = '#0000FF'

    const [category, setCategory] = useState({
        title: '',
        color: ''
    })

    const addCategory = (e) => {
        e.preventDefault()
        const newCategory = {
            id: Date.now(),
            ...category
        }
        create(newCategory)
        setCategory({
            title: '',
            color: ''
        })
    }

    return (
        <div className='row'>
            <div className='col-md-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Введите название категории'
                    value={category.title}
                    onChange={event => setCategory({...category, title: event.target.value})}
                />
            </div>
            <div className='col-md-3'>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={defaultColor}
                    value={category.color}
                    onChange={event => setCategory({...category, color: event.target.value})}
                />
            </div>
            <div className="col-md-3">
                <button className='btn btn-primary' onClick={addCategory}>Добавить</button>
            </div>
        </div>
    );
};

export default CategoryForm;