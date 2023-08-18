let products = JSON.parse(localStorage.getItem("products")) || [];

// ham id tu tang
const getNewId = () =>{
    let max = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if(max<element.product_id){
            max = element.product_id;
        }
    }
    return max+1;
}

// chuc nang hien thi
const showListProduct = (list = products)=>{
    list.sort((a,b) => b.product_id - a.product_id);
    let string = "";
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        string += `<tr>
        <th scope="row">${element.product_id}</th>
        <td>${element.name}</td>
        <td><img src="${element.image}" width="120" height="120" style="object-fit:cover" alt="#"></td>
        <td>${element.product_price} $</td>
        <td><button type="button" class="btn btn-cart">Add to cart</button> </td>
      </tr>`;
    }
    document.getElementById("products").innerHTML = string;
}

// goi ham 1 lan khi tai trang
showListProduct();