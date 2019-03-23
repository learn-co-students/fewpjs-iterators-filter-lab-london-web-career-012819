// Code your solution here
function findMatching(array, string){
    return array.filter(n => n.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(array, string){
    return array.filter(n => n.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(array, string){
    return array.filter(n => n.name.toLowerCase() === string.toLowerCase());
}