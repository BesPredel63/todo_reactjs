import React from 'react';

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
                            <button className='btn btn-success'>Изменить</button>
                            <button className='btn btn-danger'>Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TasksList;