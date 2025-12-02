import Categorie from "../models/categorie.model"


export default class CategorieService {

    key = 'CATEGORIES'

    constructor(
        localStorageService
    ) {
        this.localStorageService = localStorageService
    }
    
    getCategories() {
        try {
            const data = this.localStorageService.getData(this.key)
            return data.map(d => Object.assign(new Categorie(), d))
        } catch (err) {
            console.error(err)
            return []
        }
    }

    updateCategories(data) {
        this.localStorageService.setData(this.key, data)
    }

    deleteCategorie(title) {
        const categories = this.getCategories()
        this.updateCategories(categories.map(c => c.title !== title))
    }

    addCategorie(title) {
        const newCategorie = new Categorie(title)
        const categories = this.getCategories()
        this.updateCategories([newCategorie, ...categories])
    }
}