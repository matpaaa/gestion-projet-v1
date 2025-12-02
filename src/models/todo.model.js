

export default class Todo {
    
    constructor(
        title,
        content,
        time,
        status,
        categories,
        id=0
    ) {
        this.title = title
        this.content = content
        this.time = time
        this.status = status
        this.categories = categories
        this.id = id || Date.now()
    }

    title = ''
    content = ''
    time = 0
    status = ''
    categories = []
    id = 0
}