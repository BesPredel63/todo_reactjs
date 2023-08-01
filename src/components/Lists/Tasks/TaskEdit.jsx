import React, {useState} from 'react';
import EditButtonSvg from "../../UI/Buttons/svg/EditButtonSvg";

const TaskEdit = ({current}) => {

    const [task, setTask] = useState({
        title: current.title,
        categoryId: current.categoryId,
        executeDate: current.executeDate,
        description: current.description
    })

    console.log('current: ', current)

    return (
        <div>
            <h3>Добавить задачу</h3>
            <div className='row'>
                <div className='col-md-6'>
                    <input
                        className='form-control'
                        type="text"
                        value={task.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </div>
                <div className='col-md-4'>
                    <input
                        className='form-control'
                        type="text"
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
                    value={task.description}
                    onChange={e => setTask({...task, description: e.target.value})}
                />
            </div>
            <EditButtonSvg>Сохранить</EditButtonSvg>
        </div>
    );
};

export default TaskEdit;