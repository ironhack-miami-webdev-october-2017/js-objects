// Why Objects? ------------------------------------------
// -------------------------------------------------------
//  they allow you to group up related information about a single entity
//  they work better than arrays for this purpose
var theUser = [
  31,
  'nizar@ironhack.com',
  'swordfish',
  'Nizar Khalife',
  '???',
  'nizaroni.pizza',
  'San Juan, Puerto Rico',
  'twitter.com/nizaroni'
];

// how are we supposed to remember that position 3 is the full name?
console.log( theUser[3] );

// with objects it's easier because you reference information by a "key"


// Creating Objects --------------------------------------
// -------------------------------------------------------
//  key-value pairs separated by commas
//  colon separates each key and from the value
var theUser = {
  age: 31,
  email: 'nizar@ironhack.com',
  password: 'swordfish',
  fullName: 'Nizar Khalife',
  website: 'nizaroni.pizza',
  hometown: 'San Juan, Puerto Rico',
  socialProfile: 'twitter.com/nizaroni',
  gender: null,
};


// Accessing Values --------------------------------------
// -------------------------------------------------------
//  the object variable has all the information inside it
console.log( theUser );

//  dot notation or square bracket notation allows you to access individual keys
//  dot notation is more common since it's 3 characters shorter
console.log( theUser.fullName );
console.log( theUser['fullName'] );

//  "in" operator checks if a key exists in the object
console.log( 'gender' in theUser );
console.log( 'birthdate' in theUser );

//  compare against "undefined" to checks if a key DOESN'T exist in the object
//  (accessing keys that don't exist returns "undefined")
console.log( theUser.birthdate === undefined );

//  use either condition in a if statement to change program behavior
if ('birthdate' in theUser) {
  // check to see if today is their birthday
}

if (theUser.email === undefined) {
  // prompt user for their email
}


// Modifying Values --------------------------------------
// -------------------------------------------------------
//  assignment with the equal sign allows you to update a key's value
console.log( theUser.gender );
theUser.gender = 'cismale';
console.log( theUser.gender );

//  it also allows you to add new keys and values that didn't exist before
console.log( theUser.relationshipStatus );
console.log( 'relationshipStatus' in theUser );

theUser.relationshipStatus = 'married';

console.log( theUser.relationshipStatus );
console.log( 'relationshipStatus' in theUser );

//  the "delete" operator can remove a key from the object
delete theUser.relationshipStatus;

//  it's as if it was never there
console.log( 'relationshipStatus' in theUser );



// Another Example ---------------------------------------
// -------------------------------------------------------
var myDictionary = {
  table: 'a surface you work on',
  car: 'a mode of transportation',
};

myDictionary.cup = 'something you put liquid';
myDictionary['birthday'] = 'the day you were born';
myDictionary.terse = 'very drawn out and time consuming';

delete myDictionary.terse;

console.log( myDictionary );


// Get Arrays From Objects -------------------------------
// -------------------------------------------------------
//  returns an array of ONLY the KEYS
console.log( Object.keys(myDictionary) );

//  returns an array of ONLY the VALUES
console.log( Object.values(myDictionary) );
