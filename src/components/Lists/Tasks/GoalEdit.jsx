import React, {useState} from 'react';
const GoalEdit = ({currentGoal, categories, update, setIsEditing}) => {

    const [goal, setGoal] = useState({
        title: currentGoal.title,
        categoryId: currentGoal.categoryId,
        executeDate: currentGoal.executeDate,
        description: currentGoal.description
    })

    const options = categories.map((cat) => {
        return <option value={cat.id} key={cat.id}>{cat.title}</option>
    })

    const upDateGoal = (e) => {
        e.preventDefault()
        let tempGoal = {
            id: currentGoal.id,
            ...goal
        }
        update(tempGoal)
        setIsEditing(false)
    }

    const cancelUpdate = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <div className='row tasksBlock' key={goal.id}>
            <div className='tasksBlockItem'>
                <div>
                    <input
                        className='form-control'
                        type="text"
                        value={goal.title}
                        onChange={e => setGoal({...goal, title: e.target.value})}
                    />
                </div>
                <div>
                    <select
                        className='form-select'
                        value={goal.categoryId}
                        onChange={e => setGoal({...goal, categoryId: e.target.value})}
                    >
                        {options}
                    </select>
                </div>
                <div className='tasksBlockDate'>
                    <input
                        className='form-control'
                        type="date"
                        value={goal.executeDate}
                        onChange={e => setGoal({...goal, executeDate: e.target.value})}
                    />
                </div>
            </div>
            <div>
                <div className='tasksBlockDescription'>
                    <textarea
                        className='form-control'
                        cols="30"
                        rows="6"
                        value={goal.description}
                        onChange={e => setGoal({...goal, description: e.target.value})}
                    />
                </div>
            </div>
            <div className='tasksBlockBtn'>
                <button className='btn btn-outline-success' onClick={upDateGoal}>Сохранить</button>
                <button className='btn btn-outline-danger' onClick={cancelUpdate}>Отмена</button>
            </div>
        </div>
    );
};

export default GoalEdit;