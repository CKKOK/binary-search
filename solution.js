let phonebook = require('./phonebook.json');
let timed = true;
let then = null;
let now = null;
let numIteration = 0;

function binarySearchActual(toSearch, searchValue) {
    let result = false;
    numIteration++;
    let chopIndex = Math.round(toSearch.length / 2);
    if (toSearch.length === 1 && toSearch[0] !== searchValue) {
        return false;
    } else if (toSearch[chopIndex] === searchValue) {
        return true;
    } else {
        toSearch[chopIndex] < searchValue ? result = binarySearchActual(toSearch.splice(chopIndex), searchValue) : result = binarySearchActual(toSearch.splice(0, chopIndex), searchValue);
    };
    return result;
};

function binarySearchPseudoPointer(toSearch, searchValue) {
    let start = 0, end = toSearch.length - 1, index = Math.floor((start + end) * 0.5);
    numIteration++;
    while (toSearch[index] !== searchValue && start !== end) {
        numIteration++;
        toSearch[index] < searchValue ? start = index : end = index;
        index = Math.floor((start + end) * 0.5);
        if (start === index) {
            index = end;
            break;
        }
    };
    if (timed === true) {
        now = new Date().getTime();
        console.log("Run time:", now - then, "s");
    };
    return toSearch[index] === searchValue;
};

function binarySearch(nameList, searchValue) {
    numIteration = 0;
    let toSearch = nameList.sort();
    if (timed === true) {then = new Date().getTime()};
    // let result = binarySearchActual(toSearch, searchValue);
    let result = binarySearchPseudoPointer(toSearch, searchValue);
    if (timed === true) {
        now = new Date().getTime();
        console.log("Run time:", now - then, "s");
    };
    return result;
};

const nameList = [
    'Aaron',
    'Andy',
    'Batman',
    'Boba',
    'Bonnie',
    'Betsy',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash'
];

// console.log(binarySearch(nameList, 'Batman'), numIteration);
// console.log(binarySearch(nameList, 'Robin'), numIteration);

function sortByAttribute(arr, attr) {
    return arr.sort((a,b) => {return (b[attr] < a[attr]) ? 1 : (b[attr] > a[attr] ? -1 : 0)})
}

function advBinarySearchActual(toSearch, attr, val) {
    let result = false;
    numIteration++;
    let chopIndex = Math.round(toSearch.length / 2);
    if (toSearch.length === 1 && toSearch[0][attr] != val) {
        return false;
    } else if (toSearch[chopIndex][attr] == val) {
        return true;
    } else {
        toSearch[chopIndex][attr] < val ? result = advBinarySearchActual(toSearch.splice(chopIndex), attr, val) : result = advBinarySearchActual(toSearch.splice(0, chopIndex), attr, val);
    };
    return result;
}

function advBinarySearchPseudoPointer(toSearch, attr, val) {
    let start = 0, end = toSearch.length - 1, index = Math.floor((start + end) * 0.5);
    numIteration++;
    while (toSearch[index][attr] !== val && start !== end) {
        numIteration++;
        toSearch[index][attr] < val ? start = index : end = index;
        index = Math.floor((start + end) * 0.5);
        if (start === index) {
            index = end;
            break;
        }
    };
    return toSearch[index][attr] === val;
};

function advBinarySearch(phonebook, attribute, value) {
    numIteration = 0;
    let toSearch = sortByAttribute(phonebook, attribute);
    if (timed === true) {then = new Date().getTime()};
    let result = advBinarySearchActual(toSearch, attribute, value);
    // let result = advBinarySearchPseudoPointer(toSearch, attribute, value);
    if (timed === true) {
        now = new Date().getTime();
        console.log("Run time:", now - then, "s");
    };
    return result;
}

// == Artificially create a delay with a promise ==
function delay(x, then) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(`Slept for ${(new Date().getTime()) - then}ms.`)}, x)
    })
}

async function sleep(x, log = false) {
    let result = await delay(x, new Date().getTime());
    log === true ? console.log(result) : result;
}

// == For benchmarking (synchronous) functions ==
function benchmark(func) {
    let start = new Promise((resolve, reject) => {
        let then = new Date().getTime();
        let result = func();
        resolve(new Date().getTime() - then);
    });
    start.then((time) => {console.log("Ran for", time, "ms.")})
}

console.log(advBinarySearch(phonebook, "name", "Carleton"), numIteration);
console.log(advBinarySearch(phonebook, "name", "abcde"), numIteration);

// function wrapper() {
//     let i = 10000000;
//     let str = "abcde";
//     while (i > 0) {
//         str = str+"abdce";
//         i--;
//     }
//     return str;
// }

// benchmark(wrapper);