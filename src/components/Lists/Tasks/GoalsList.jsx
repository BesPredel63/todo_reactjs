import React, {useState} from 'react';
import EditButtonNoSvg from "../../UI/Buttons/noSvg/EditButtonNoSvg";
import DeleteButtonNoSvg from "../../UI/Buttons/noSvg/DeleteButtonNoSvg";
import GoalEdit from "./GoalEdit";

const GoalsList = ({goals, categories, update, remote}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [currentGoal, setCurrentGoal] = useState()

    // Настройки для локализации даты - необходимо доработать
    // при сохранении новой записи выдает ошибку, возможно нужна проверка данных или на выхоже получаем не тот тип данных
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    //     .toLocaleDateString(undefined, options)

    const localeDate = (executeDate) => {
        const date = new Date(executeDate)
        const shortTime = new Intl.DateTimeFormat("ru").format(date);
        return (
            <>
                <strong>Дата исполнения:</strong> {shortTime}
            </>
        )
    }

    if (!goals.length) {
        return (
            <h4>Список задач пуст</h4>
        )
    }

    return (
        <div>
            {
                goals.map((g, index) =>
                    currentGoal !== g || isEditing !== true
                    ?
                    <div className='row tasksBlock' key={g.id}>
                        <div className='tasksBlockItem'>
                            <div>
                                <strong>{index + 1}. {g.title}</strong>
                            </div>
                            <div>
                                <strong>Категория: </strong><span style={{color: `${g.category.color}`}}>{g.category.title}</span>
                            </div>
                            <div className='tasksBlockDate'>
                                {localeDate(g.executeDate)}
                            </div>
                        </div>
                        <div>
                            <div className='tasksBlockDescription'>
                                {g.description}
                            </div>
                        </div>
                        <div className='tasksBlockBtn'>
                            <EditButtonNoSvg onClick={() => {
                                setCurrentGoal(g)
                                setIsEditing(true)}}
                            >
                                Изменить
                            </EditButtonNoSvg>
                            <DeleteButtonNoSvg onClick={() => remote(g)}>Удалить</DeleteButtonNoSvg>
                        </div>
                    </div>
                    :
                        <GoalEdit currentGoal={currentGoal} categories={categories} update={update} setIsEditing={setIsEditing}/>
                )
            }
        </div>
    );
};

export default GoalsList;