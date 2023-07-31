import React from 'react';
import EditButtonNoSvg from "../../UI/Buttons/noSvg/EditButtonNoSvg";
import DeleteButtonNoSvg from "../../UI/Buttons/noSvg/DeleteButtonNoSvg";

const TasksList = ({tasks, remote}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    if (!tasks.length) {
        return (
            <h4>Список задач пуст</h4>
        )
    }

    return (
        <div>
            {
                tasks.map((t, index) =>
                    <div className='row tasksBlock' key={t.id}>
                        <div className='tasksBlockItem'>
                            <div>
                                <strong>{index + 1}. {t.title}</strong>
                            </div>
                            <div>
                                <strong>Категория: </strong><span style={{color: 'red'}}>Работа</span>
                            </div>
                            <div className='tasksBlockDate'>
                                <strong>Дата исполнения:</strong> {t.executeDate.toLocaleDateString(undefined, options)}
                            </div>
                        </div>
                        <div>
                            <div className='tasksBlockDescription'>
                                {t.description}
                            </div>
                        </div>
                        <div className='tasksBlockBtn'>
                            <EditButtonNoSvg>Изменить</EditButtonNoSvg>
                            <DeleteButtonNoSvg onClick={() => remote(t)}>Удалить</DeleteButtonNoSvg>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TasksList;