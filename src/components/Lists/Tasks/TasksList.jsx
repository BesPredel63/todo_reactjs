import React, {useState} from 'react';
import EditButtonNoSvg from "../../UI/Buttons/noSvg/EditButtonNoSvg";
import DeleteButtonNoSvg from "../../UI/Buttons/noSvg/DeleteButtonNoSvg";
import TaskEdit from "./TaskEdit";

const TasksList = ({tasks, categories, update, remote}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [currentTask, setCurrentTask] = useState()

    // Настройки для локализации даты - необходимо доработать
    // при сохранении новой записи выдает ошибку, возможно нужна проверка данных или на выхоже получаем не тот тип данных
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    //     .toLocaleDateString(undefined, options)

    if (!tasks.length) {
        return (
            <h4>Список задач пуст</h4>
        )
    }

    return (
        <div>
            {
                tasks.map((t, index) =>
                    currentTask !== t || isEditing !== true
                    ?
                    <div className='row tasksBlock' key={t.id}>
                        <div className='tasksBlockItem'>
                            <div>
                                <strong>{index + 1}. {t.title}</strong>
                            </div>
                            <div>
                                <strong>Категория: </strong><span style={{color: `${t.category.color}`}}>{t.category.title}</span>
                            </div>
                            <div className='tasksBlockDate'>
                                <strong>Дата исполнения:</strong> {t.executeDate}
                            </div>
                        </div>
                        <div>
                            <div className='tasksBlockDescription'>
                                {t.description}
                            </div>
                        </div>
                        <div className='tasksBlockBtn'>
                            <EditButtonNoSvg onClick={() => {
                                setCurrentTask(t)
                                setIsEditing(true)}}
                            >
                                Изменить
                            </EditButtonNoSvg>
                            <DeleteButtonNoSvg onClick={() => remote(t)}>Удалить</DeleteButtonNoSvg>
                        </div>
                    </div>
                    :
                        <TaskEdit currentTask={currentTask} categories={categories} update={update} setIsEditing={setIsEditing}/>
                )
            }
        </div>
    );
};

export default TasksList;