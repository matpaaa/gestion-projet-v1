import { useEffect, useState } from "react"
import LocalStorageService from '../services/localStorageService'
import TodoService from "../services/todoService"
import CategorieElement from "../components/CategorieElement"

export default function ViewTodo() {

    const [todo, setTodo] = useState(null)

    useEffect(() => {
        const id = new URL(document.URL).searchParams.get('id')

        const localStorageService = new LocalStorageService()
        const todoService = new TodoService(localStorageService)
        const todo = todoService.getTodo(id)
        if (todo) {
            setTodo(todo)
        }
    }, [])

    return (
        todo && (
            <section className="todo-container">
                <p className="todo-title">{ todo.title }</p>
                {
                    todo.categories.map((cat, i) => (
                        <CategorieElement key={i} categorie={cat} />
                    ))
                }
                <p className="todo-content">{ todo.content }</p>
            </section>
        )
    )
}