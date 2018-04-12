const assert = require('assert');
const Store = require('../lib/store');

describe('tests methods on Store class', () => {
    
    const store = new Store;
    const object = { name: 'Jack' };

    it('saves to store', () => {
        const savedObject = store.save(object);
        assert.ok(savedObject._id);
        assert.equal(savedObject.name, 'Jack');
    });

    it('returns an object with the given id', () => {
        const savedObj = store.save({ name: 'Jacob' });
        const returnedObj = store.get(savedObj._id);
        assert.deepEqual(returnedObj, savedObj);
    });

    it('returns null if id not in store', () => {
        const nullObject = store.get();
        assert.deepEqual(nullObject, null);
    });

    it('returns all objects in store', () => {
        const database = store.getAll();
        assert.deepEqual(database, store.database);
    });

});