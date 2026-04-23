


// Challenge: User Role Lookup
// Your startup has a small system that stores user roles in a database.
// Each user has a username and a role.
// You will store the data in a JavaScript object.
// Example database:

// var users = {
//   "alice": "admin",
//   "bob": "editor",
//   "charlie": "subscriber",
//   "david": "moderator"
// };
// Task
// Write a function called:
// getUserRole(username)
// The function must:
// Take a username (string) as input.
// Return the role of that user if they exist in the database.
// If the user does not exist, return:
// "guest"
// If the input is invalid (null, undefined, empty string, etc.),
// also return:
// "guest"
 var users = {
  "alice": "admin",
  "bob": "editor",
  "charlie": "subscriber",
  "david": "moderator"
};
function getUserRole (userName){
    if(typeof userName!=='string'|| !userName.trim()) return 'guest';
    return users[userName] || 'guest';
}
getUserRole('')