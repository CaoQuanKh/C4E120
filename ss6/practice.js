console.log("hello")

// tìm Max, tim Min, sap xep vi tri
let num = prompt("");
let numArr = num.split(",");
for( let i = 0; i< numArr.length; i++) {
    numArr[i] = +numArr[i]
}
let max = numArr[0];
// O(N)
for(let i =1; i < numArr.length; i++){
    if(max<numArr[i]){
        max = numArr[i]
    }
}
console.log(numArr);
console.log(max)