import Todo from "../models/todo.model"


export default class TodoService {

    key = 'TODOS'

    constructor(
        localStorageService
    ) {
        this.localStorageService = localStorageService
    }

    getTodos() {
        try {
            const data = this.localStorageService.getData(this.key)
            return data.map(d => new Todo(d.title, d.content, d.time, d.status, d.categories, d.id))
        } catch (err) {
            console.error(err)
            return []
        }
    }

    getTodo(id) {
        const todos = this.getTodos()
        const todoSelected = todos.find(t => parseInt(t.id) === parseInt(id))
        if (todoSelected) return todoSelected
        return null
    }

    updateTodos(data) {
        this.localStorageService.setData(this.key, data)
    }

    deleteTodo(title) {
        const todos = this.getTodos()
        this.updateTodos(todos.filter(t => t.title !== title))
    }

    addTodo(
        title,
        content,
        time,
        status,
        categories=[]
    ) {
        const todo = new Todo(title, content, time, status, categories)
        const todos = this.getTodos()
        this.updateTodos([todo, ...todos])
    }
}