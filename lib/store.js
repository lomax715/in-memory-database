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

};