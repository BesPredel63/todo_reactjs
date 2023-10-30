import React, {useState} from 'react';
import EditButtonSvg from "../../UI/Buttons/svg/EditButtonSvg";
import DeleteButtonSvg from "../../UI/Buttons/svg/DeleteButtonSvg";

const TaskEdit = ({currentTask, categories, update, setIsEditing}) => {

    const [task, setTask] = useState({
        title: currentTask.title,
        categoryId: currentTask.categoryId,
        executeDate: currentTask.executeDate,
        description: currentTask.description
    })

    const options = categories.map((cat) => {
        return <option value={cat.id} key={cat.id}>{cat.title}</option>
    })

    const upDateTask = (e) => {
        e.preventDefault()
        let tempTask = {
            id: currentTask.id,
            ...task
        }
        update(tempTask)
        setIsEditing(false)
    }

    const cancelUpdate = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <div className='row tasksBlock' key={task.id}>
            <div className='tasksBlockItem'>
                <div>
                    <input
                        className='form-control'
                        type="text"
                        value={task.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </div>
                <div>
                    <select
                        className='form-select'
                        value={task.categoryId}
                        onChange={e => setTask({...task, categoryId: e.target.value})}
                    >
                        {options}
                    </select>
                </div>
                <div className='tasksBlockDate'>
                    <input
                        className='form-control'
                        type="date"
                        value={task.executeDate}
                        onChange={e => setTask({...task, executeDate: e.target.value})}
                    />
                </div>
            </div>
            <div>
                <div className='tasksBlockDescription'>
                    <textarea
                        className='form-control'
                        cols="30"
                        rows="6"
                        value={task.description}
                        onChange={e => setTask({...task, description: e.target.value})}
                    />
                </div>
            </div>
            <div className='tasksBlockBtn'>
                <button className='btn btn-outline-success' onClick={upDateTask}>Сохранить</button>
                <button className='btn btn-outline-danger' onClick={cancelUpdate}>Отмена</button>
            </div>
        </div>
    );
};

export default TaskEdit;