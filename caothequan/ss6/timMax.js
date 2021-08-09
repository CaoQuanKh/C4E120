let num = prompt("Nhap vao day so");
let numArr = num.split(",");

for( let i = 0; i < numArr.length; i++){
    numArr[i] = +numArr[i];
}
let max  = numArr[0];
for( i = 1; i < numArr.length; i++){
    if(max < numArr[i]){
        max = numArr[i];
    }
}
console.log("Day so :" , numArr);
console.log("So lon nhat la :", max)
