function urlify(str) {
    return str.split(' ').join('%20');
}

console.log(urlify('tauhida parveen'));

function arrayFilter(arr) {
    let result = [];
    arr.forEach(x => {
        if (x >= 5) {
            result.push(x);
        }
    })
    return result;
}

console.log(arrayFilter([0, 4, 7, 3, 10, 2]));

function arrayMaxSum(arr) {
    let sumArray = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            sumArray.push(sum);
        }
        sum = 0;
    }

    return Math.max(...sumArray);
}

console.log(arrayMaxSum([4, 6, -3, 5, -2, 1]));

function merge(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    return newArray.sort((a, b) => a - b);
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChars(str, chars) {
    let regex = new RegExp('[' + chars + ']', 'g');

    return str.replace(regex, '');
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

function products(arr) {
    let result = [];
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr;

        temp = arr.filter((_, idx) => {
            return idx !== i;
        })

        for (let j = 0; j < temp.length; j++) {
            prod *= temp[j];
        }

        result.push(prod);
        prod = 1;
    }

    return result;
}

console.log(products([1, 3, 9, 4]));



function search2DArray(arr) {
    const zeroRows = [];
  const zeroCols = [];
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        row[j] = 0;
      }
    }
  }
  return arr;
}

let exampleArray = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

console.log(search2DArray(exampleArray));



function stringRotation(str1, str2) {
    let arr1 = str1.split('');
    let match = false;

    for (let i = 0; i < arr1.length; i++) {
        arr1.unshift(arr1.pop(arr1.length - 1));
        let newStr = arr1.join('');
        if (newStr === str2) {
            match = true;
        }
    }

    return match;
}

console.log(stringRotation('amazon', 'azonam'));