import React, {useEffect, useState} from 'react';
import {urlCategories} from "../../../url/urlApi";

const SelectCategories = (props) => {

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

    return (
        <select
            className='form-select'
            {...props}
        >
            {options}
        </select>
    );
};

export default SelectCategories;