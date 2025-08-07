// Function Declaration
function userProfile(name){
    console.log(`Hello,  ${name}`);
    
}
userProfile("KUMAR")

// Arrow Function
let double = (a) => a*a;
console.log(double(3));

// Anonymous Function
// let aF = function () {
//     setTimeout( () => {
//         console.log("This Message is delayed by 2 Seconds");)
        
//     }, 2000);
   
// }
aF();

//Call back Function

function getUserDetails(callback){
setTimeout(()=>{
    callback();
    
},3000)
}
function logMessage(){
    console.log("Callback Function");
    
}
getUserDetails(logMessage);