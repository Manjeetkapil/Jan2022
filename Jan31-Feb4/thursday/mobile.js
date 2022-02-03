var flag = /^[6-9][0-9]{9}$/.test('9755550582');
console.log(flag);

// Right mobile number

var flag2 = /^[6-9][0-9]{9}$/.test('975555058267');
console.log(flag2);

// Wrong mobile number

// Starts with 6-9 than it looks for nine 0-9 digits using [0-9]{9} $ is for end