

export default class Todo {
    
    constructor(
        title,
        content,
        time,
        status,
        categories
    ) {
        this.title = title
        this.content = content
        this.time = time
        this.status = status
        this.categories = categories
        this.id = Date.now()
    }
}