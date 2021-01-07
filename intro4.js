//Symbol is a primitive data type

const username = Symbol("username")
const password = Symbol("password")
var user = {
    username : "test",
    password:"3030lksdlf"
}

console.log("Without Symbol",user.username)
console.log("Without Symbol",user.password)


var admin ={
    [username] :"admintest",
    [password]:"admin34rw"
}

// This gives undefined - can be used to hide data
console.log("Without Symbol",admin.username)
console.log("Without Symbol",admin.password)