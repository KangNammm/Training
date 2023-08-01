let input = prompt(" Nhập vào chuỗi kí tự bất kì");
function isPalindrome(str){
    str = str.toLowerCase().replace(/[a-ZA-Z0-9]/g, "");
    let reversed = str.split("").reversed().join("");
    return str === reversed;
}
console.log(isPalindrome(input));
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canak, Panam!"));