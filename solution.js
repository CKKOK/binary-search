let phonebook = require('./phonebook.json');

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

function binarySearch(nameList, searchValue) {
    numIteration = 0;
    let toSearch = nameList.sort();
    return binarySearchActual(toSearch, searchValue);
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

function advBinarySearch(phonebook, attribute, value) {
    numIteration = 0;
    let toSearch = sortByAttribute(phonebook, attribute);
    return advBinarySearchActual(toSearch, attribute, value);
}

console.log(advBinarySearch(phonebook, "name", "Carleton"), numIteration);
console.log(advBinarySearch(phonebook, "name", "Ty"), numIteration);
