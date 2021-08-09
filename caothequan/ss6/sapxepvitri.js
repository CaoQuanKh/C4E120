console.log("Sap xep vi tri day so ")
// Sap xep day so tang dan
let num = prompt("moi nhap vao day so");
let numArr = num.split(",");
for( let i = 0; i< numArr.length; i++){
    numArr[i] = +numArr[i]
}
numArr.sort(function(a ,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
console.log("Day so tang dan :", numArr);


// Sap xep day so giam dan

// let num = prompt("Nhap vao day so");
// let numArr = num.split(",");
// for ( let i = 0; i < numArr.length; i ++){
//     numArr[i] = + numArr[i]
// }
// numArr.sort(function(a , b){
//     if(a < b) return 1;
//     if(a > b) return -1;
//     return 0;
// })
// console.log("Day so giam dan :", numArr);