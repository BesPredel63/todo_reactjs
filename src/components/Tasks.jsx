import React, {useState} from 'react';
import TasksList from "./Lists/Tasks/TasksList";
import '../components/Lists/Tasks/tasksStyle.css'
import TasksForm from "./Forms/TasksForm";
import ModalTasks from "./UI/ModalWindow/ModalTasks";
import AddButtonSvg from "./UI/Buttons/svg/AddButtonSvg";

const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Реализовать Frontend часть',
            executeDate: '2023-07-31',
            description: 'Реализовать CRUD для всех компонентов. ' +
                'И еще какой то текст, для того чтобы проверить длину, на которую заполнится пространство.',
            categoryId: 'Рабоча'
        },
        {
            id: 2,
            title: 'Реализовать Backend часть',
            executeDate: '2023-08-07',
            description: 'Прием запросов с помощью JSON',
            categoryId: 'Семья'
        },
        {
            id: 3,
            title: 'Реализовать авторизацию',
            executeDate: '2023-08-14',
            description: 'Настроить вход и регистрацию',
            categoryId: 'Личное'
        },
    ])

    const [modal, setModal] = useState(false)

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
        setModal(false)
    }

    const remoteTask = (delTask) => {
        setTasks(tasks.filter(t => t.id !== delTask.id))
    }


    return (
        <div>
            <h2>Задачи</h2>

            <AddButtonSvg onClick={() => setModal(true)}>
                Новая задача
            </AddButtonSvg>
            <ModalTasks visible={modal} setVisible={setModal}>
                <TasksForm create={createTask}/>
            </ModalTasks>

            <TasksList tasks={tasks} remote={remoteTask}/>
        </div>
    );
};

export default Tasks;