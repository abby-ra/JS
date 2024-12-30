//if statment

let viewer="abby is good";
let customerIsBanned = false
let finance = true
let reply;

if(customerIsBanned){
    reply = `sorry`
}
else if(viewer && finance){
    reply = `Enjoy ${viewer}`;
}
else if(viewer){
    reply = `Enjoy`
}
else{
    reply = `sorry I am still working`
}
console.log(reply)

