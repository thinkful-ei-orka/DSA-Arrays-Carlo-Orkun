// 1. Implement an Array class from scratch.
// Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.



const Memory = require('./memory-module');
const memory = new Memory();

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
        memory.free(originPtr);
        this._capacity = size;
    }

    pop() {
        if(this.length <= 0) {
            throw new Error('Cannot pop empty array');
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Invalid index');
        }

        return memory.get(this.ptr + index);
    }

    insert(value, index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Invalid index')
        }
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Invalid index')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3;

module.exports = Array;

