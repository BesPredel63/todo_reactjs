import React, {useState} from 'react';
import EditButtonSvg from "../UI/Buttons/svg/EditButtonSvg";
import SelectCategories from "../UI/Selects/SelectCategories";
import DeleteButtonSvg from "../UI/Buttons/svg/DeleteButtonSvg";

const GoalsForm = ({create, setVisible}) => {

    const [task, setTask] = useState({
        title: '',
        executeDate: new Date(),
        description: '',
        isActive: true,
        categoryId: ''
    })

    const addNewTask = (e) => {
        e.preventDefault()
        const tempTask = {
            ...task
        }
        create(tempTask)
        setTask({
            title: '',
            executeDate: new Date(),
            description: '',
            isActive: true,
            categoryId: ''
        })
        setVisible(false)
    }

    const cancelAdded = (e) => {
        e.preventDefault()
        setVisible(false)
    }

    return (
        <div>
            <h3>Добавить задачу</h3>
            <div className='row'>
                <div className='col-md-6'>
                    <input
                        className='form-control'
                        type="text"
                        placeholder='Введите название задачи'
                        value={task.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </div>
                <div className='col-md-4'>
                    <SelectCategories
                        value={task.categoryId}
                        onChange={e => setTask({...task, categoryId: e.target.value})}
                    />
                </div>
                <div className='col-md-2'>
                    <input
                        className='form-control'
                        type="date"
                        value={task.executeDate}
                        onChange={e => setTask({...task, executeDate: e.target.value})}
                    />
                </div>
            </div>
            <div className='row'>
                <textarea
                    className='form-control'
                    cols="30"
                    rows="6"
                    placeholder='Описание'
                    value={task.description}
                    onChange={e => setTask({...task, description: e.target.value})}
                />
            </div>
            <EditButtonSvg onClick={addNewTask}>Сохранить</EditButtonSvg>
            <DeleteButtonSvg onClick={cancelAdded}>Отмена</DeleteButtonSvg>
        </div>
    );
};

export default GoalsForm;