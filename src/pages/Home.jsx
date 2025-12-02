import { useEffect, useState } from "react"
import LocalStorageService from '../services/localStorageService'
import TodoService from "../services/todoService"
import Todo from "../components/Todo"

export default function Home() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const localStorageService = new LocalStorageService()
        const todoService = new TodoService(localStorageService)
        setTodos(todoService.getTodos())
    }, [])

    return (
        <section className="section-home">
            <h1>Bienvenue sur Check'it</h1>

            <div className="todo-container">
                {
                    todos.map((todo, i) => (
                        <Todo key={i} todo={todo} />
                    ))
                }
            </div>
        </section>
    )
}