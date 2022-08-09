let productList = [];
//ten ham: showProduct
//dsach tham so: k cos
//duwx lieeuj trar veef : k co
//chuwcs nawng cuar hamf: lap dsach sp, dien vao trong the product





function showAllProduct (){
    let content = "";
    for (let i = 0; i<productList.length; i++){
        content+= '<tr>' +
        '<td>' + productList[i] + '</td>' +
        '<td><button style="background-color: chartreuse" onclick="editProduct('+i+') ">Sửa</button></td>'+
        '<td><button style="background-color: chartreuse" onclick="deleteProduct('+i+')">Xóa</button></td>' +

    '</tr>'
    }
            document.getElementById("products").innerHTML = content;
           // tong sp//
           document.getElementById("sumOfProducts").innerHTML = '<b>' + " Tổng: "+ '</b>'+ productList.length +  '<b>' + " Sản phẩm"+ '</b>';
}
showAllProduct ();

//Them sp
function creatNewProduct(){
    
    let newP = document.getElementById("newP").value;
    productList.push(newP);
    showAllProduct ();
    document.getElementById("newP").value = "";
}

//xoa sp
function deleteProduct(index){
    productList.splice(index,1);
    
showAllProduct ();
}

//sua sp

function editProduct(index){
    let newValue = prompt("nhập tên sản phẩm mới", productList[index]);
    productList[index] = newValue;
    showAllProduct ();
}


//tong sp