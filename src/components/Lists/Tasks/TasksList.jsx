import React from 'react';

const TasksList = ({tasks}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div>
            <h3>Задачи</h3>
            {
                tasks.map(t =>
                    <div className='row tasksBlock' key={t.id}>
                        <strong>{t.id}. {t.title}</strong>
                        <div className='tasksBlockItem'>
                            <div className='tasksBlockDescription'>
                                {t.description}
                            </div>
                            <div className='tasksBlockDate'>
                                <strong>Дата исполнения:</strong> {t.executeDate.toLocaleDateString(undefined, options)}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TasksList;