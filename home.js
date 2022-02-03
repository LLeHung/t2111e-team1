var ds = [];

function typing(e){
    var notices = document.getElementsByClassName("notice");
    for (var i=0;i<notices.length;i++){
        notices[i].style.display = "none";
    }
    var this_notice = e.nextElementSibling;
    this_notice.style.display = "block";
    this_notice.innerText = e.value;

    // e.parentElement -> div.form-group
    // e.previousElementSibling
}

function submit(){

    var fn = document.getElementById("fullname");
    var tl = document.getElementById("tel");
    var student = {
        fullname:fn.value,
        tel:tl.value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value
    };

    // var formcontrols = document.getElementsByClassName("form-control");// 3 input + textarea
    // for(var i =0;i<formcontrols.length;i++){
    //     student[formcontrols[i].name] = formcontrols[i].value;
    // }

    // for(var i =0;i<formcontrols.length;i++){
    //     switch (formcontrols[i].name){
    //         case "fullname":student.fullname = formcontrols[i].value;break;
    //         case "tel":student.tel = formcontrols[i].value;break;
    //         case "email":student.email = formcontrols[i].value;break;
    //         case "address":student.address = formcontrols[i].value;break;
    //     }
    // }
    // ra đây chúng ta có 1 object student đầy đủ dữ liệu nhập từ form
    ds.push(student);
    renderHTML();
}
function renderHTML(){
    var html = "";// mục đích chính là innerHTML của ul
    for(var i=0;i<ds.length;i++){
        html += "<li>\n" +
            "                        <h2>"+ds[i].fullname+"</h2>\n" +
            "                        <h3>"+ds[i].tel+"</h3>\n" +
            "                        <h3>"+ds[i].email+"</h3>\n" +
            "                        <p>"+ds[i].address+"</p>\n" +
            "                    </li>"
    }
    var list = document.getElementById("students");
    list.innerHTML = html;
}