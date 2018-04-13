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

    remove(id){
        for(let i = 0; i < this.db.length; i++){
            if(this.db[i]._id === id){
                this.db.splice(i, 1);
                return { removed: true };
            } else {
                return { removed: false };
            }
        }
    }

};