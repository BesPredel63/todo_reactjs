import React, {useState} from 'react';
import EditButtonSvg from "../../UI/Buttons/svg/EditButtonSvg";
import DeleteButtonSvg from "../../UI/Buttons/svg/DeleteButtonSvg";

const TaskEdit = ({currentTask, update, setIsEditing}) => {

    const [task, setTask] = useState({
        title: currentTask.title,
        categoryId: currentTask.categoryId,
        executeDate: currentTask.executeDate,
        description: currentTask.description
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
                        type="text"
                        value={task.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={task.categoryId}
                        onChange={e => setTask({...task, categoryId: e.target.value})}
                    />
                </div>
                <div className='tasksBlockDate'>
                    <input
                        type="date"
                        value={task.executeDate}
                        onChange={e => setTask({...task, executeDate: e.target.value})}
                    />
                </div>
            </div>
            <div>
                <div className='tasksBlockDescription'>
                    <textarea
                        value={task.description}
                        onChange={e => setTask({...task, description: e.target.value})}
                    />
                </div>
            </div>
            <div className='tasksBlockBtn'>
                <EditButtonSvg onClick={upDateTask}>Сохранить</EditButtonSvg>
                <DeleteButtonSvg onClick={cancelUpdate}>Удалить</DeleteButtonSvg>
            </div>
        </div>
    );
};

export default TaskEdit;