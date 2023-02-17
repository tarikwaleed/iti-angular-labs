import users from "./users.json";
users.sort((a, b) => a.username.localeCompare(b.username));
console.log(users);