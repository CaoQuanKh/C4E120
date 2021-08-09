// Primitive : Nguyen thuy

// let a = 5;
// let b = 10;
//  a = b; // snapshot a =10
//  b = 15;
//  console.log(a);

 // References
 // Array

//  let arr = new Array(5); 
//  let arr1 = [3,"hello", true , false, undefined]
// //  start of index : 0
// // end of index : length -1
//  console.log(arr1.length);
 
//  console.log(arr1[4]);     // lay phan tu ra

//  arr1[2] = "ok"            // thay phần tử thứ 3 bằng "ok"
//  console.log(arr1)

//  arr1.push(5)              // đẩy "5" vào cuối mảng
// let length = arr1.push(10) // đẩy 10 vào cuối mảng
//  console.log(arr1)
//  console.log(length)
 
// let x= arr1.pop()          // lấy phần tử cuối ra khỏi mảng
// console.log(arr1)
// console.log(x)

// // shift : xóa đầu
// // unshift : thêm phần tử mới vào đầu
// console.log(arr1)

// vong lap ket hop mang?
// let arr1 = [3,"hello", true , false, undefined]
// for(let i=0; i<5;i++){
//     if(arr1[i])
//     console.log(arr1[i]);
// }

// cho người dùng nhập vào sản phẩm mua
// Nếu sản phẩm tồn tại thì sẽ tính tiền
// lưu vào tổng đơn
// nếu không tồn tại thì bao với người dùng sản phẩm không có
// Và không tính tiền
let products = prompt("Moi san pham cach nhau  1 dau phay")
let productsArr = products.split(",")
console.log(productsArr)
let total = 0
let countDuck = 0
let countChicken = 0
for(let i=0; i<productsArr.length; i++){
    let nameOfProducts = productsArr[i].trim()  
    switch (nameOfProducts) {
        case ("Vit"):
            console.log("Vit")
            countDuck++
            break
         case ("Ga"):
            console.log("Ga")
            countChicken++
            break
        default:
            console.log("san pham", nameOfProducts +" khong ton tai")
            break
    }   
}
total = 200*countDuck + 150*countChicken
console.log("Ban mua", countChicken, "con ga")
console.log("Ban mua", countDuck +" con vit")
console.log("Tong tien", total)

// Tìm min/max, tìm vị trí, ....