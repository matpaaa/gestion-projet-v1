import Todo from "../models/todo.model"


export default class TodoService {

    key = 'TODOS'

    constructor(
        localStorageService
    ) {
        this.localStorageService = localStorageService
    }

    getTodos() {
        const data = this.localStorageService.getData(this.key)
        return data.map(d => new Todo(d.title, d.content, d.time, d.status, d.categories))
    }

    getTodo(title) {
        const todos = this.getTodos()
        const todoSelected = todos.find(t => t.title === title)
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