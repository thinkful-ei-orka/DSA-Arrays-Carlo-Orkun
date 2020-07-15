// 1. Implement an Array class from scratch.
// Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.



const Memory = require('./memory-module');

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
        this.data = {};
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const originPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, originPtr, this.length);
        memory.free(oldPtr);
    }

    pop() {

    }

    get(index) {

    }

    insert(value, index) {

    }

    remove(index) {

    }
}

Array.SIZE_RATIO = 3;