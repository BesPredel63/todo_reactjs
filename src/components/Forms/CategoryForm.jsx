import React, {useState} from 'react';

const CategoryForm = ({create}) => {

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
        console.log('newCategory:', newCategory)
        create(newCategory)
        setCategory({
            title: '',
            color: ''
        })
    }

    return (
        <div className='row catForm'>
            <h3>Добавить категорию</h3>
            <div className='col-md-8'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Введите название категории'
                    value={category.title}
                    onChange={event => setCategory({...category, title: event.target.value})}
                />
            </div>
            <div className='col-md-1 inputColorBlock'>
                <input
                    type="color"
                    className='form-control inputColorSize'
                    value={category.color}
                    onChange={event => setCategory({...category, color: event.target.value})}
                />
            </div>
            <div className="col-md-auto">
                <button className='btn btn-primary' onClick={addCategory}>Добавить</button>
            </div>
        </div>
    );
};

export default CategoryForm;