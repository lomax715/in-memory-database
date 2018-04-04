const assert = require('assert');
const Store = require('../lib/store');

describe('tests methods on Store class', () => {
    
    const store = new Store;
    const object = { name: 'Jack' };

    it('save saves to store', () => {
        const savedObject = store.save(object);
        assert.ok(savedObject._id);
        assert.equal(savedObject.name, 'Jack');
    });

});