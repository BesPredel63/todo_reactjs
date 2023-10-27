import React, {useState, useEffect} from 'react';
import EditButtonSvg from "../UI/Buttons/svg/EditButtonSvg";
import {urlCategories} from "../../url/urlApi";

const TasksForm = ({create}) => {

    const [task, setTask] = useState({
        title: '',
        executeDate: new Date(),
        description: '',
        isActive: true,
        categoryId: ''
    })
    const [categories, setCategories] = useState([])

    async function getAllCategories() {
        try {
            await fetch(urlCategories)
                .then(response => response.json())
                .then(response => setCategories(response))
        } catch (error) {
            console.error('ERROR: ', error)
        }
    }
    useEffect(() => {
        getAllCategories()
    }, [])


    const options = categories.map((cat) => {
            return <option value={cat.id} key={cat.id}>{cat.title}</option>
        })

    const addNewTask = (e) => {
        e.preventDefault()
        const tempTask = {
            ...task
        }
        create(tempTask)
        setTask({
            title: '',
            executeDate: new Date(),
            description: '',
            isActive: true,
            categoryId: ''
        })
    }

    return (
        <div>
            <h3>Добавить задачу</h3>
            <div className='row'>
                <div className='col-md-6'>
                    <input
                        className='form-control'
                        type="text"
                        placeholder='Введите название задачи'
                        value={task.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-select'
                        value={task.categoryId}
                        onChange={e => setTask({...task, categoryId: e.target.value})}
                    >
                        {options}
                    </select>
                </div>
                <div className='col-md-2'>
                    <input
                        className='form-control'
                        type="date"
                        value={task.executeDate}
                        onChange={e => setTask({...task, executeDate: e.target.value})}
                    />
                </div>
            </div>
            <div className='row'>
                <textarea
                    className='form-control'
                    cols="30"
                    rows="6"
                    placeholder='Описание'
                    value={task.description}
                    onChange={e => setTask({...task, description: e.target.value})}
                />
            </div>
            <EditButtonSvg onClick={addNewTask}>Сохранить</EditButtonSvg>
        </div>
    );
};

export default TasksForm;