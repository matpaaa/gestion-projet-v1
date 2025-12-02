import { useEffect, useState } from "react"
import LocalStorageService from '../services/localStorageService'
import CategorieService from "../services/categorieService"
import CategorieElement from "../components/CategorieElement"


export default function CreateTodo() {

    const [title, setTitle] = useState('')
   
    
    const [description, setDescription] = useState('')

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        
        const localStorage = new LocalStorageService()
        const categorieService = new CategorieService(localStorage)
        setCategories(categorieService.getCategories())

    }, [])

    console.log(categories) 
    return (
        <section>
            <h1>Create a new Task</h1>

            <div className='input'>
                <p>Task Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div></div>

            <div>
                <h2>Description</h2>
                <div className='input'>
                    <p >Description Details</p>
                    <input value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>

            <div>
                <h2>Categories</h2>
                <div className="categories">
                    {
                        categories.map((categorie,i) => (
                            <CategorieElement key={i} categorie={categorie}/>
                        ))
                    }
                </div>
            </div>

            <button>Create Task</button>


        </section>
    )
}