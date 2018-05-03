let numIteration = 0;

function binarySearchActual(toSearch, searchValue) {
    let result = false;
    numIteration++;
    let chopIndex = Math.round(toSearch.length / 2);
    if (toSearch[chopIndex] === searchValue) {
        return true;
    } else if (toSearch.length === 1 && toSearch[0] !== searchValue) {
        return false;
    } else {
        toSearch[chopIndex] < searchValue ? result = binarySearchActual(toSearch.splice(chopIndex), searchValue) : result = binarySearchActual(toSearch.splice(0, chopIndex), searchValue);
    };
    return result;
};

function binarySearch(nameList, searchValue) {
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

console.log(binarySearch(nameList, 'Batman'), numIteration);
console.log(binarySearch(nameList, 'Robin'), numIteration);
