import { useState } from "react"
import LocalStorageService from '../services/localStorageService'
import TodoService from "../services/todoService"
import { useNavigate } from "react-router-dom"
import Categories from "../components/Categories"


const localStorageService = new LocalStorageService()
const todoService = new TodoService(localStorageService)

export default function CreateTodo() {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categorieSelected, setCategorieSelected] = useState(null)

    const createTodo = () => {
        if (title && description) {
            todoService.addTodo(
                title,
                description,
                0,
                '',
                categorieSelected ? [categorieSelected] : []
            )
            navigate('/')
        }
    }

    const selectCategorie = (categorie) => {
        if (categorie) {
            setCategorieSelected(categorie)
        }
    }

    return (
        <section>
            <div className='input'>
                <p className="input-title">Task Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="input-title"/>
            </div>

            <div className="separator"></div>

            <div className='input'>
                <p className="input-title">Description</p>
                <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-description"/>
            </div>

            <div className="input-section">
                <p className="input-title">Categories</p>
                <Categories
                    onSelected={selectCategorie}
                    categorieSelected={categorieSelected}
                />
            </div>
            <button onClick={createTodo} className="create-button">Create Task</button>
        </section>
    )
}