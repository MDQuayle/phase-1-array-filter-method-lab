function findMatching(array, string){
    const result = array.filter(word => word.toUpperCase() === string.toUpperCase())
    return result;
}

function fuzzyMatch(array, string){
    const result = array.filter(word => word.slice(0,string.length)===string.slice(0,string.length))
    return result;
}

function matchName(array,string){
    const result = array.filter(({name}) => name === string);
    return result;
}