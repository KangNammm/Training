// tạo nút
let myNodelist = document.getElementsByTagName("LI");
let i;
for( let i=0; i<myNodelist.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// xóa khi click
let close = document.getElementsByClassName("close");
let j ;
for( let j=0; j<close.length; j++){
    close[j].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Thêm class checked
let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);
 // thêm việc
function newElement(){
    // ttạo node li
    let li = document.createElement("li");
    // lấy giá trị người dùng nhập vào
    let inputValue = document.getElementById("myInput").value;
    // tạo đối tượng text node
    let t = document.createTextNode(inputValue);
    // gán text vừa tạo
    li.appendChild(t);
    // kiểm tra
    if(inputValue === ''){
        alert("You must write something!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    // xóa giá trị thẻ input
    document.getElementById("myInput").value = "";
    // thêm nút vào thẻ mới tạo
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    li.appendChild(span);
    // gán sự kiện
    for( let i=0; close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
