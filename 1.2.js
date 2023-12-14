console.log("hello")
var abc=[
    {
        name:"raj",
        age:12,
    },
    {
        name:"raaj",
        age:13,
    },
    {
        name:"raaaj",
        age:12,
    },
    {
        name:"raaaaj",
        age:14,
    }
]
// for(var i=0;i<abc.length;i++){
//     console.log(abc[i].name);
// }
// abc.forEach(element => {
//     console.log(element.name);
// });
// const acd=abc.filter(ele);
// function ele(obj){
//     return obj.age>12;
// }
// acd.forEach(element=>{
//     console.log(element.name);
// })
for(var i=0;i<abc.length;i++){

    var arr=abc[i].name.split('');
    arr.reverse();
   
    abc[i].name=arr.join('');

    console.log(abc[i].name);
}
abc.forEach(element => {
    console.log(element.name)
});