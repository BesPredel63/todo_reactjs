import React, {useEffect, useState} from 'react';
import TasksList from "./Lists/Tasks/TasksList";
import '../components/Lists/Tasks/tasksStyle.css'
import TasksForm from "./Forms/TasksForm";
import ModalTasks from "./UI/ModalWindow/ModalTasks";
import AddButtonSvg from "./UI/Buttons/svg/AddButtonSvg";
import {urlGoals} from "../url/urlApi";
import categories from "./Categories";

const Tasks = () => {

    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         title: 'Реализовать Frontend часть',
    //         executeDate: '2023-07-31',
    //         description: 'Реализовать CRUD для всех компонентов. ' +
    //             'И еще какой то текст, для того чтобы проверить длину, на которую заполнится пространство.',
    //         categoryId: 'Рабоча'
    //     },
    //     {
    //         id: 2,
    //         title: 'Реализовать Backend часть',
    //         executeDate: '2023-08-07',
    //         description: 'Прием запросов с помощью JSON',
    //         categoryId: 'Семья'
    //     },
    //     {
    //         id: 3,
    //         title: 'Реализовать авторизацию',
    //         executeDate: '2023-08-14',
    //         description: 'Настроить вход и регистрацию',
    //         categoryId: 'Личное'
    //     },
    // ])

    const [goals, setGoals] = useState([])
    const [modal, setModal] = useState(false)

    async function getAllGoals() {
        try {
            await fetch(urlGoals)
                .then(response => response.json())
                .then(response => setGoals(response))
        } catch (error) {
            console.error('ERROR: ', error)
        }
    }

    useEffect(() => {
        getAllGoals()
    }, [])

    async function createTask (newTask) {
        try {
            await fetch(urlGoals, {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(newTask),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setGoals(newTask)
            getAllGoals()
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    const upDateTask = (editTask) => {
        // tasks.forEach((element, index) => {
        //     if (element.id === editTask.id) {
        //         tasks[index] = editTask
        //     }
        // })
    }

    async function remoteTask (delTask) {
        try {
            await fetch(urlGoals + '/' + `${delTask.id}`, {
                method: "DELETE",
                mode: 'cors',
                body: JSON.stringify(delTask),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setGoals(delTask)
            getAllGoals()
        } catch (error) {
            console.error("Ошибка:", error);
        }
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

            <TasksList tasks={goals} update={upDateTask} remote={remoteTask}/>
        </div>
    );
};

export default Tasks;