const Model = require('./Model');

class Database {
    constructor() {
        this.models = {}
    }

    model(name) {
        if(!this.models[name]) {
            this.models[name] = new Model()
        }

        return this.models[name];
    }
}

const database = new Database();

module.exports = database;