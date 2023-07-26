let number = 0;
number = +prompt(" Nhập số nguyên bạn muốn")
let count = 0;
let N = 2;
while (count < number) {
    let check = true;
    for (let i = 2; i <= (N / 2); i++) {
        if (N % i === 0) {
            check = false
            break;
        }
    }
    if (check === true) {
        console.log("===>", N);
        count++;
    }
    N++;
}
