
function binarySearchActual(toSearch, searchValue) {
    let result = false;
    let chopIndex = Math.round(toSearch.length / 2);
    if (toSearch[chopIndex] === searchValue) {
        return chopIndex;
    };
    toSearch[chopIndex] < searchValue ? result = binarySearchActual(toSearch.splice(chopIndex), searchValue) : result = binarySearchActual(toSearch.splice(0, chopIndex), searchValue);
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

console.log(binarySearch(nameList, 'Batman'));
