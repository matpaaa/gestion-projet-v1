

export default class LocalStorageService {

    getData(key) {
        const valueStringify = localStorage.getItem(key)
        if (valueStringify) {
            return JSON.parse(valueStringify)
        }
        return []
    }

    setData(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    deleteData(key) {
        localStorage.clear(key)
    }
}