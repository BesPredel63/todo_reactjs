import React from 'react';
import EditButtonNoSvg from "../../UI/Buttons/noSvg/EditButtonNoSvg";
import DeleteButtonNoSvg from "../../UI/Buttons/noSvg/DeleteButtonNoSvg";
import EditButtonSvg from "../../UI/Buttons/svg/EditButtonSvg";
import DeleteButtonSvg from "../../UI/Buttons/svg/DeleteButtonSvg";

const TasksList = ({tasks}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div>
            <h3>Задачи</h3>
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
                            <EditButtonSvg>Изменить</EditButtonSvg>
                            <DeleteButtonSvg>Удалить</DeleteButtonSvg>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TasksList;