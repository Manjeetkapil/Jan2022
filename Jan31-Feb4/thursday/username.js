var flag = /^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]$/.test('dsyujh');
console.log(flag);
// Contains no special chanracter

var flag2 = /^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]$/.test('dsy@#%^ujh');
console.log(flag2);

// contains special character