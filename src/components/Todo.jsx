import { useNavigate } from "react-router-dom"


export default function Todo({ todo }) {

    const navigate = useNavigate()
    const navigateTodo = () => navigate(`view-todo?id=${todo.id}`)

    return (
        <div onClick={navigateTodo} role="button" className="todo-container">
            <p className="todo-title">{ todo.title }</p>

            {
                todo.categories.map((cat, i) => (
                    <CategorieElement key={i} categorie={cat} />
                ))
            }

            <p className="todo-content">{ todo.content }</p>
        </div>
    )
}