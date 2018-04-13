const assert = require('assert');
const Store = require('../lib/store');

describe('tests methods on Store class', () => {
    
    const store = new Store;
    const object = { name: 'Jack' };
    const object2 = { name: 'Jacob' };

    it('saves to store', () => {
        const savedObject = store.save(object);
        assert.ok(savedObject._id);
        assert.equal(savedObject.name, 'Jack');
    });

    it('returns an object with the given id', () => {
        const savedObj = store.save(object2);
        const returnedObj = store.get(savedObj._id);
        assert.deepEqual(returnedObj, savedObj);
    });

    it('returns null if id not in store', () => {
        const nullObject = store.get();
        assert.deepEqual(nullObject, null);
    });

    it('returns all objects in store', () => {
        const database = store.getAll();
        assert.deepEqual(database, [object, object2]);
    });

    it('remove with value true if object removed', () => {
        const savedobject = store.save(object);
        store.save(object2); 
        const removed = store.remove(savedobject._id);
        assert.deepEqual(removed, { removed: true });
    });

    it('remove with value false if no match', () => {
        store.save(object);
        store.save(object2);
        const removedFalse = store.remove(2);
        assert.deepEqual(removedFalse, { removed: false });
    });
});