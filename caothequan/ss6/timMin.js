console.log("ok")
document.write("Hello World")
// tìm Max, tim Min, sap xep vi tri
let num = prompt("");
let numArr = num.split(",");

for(let i = 0; i <numArr.length; i++){
    numArr[i] = +numArr[i]
}
let min = numArr[0]
for(let i =1; i < numArr.length; i++){
    if(min>numArr[i]){
        min = numArr[i]
    }
}
console.log("Day so :" , numArr);
console.log("so nho nhat la :" , min)