import React from 'react';
import SelectSortGoal from "../UI/Selects/SelectSortGoal";

const GoalFilter = ({filter, setFilter}) => {
    return (
        <div>
            <hr />
            <h3>Фильтр</h3>
            <div className="row g-3">
                <div className="col-md-4">
                    <SelectSortGoal
                        value={filter.sort}
                        onChange={sortUsers => setFilter({...filter, sort: sortUsers})}
                        defaultValue='Сортировка'
                        options = {[
                            {value: 'title', name: 'По названию'},
                            {value: 'description', name: 'По описанию'},
                            {value: 'executeDate', name: 'По дате'},
                        ]}
                    />
                </div>
                <div className='col-md-8'>
                    <label className="form-label m-1">Поиск</label>
                    <input
                        className='form-control'
                        placeholder='Введите данные для поиска...'
                        value={filter.query}
                        onChange={event => setFilter({...filter, query: event.target.value})}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default GoalFilter;