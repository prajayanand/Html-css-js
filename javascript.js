// Problem1
let salaries = {
    Praj: 100,
    Vivek: 160,
    Ags: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log('Sum of salaries:', sum); // 390

// Problem2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log('Menu after multiplying numeric properties by 2:', menu);
// { width: 400, height: 600, title: "My menu" }

// Problem3
function checkEmailId(str) {
    str = str.toLowerCase();
    let atPos = str.indexOf('@');
    let dotPos = str.indexOf('.');
    
    return atPos > 0 && dotPos > atPos + 1;
}

console.log('Check email ID:');
console.log(checkEmailId("example@domain.com")); // true
console.log(checkEmailId("example@domaincom")); // false
console.log(checkEmailId("exampledomain.com")); // false
console.log(checkEmailId("example@domain.co.m")); // true

// Problem4
function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 3) + "..." : str;
}

console.log('Truncate string:');
console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te..."
console.log(truncate("Hi everyone!", 20)); // "Hi everyone!"

// Problem5
let styles = ["Anee", "Brand"];

// Append "Robert" to the end
styles.push("Robert");
console.log('Styles after appending Robert:', styles); 

// Replace the middle value by "Calvin"
if (styles.length % 2 !== 0) {
    styles[Math.floor(styles.length / 2)] = "Calvin";
}
console.log('Styles after replacing the middle value with Calvin:', styles); // 

// Remove the first value of the array and show it
console.log('Removed first value:', styles.shift()); //
console.log('Styles after removing the first value:', styles); // 

// Prepend "Rose" and "Regal" to the array
styles.unshift("Rose", "Regal");
console.log('Styles after prepending Rose and Regal:', styles); 
