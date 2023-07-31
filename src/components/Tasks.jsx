import React, {useState} from 'react';
// import TasksList from "./Lists/Tasks/TasksList";

import '../components/Lists/Tasks/tasksStyle.css'
import TasksForm from "./Forms/TasksForm";

const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Реализовать Frontend часть',
            executeDate: new Date('2023-07-31'),
            description: 'Реализовать CRUD для всех компонентов. ' +
                'И еще какой то текст, для того чтобы проверить длину, на которую заполнится пространство.',
            categoryId: 1
        },
        {
            id: 2,
            title: 'Реализовать Backend часть',
            executeDate: new Date('2023-08-07'),
            description: 'Прием запросов с помощью JSON',
            categoryId: 2
        },
        {
            id: 3,
            title: 'Реализовать авторизацию',
            executeDate: new Date('2023-08-14'),
            description: 'Настроить вход и регистрацию',
            categoryId: 3
        },
    ])

    // const remoteTask = (delTask) => {
    //     setTasks(tasks.filter(t => t.id !== delTask.id))
    // }


    return (
        <>
            <h2>Задачи</h2>
            <TasksForm />
            {/*<TasksList tasks={tasks} remote={remoteTask}/>*/}
        </>
    );
};

export default Tasks;