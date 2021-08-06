console.log("hehe")
// for(khởi tạo; điều kiện dừng; bước lặp)

for(let i= 0; i<10; i =i+1){
    // chay vao statement
    console.log(i);
}
/* i = 0 => i < 10 => console.log(0);
   i = i+1 = 0 +1 = 1 => i < 10 => console.log(1);
   ...
   i = i+1 = 9 + 1 =10 => i !<10 => dừng lại 
*/
console.log("dừng lại hehe")
for( let a = 15; a<=100; a = a+1){
    if(a %2!=0){
    console.log(a);
}}
 for(let x = 100;x <=402; x = x+1 ){
     if (x%5 ==0){
         console.log(x)
     }
 }

//  for(let i = 1; i <= 100; i++){
//      let sum = 0;  ( phải gán sum ở ngoài vòng lặp, sum sẽ quay về 0 sau mỗi vòng)
//      sum = sum + i; 
//      console.log(sum);
//  }
 
let sum = 0;
for(let i =1; i <=100; i ++){
    sum = sum + i;
}
    console.log(sum);

    /* BTVN
    - tính tổng số lẻ 1- 500
    - tìm các số chinh phương từ 200 - 300
    - tính giai thừa của 1 số nhập vào từ bàn phím
    - tìm các số nguyên tố từ 400 - 1000
    - kiểm tra số x có phải số hoàn hảo không 
    */
