// var ds = [];

// function typing(e){
//     var notices = document.getElementsByClassName("notice");
//     for (var i=0;i<notices.length;i++){
//         notices[i].style.display = "none";
//     }
//     var this_notice = e.nextElementSibling;
//     this_notice.style.display = "block";
//     this_notice.innerText = e.value;

//     // e.parentElement -> div.form-group
//     // e.previousElementSibling
// }

// function submit(){

//     var fn = document.getElementById("fullname");
//     var tl = document.getElementById("tel");
//     var student = {
//         fullname:fn.value,
//         tel:tl.value,
//         email:document.getElementById("email").value,
//         address:document.getElementById("address").value
//     };

//     // var formcontrols = document.getElementsByClassName("form-control");// 3 input + textarea
//     // for(var i =0;i<formcontrols.length;i++){
//     //     student[formcontrols[i].name] = formcontrols[i].value;
//     // }

//     // for(var i =0;i<formcontrols.length;i++){
//     //     switch (formcontrols[i].name){
//     //         case "fullname":student.fullname = formcontrols[i].value;break;
//     //         case "tel":student.tel = formcontrols[i].value;break;
//     //         case "email":student.email = formcontrols[i].value;break;
//     //         case "address":student.address = formcontrols[i].value;break;
//     //     }
//     // }
//     // ra đây chúng ta có 1 object student đầy đủ dữ liệu nhập từ form
//     ds.push(student);
//     renderHTML();
// }
// function renderHTML(){
//     var html = "";// mục đích chính là innerHTML của ul
//     for(var i=0;i<ds.length;i++){
//         html += "<li>\n" +
//             "                        <h2>"+ds[i].fullname+"</h2>\n" +
//             "                        <h3>"+ds[i].tel+"</h3>\n" +
//             "                        <h3>"+ds[i].email+"</h3>\n" +
//             "                        <p>"+ds[i].address+"</p>\n" +
//             "                    </li>"
//     }
//     var list = document.getElementById("students");
//     list.innerHTML = html;
// }
// let productApi = "http://localhost:3000/products";

// let productsHtml = fetch(productApi)
//                     .then(function(response) {
//                         return response.json();
//                     })
//                     .then(function(products) {
//                         var htmls = products.map(function(product) {
//                             return `<div class="product">
//                             <a href="">
//                               <img src="${product.image}" alt="" class="product-image">
//                             </a>
//                             <p class="product-name text-center">${product.title}</p>
//                             <p class="price text-center">${product.price}/${product.unit}</p>
//                             <div class="product-actions">
//                               <a href="" class="product-links">Chi Tiết</a>
//                               <a href="" class="product-links">Mua ngay</a>
//                             </div>
//                           </div>`;
//                         });
//                         var html = htmls.join(" ");
//                         document.getElementsByClassName("product-list")[0].innerHTML = html;
//                     })
//                     .catch(function(error) {
//                         console.log(error);
//                     });

$(".thumbnail").on("click", function (event) {
    event.preventDefault();
    var clicked = $(this);
    var newSelection = clicked.data("big");
    var $img = $(".primary").css("background-image", "url(" + newSelection + ")");
    clicked.parent().find(".thumbnail").removeClass("selected");
    clicked.addClass("selected");
    $(".primary").empty().append($img.hide().fadeIn("slow"));
  });

  $(".quantity-minus").on("click", function() {
    var currentQuantity = $(".quantity-input").val();
    if(currentQuantity <= 1) {
        $(".quantity-input").val(1);
    }else {
        $(".quantity-input").val(currentQuantity - 1);
    }
  });

  $(".quantity-plus").on("click", function() {
    var currentQuantity = $(".quantity-input").val();
        $(".quantity-input").val(Number(currentQuantity) + 1);
  });