
function isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
}

function isNotNull(val) {
    return val !== null && val !== '' && val !== undefined;
}


export {isNullOrWhiteSpace, isNotNull};
