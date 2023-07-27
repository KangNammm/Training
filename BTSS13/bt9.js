let englishWord = ["hello","goodbye","car","fire","miracle","lyrical","poetic","experience"];
let VNWord = ["Xin chào", "Tạm biệt","Xe ôtô","Lửa","Phép màu" ,"Trữ tình" , "Nên thơ","Kinh nghiệm"];
let word = prompt(" Enter a word");
let kq = [];
let flag = false;
for(i=0; i<englishWord.length; i++){
    if(word==englishWord[i]){
        kq.push(VNWord[i]);
        flag = true;
    }
}
if(flag == false){
    kq.push(" No data");
}
alert(kq.join(""));