const Array = require('./class');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // 2.) 
    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    // Array { length: 6, _capacity: 12, ptr: 3, data: {} }
    // When it gets to 15, capacity = length, which means that _resize
    // is called and the capacity increases by 3x the length.
    console.log(arr);

    // 3.)
    arr.pop();
    arr.pop();
    arr.pop();

    // Array { length: 3, _capacity: 12, ptr: 3, data: {} }
    // The end 3 values are removed but capacity stays the same
    console.log(arr);

    // 4.)
    console.log(arr.get(0));

    arr.pop();
    arr.pop();
    arr.pop();    

    // Cannot input string. NaN is result.
    arr.push('tauhida');
    console.log(arr.get(0));

    // Purpose of _resize function is to allocate more memory based on the length of the current array by a factor that is specified. 
}

main();