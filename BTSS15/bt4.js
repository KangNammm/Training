// let a = +prompt("hay nhap so a");
// let b = +prompt("hay nhap so b");
// let c = +prompt("hay nhap so c");
// function minOfThree(a, b, c) {
//     let min;
//     if (a < b && a < c) {
//         min = a;
//     } else if (b < a && b < c) {
//         min = b;
//     } else {
//         min = c;
//     }
//     return min;
// }
// console.log(minOfThree(a, b, c))


//


// function prime(n) {
//     let flag = true;
//     if(n<2){
//         flag = false;
//     }else{
//         for (let i = 0; n < n-1; i++) {
//             if (n%i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true){
//         console.log(n + "la so nguyen to");
//     }else{
//         console.log(n + "khong phai la so nguyen to");
//     }
// }
// console.log(prime(+prompt("hay nhap so bat ky de kiem tra xem phai so nguyen to hay khong")));



//



// function findPairs(arr) {
//     let pairs = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 10) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairs;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findPairs(arr));


//



function handleSubmit(){
    // lấy ra giá trị của ô input
    let value =  document.getElementById("input").value;
    console.log(value);
    value = value.toLowerCase();
    // tạo 1 mảng để chứa danh sách các kí tự và số lần xuất hiện  của nó
    let array = []; // mang 2 chieu , ki tu se luu o phan tu so 0 cua mang con
    
    // duyệt từng kí tự của chuỗi trong ô input và kiểm tra 
    for (let i = 0; i < value.length; i++) {
    let index = checkExistCharacter(array,value.charAt(i));
      if(index>=0){// nếu kí tự thứ i tồn tại trong mảng array
            // đã tồn tại kí tự , phải sửa sô lần xuất hiện 
            // for (let i = 0; i < array.length; i++) {
            //      if(array[i][0] == value.charAt(i)){
            //         array[i][1] +=1;
            //      }
            // }

            array[index][1]+=1;
      }else{
        // chưa tồn tại thì thêm mới vào mảng array 1 phần tử có số lần xuất hiện là 1
        array.push([value.charAt(i),1]);
      }
    }
    // array = [[r,1],[i,2],[k,2],[e,2],[' ',1],[a,2],[c,1],[d,1],[m,1],[y,1]]

    // in ra kết quả
    for (let i = 0; i < array.length; i++) {
        console.log(`Ký tự ${array[i][0]} xuất hiện ${array[i][1]} lần`);
    }

}

// kiểm tra tồn tại của 1 kí tự ở trong 1 mảng và trả về vị trí của phần tử nếu tồn tại,
// nếu không tồn tại thì trả về -1
function checkExistCharacter(arr,char){ // arr là  mangr 2 chiều [['c',2],['b',3]]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] == char){
            // tồn tại
            return i;
        }
    }
    // chưa tồn tại
    return -1;
}



//




// console.log(factorial(+prompt("nhap mot so bat ky de tinh giai thua")));
// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }



//



// function sapXepChuoiSo(chuoiSo) {
//     let mangSo = chuoiSo.split(",").map(Number);
//     mangSo.sort((a, b) => b - a);
//     let chuoiSoSapXep = mangSo.join(",");
//     return chuoiSoSapXep;
// }
// let chuoiSo = prompt("Nhập vào chuỗi số bất kỳ, cách nhau bởi dấu phẩy:");
// console.log(sapXepChuoiSo(chuoiSo));



//


// function isLeapYear(year) {
//     if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
//         return true;
//     }
//     else if (year % 4 == 0 && year % 100 != 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let year = prompt("Nhập năm:");
// let result = isLeapYear(year);
// if (result) {
//     alert(year + " là năm nhuận");
// } else {
//     alert(year + " không phải là năm nhuận");
// }