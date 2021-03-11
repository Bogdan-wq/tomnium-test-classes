class Model {
    constructor() {
        this.data = []
    }

    get(id) {
        return this.data.find(item => item.id === id)
    }

    delete(id) {
        const dataItem = this.get(id)
        this.data = this.data.filter(item => item.id !== id)
        return dataItem;
    }

    create(dataItem) {
        this.data.push(dataItem)
    }

    update(id,dataItem) {
        const itemToUpdate = this.get(id)
        Object
            .entries(dataItem)
            .forEach(([key,value]) => itemToUpdate[key] = value)

        return itemToUpdate;
    }
}

module.exports = Model;