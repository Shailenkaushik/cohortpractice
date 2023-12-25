const fs = require('fs')
// function kiratRead(cb){

//   fs.readFile("example.txt","utf-8",function(err,data){
//     setTimeout(function () {
//       cb(data);
//     }, 4000);
//   });
 
// }
// function onDone(data){

//   console.log(data);
//   console.log("hello")
// }
// kiratRead(onDone);

function KiratRead(){

  console.log("Inside Kirat");
  return new Promise(function(resolve){

      console.log("inside Promise");
       fs.readFile("a.txt","utf-8",function(err,data){
          console.log("inside file read");
         resolve(data);
       });
    
  });
}
function onDone(data){
  console.log("inside onDone");
  console.log(data);
}
var a=KiratRead();
console.log(a);
console.log(a + "file read not done");
console.log(".then not called")
a.then(onDone);
console.log(".then ")



// function hello(){
//   console.log("hi")
// }
// setInterval(hello,2000)
