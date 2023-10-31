import React from 'react';

const SelectSortGoal = ({options, defaultValue, value, onChange}) => {
    return (
        <div>
            <label className='form-label'>Сортировка</label>
            <select
                className='form-select'
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled>{defaultValue}</option>
                {options.map(option =>
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );
};

export default SelectSortGoal;