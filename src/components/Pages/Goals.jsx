import React, {useEffect, useMemo, useState} from 'react';
import GoalsList from "../Lists/Goals/GoalsList";
import '../Lists/Goals/tasksStyle.css'
import GoalsForm from "../Forms/GoalsForm";
import ModalGoals from "../UI/ModalWindow/ModalGoals";
import AddButtonSvg from "../UI/Buttons/svg/AddButtonSvg";
import {urlGoals} from "../../url/urlApi";
import GoalFilter from "../Filters/GoalFilter";

const Goals = () => {

    const [goals, setGoals] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedGoals = useMemo(() => {
        if (filter.sort) {
            return [...goals].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return Array.from(goals)
    },[filter.sort, goals])

    const sortedAndSearchedUsers = useMemo(() => {
        return sortedGoals.filter(goal => {
            return goal.title.toLowerCase().includes(filter.query.toLowerCase()) ||
                   goal.description.toLowerCase().includes(filter.query.toLowerCase()) ||
                   goal.executeDate.toLowerCase().includes(filter.query.toLowerCase())
        })
    }, [filter.query, sortedGoals])

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

    async function upDateTask (editTask) {
        try {
            await fetch(urlGoals + '/' + `${editTask.id}`, {
                method: "PUT",
                mode: 'cors',
                body: JSON.stringify(editTask),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setGoals(editTask)
            getAllGoals()
        } catch (error) {
            console.error("Ошибка:", error);
        }
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

            <AddButtonSvg onClick={()=>setModal(true)}>
                Новая задача
            </AddButtonSvg>
            <ModalGoals visible={modal} setVisible={setModal}>
                <GoalsForm create={createTask} setVisible={setModal} />
            </ModalGoals>
            <GoalFilter
                filter={filter}
                setFilter={setFilter}
            />
            <GoalsList goals={sortedAndSearchedUsers} update={upDateTask} remote={remoteTask}/>
        </div>
    );
};

export default Goals;