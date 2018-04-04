const shortid = require('shortid');

module.exports = class Store {
    constructor(){
        this.db = [];
    }

    save(obj){
        obj._id = shortid();
        this.db.push(obj);
        return obj;
    }

};