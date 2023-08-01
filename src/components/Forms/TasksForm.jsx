import React, {useState} from 'react';
import EditButtonSvg from "../UI/Buttons/svg/EditButtonSvg";

const TasksForm = ({create}) => {

    const [task, setTask] = useState({
        title: '',
        executeDate: new Date(),
        description: '',
        categoryId: ''
    })

    const addNewTask = (e) => {
        e.preventDefault()
        const tempTask = {
            id: Date.now(),
            ...task
        }
        create(tempTask)
        //console.log('date: ', typeof(tempTask.executeDate))
        setTask({
            title: '',
            executeDate: new Date(),
            description: '',
            categoryId: ''
        })
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
                    <input
                        className='form-control'
                        type="text"
                        placeholder='Выберите категорию'
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
        </div>
    );
};

export default TasksForm;