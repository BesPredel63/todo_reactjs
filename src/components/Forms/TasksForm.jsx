import React from 'react';
import AddButtonNoSvg from "../UI/Buttons/noSvg/AddButtonNoSvg";

const TasksForm = () => {
    return (
        <div>
            <h3>Добавить задачу</h3>
            <div className='row'>
                <div className='col-md-6'>
                    <input className='form-control' type="text" placeholder='Введите название задачи'/>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text"  placeholder='Выберите категорию'/>
                </div>
                <div className='col-md-2'>
                    <input className='form-control' type="date"/>
                </div>
            </div>
            <div className='row'>
                <textarea className='form-control' name="" id="" cols="30" rows="6" placeholder='Описание'></textarea>
            </div>
            <AddButtonNoSvg>Добавить</AddButtonNoSvg>
        </div>
    );
};

export default TasksForm;