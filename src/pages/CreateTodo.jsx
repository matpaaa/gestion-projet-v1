import { useEffect, useState } from "react"
import LocalStorageService from '../services/localStorageService'
import CategorieService from "../services/categorieService"
import CategorieElement from "../components/CategorieElement"
import TodoService from "../services/todoService"
import { useNavigate } from "react-router-dom"


const localStorageService = new LocalStorageService()
const categorieService = new CategorieService(localStorageService)
const todoService = new TodoService(localStorageService)

export default function CreateTodo() {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        setCategories(categorieService.getCategories())
    }, [])

    const createTodo = () => {
        if (title && description) {
            todoService.addTodo(
                title,
                description,
                0,
                '',
                categories
            )
            navigate('/')
        }
    }

    return (
        <section>
            <div className="page">

                <h1>Create a new Task</h1>

                <div className='input'>
                    <p>Task Title</p>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="input-title"/>
                </div>

                <div className="separator"></div>

                <div>
                    <h2>Description</h2>
                    <div className='input-section'>
                        <div className="input">   
                            <p >Description Details</p>
                            <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-description"/>
                        </div>
                    </div>
                </div>

                <div className="input-section">
                    <h2>Categories</h2>
                    <div className="categories">
                        {
                            categories.map((categorie,i) => (
                                <CategorieElement key={i} categorie={categorie}/>
                            ))
                        }
                    </div>
                </div>
                
                <button onClick={createTodo} className="create-button">Create Task</button>


            </div>
        </section>
    )
}