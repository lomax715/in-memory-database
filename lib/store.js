const shortid = require('shortid');

module.exports = class Store {
    constructor(){
        this.db = [];
    }

    save(object){
        object._id = shortid();
        this.db.push(object);
        return object;
    }

    get(id){
        return this.db.find(obj => {
            if(obj._id === id) return obj;
            else return null ;
        });
    }

    getAll() {
        return this.db.slice();
    }

};