// Fan: nut0, nut1, nut2, nut3 => actionfan
// function tenFunction ---- cung chuc nang, lap di lap lai

// function sum() {
//     console.log(5+6)
// }
// sum()

// // khai báo hàm với tham số
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(100, 10)
// sum(10, 10)
// sum(1, 10)
// sum(40, 10)
// sum(500, 10)

//  Tim max
function max(arr){
    let max = arr[0];
for(let i =1; i < arr.length; i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
    console.log(max);
}
max([3, 5, 7, 6, 4, 2])
max([1,2,3,4,5,6,7,78,0])

// Fan speed
function fanSpeed(button){
    switch (button){
        case 0:
            console.log("Turn on")
            break;
        case 1:
            console.log("vu")
            break;
        case 2:
            console.log("Vu Vu")
            break;
        case 3:
            console.log("vu vu vu")
        default:
            break;
    }
}
fanSpeed(0);
fanSpeed(1);
fanSpeed(2);
fanSpeed(3);


// Tim so nguyen to
function isPrime(num){
    // let prime = true;
    if (num<=1){
        return false;
    }
}
for(let i=2; i<= parseInt(Math.sqrt(num)){


}

//   function sort(arr) {}  // bubble sort
