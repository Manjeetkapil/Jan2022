var flag = /^[a-zA-Z0-9-_.]+@lge.com$/.test('xyz.wqe@lge.com');
console.log(flag);

// Correct email ID

var flag2 = /^[a-zA-Z0-9-_.]+@lge.com$/.test('xyz.wqe@lge.in');
console.log(flag2)

// Wrong Email 


// Starts with [a-zA-Z0-9-_.] which contains all uppercase lowercase digits
// and then - . _ after that it ends with @lge.com