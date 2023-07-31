import React, {useState} from 'react';

import '../components/Lists/Tasks/tasksStyle.css'
import TasksList from "./Lists/Tasks/TasksList";

const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Реализовать Frontend часть',
            executeDate: new Date('2023-07-31'),
            description: 'Реализовать CRUD для всех компонентов. И еще какой то текст, для того чтобы проверить длину, на которую заполнится пространство',
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



    return (
        <TasksList tasks={tasks} />
    );
};

export default Tasks;