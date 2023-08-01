// function number(a,b) {
//     if (a > b) {
//         alert(` So ${a} lon hon so ${b}`)
//     }else if(a<=b){
//         sum = a+b;
//         alert(" Tong cua 2 tham so la :"+sum)
//     }
// }
// number(+prompt(" Nhap vao so a"),+prompt(" Nhap vao so b"));

//


// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// result = addNumbers();
// alert(result);


//


let chomsaoA = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomsaoB = ["Ursa Mino", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function cacChomSao(tenChomSao) {
    for(let i=0; i<chomsaoA.length; i++){
        if(chomsaoA[i] == tenChomSao){
            return chomsaoB[i];
        }
    }
    return null;
}
let input = prompt("Nhập vào tên của ngôi sao:");
let output = cacChomSao(input);
if( output == null){
    alert("Không tìm thấy ngôi sao có tên là " + input);
}else{
    alert("Ngôi sao " + input + " thuộc chòm sao " + output);
}




