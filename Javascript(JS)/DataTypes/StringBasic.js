//Declaring a variable and assigning it a string value
let a="Hello, World!";
console.log(a);

//Declaring a variable b with a string that includes an apostrophe
let b="It's a nice day!";
console.log(b);

//Declaring a variable c with a string that includes double quotes
let c='She said, "Hello!"';
console.log(c);

//Declaring a variable d with a string that includes both single and double quotes
let d='He said, "It\'s a great day!"';
console.log(d);

//Declaring a variable e with a string that includes a newline character
let e="Line 1\nLine 2";
console.log(e);

//Declaring a variable f with a string that includes a tab character
let f="Column 1\tColumn 2";
console.log(f);

//Declaring a variable g with a string that includes a backslash character
let g="This is a backslash: \\";
console.log(g);

//Creating a string using the String constructor
let h=new String("Hello, World!");
console.log(h);

// Formatting a string using template literals
let name="Alice";
let greeting=`Hello, ${name}!`;
console.log(greeting);


// String Operations

// Concatenation of two strings
let str1="Hello, ";
let str2="World!";
let result=str1+str2;
console.log(result);

// Repeating a string multiple times
let str3="Ha! ";
let repeated=str3.repeat(3);
console.log(repeated);

// Accessing individual characters in a string
let str4="JavaScript";
console.log(str4[0]); // Output: J

// Finding the length of a string
let str5="Hello, World!";
console.log(str5.length); // Output: 13

let str6="Hello, World!";
console.log(str6.includes("World")); // Output: true

// Finding the index of a substring in a string
let str7="Hello, World!";
console.log(str7.indexOf("World")); // Output: 7

// Extracting a substring from a string
let str8="Hello, World!";
console.log(str8.substring(0, 5)); // Output: Hello

// Slicing a string to get a portion of it
let str9="Hello, World!";
console.log(str9.slice(7)); // Output: World!

// splitting a string into an array of substrings
let str10="Hello, World!";
let arr=str10.split(", ");
console.log(arr); // Output: ["Hello", "World!"]

// removes whitespace from both ends of a string
let str11="   Hello, World!   ";
console.log(str11.trim()); // Output: "Hello, World!"


// Conversion of a number to a string using the String() function
let num=123;
let str12=String(num);
console.log(str12); // Output: "123"    

// Conversion of a boolean value to a string using the String() function
let bool=true;
let str13=String(bool);
console.log(str13); // Output: "true"

// Conversion of a date to a string using the toString() method
let date=new Date();
let str14=date.toString();
console.log(str14); // Output: current date and time as a string    

