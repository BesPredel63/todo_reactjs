import React, {useEffect, useState} from 'react';
import CategoriesList from "./Lists/Categories/CategoriesList";
import CategoryForm from "./Forms/CategoryForm";
import {urlCategories} from "../url/urlApi";

const Categories = () => {

    // const [categories, setCategories] = useState([
    //     {id: 1, title: 'Семья', color: '#008000'},
    //     {id: 2, title: 'Работа', color: '#ff0000'},
    //     {id: 3, title: 'Личное', color: '#0000ff'},
    // ])

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

    async function createCategory (newCategory) {
        try {
            await fetch(urlCategories, {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(newCategory),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setCategories(newCategory)
            getAllCategories()
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    async function upDateCategory (editCategory) {
        try {
            await fetch(urlCategories + '/' + `${editCategory.id}`, {
                method: "PUT",
                mode: 'cors',
                body: JSON.stringify(editCategory),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setCategories(editCategory)
            getAllCategories()
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    async function removeCategory (category) {
        try {
            await fetch(urlCategories + '/' + `${category.id}`, {
                method: "DELETE",
                mode: 'cors',
                body: JSON.stringify(category),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setCategories(category)
            getAllCategories()
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    return (
        <>
            <CategoryForm create={createCategory}/>
            <h3>Категории</h3>
            <CategoriesList categories={categories} update={upDateCategory} remove={removeCategory}/>
        </>
    );
};

export default Categories;