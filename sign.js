var userdate = {
    name:"batol",
    password:"Batol@123",
    age:20,
    gender:"female",
    phonenumber:12345678901,
};
function addvalue(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phonenumber').value;
    var letters = /[A-Za-z]/;
    var numbers= /[/d]/;
     var special = /[!@#$%^&*()?]/;
     var data = (username,password,age,gender,phone);
    if(username !=='' && password!=='' && age!=='' && gender!=='' && phone!=='')
    {
       if(letters.test(password) && numbers.test(password) && special.test(password)&& password<=8)
       {
        userdate.push(data);
        console.log(userdate);
       }
       if(phone.length==11)
        if(18<age.length>60)
        {
            alert("sign up success");
            return;
        }
    }
    return;
}

function getvalue()
{
    var username = document.getElementById('username1').value;
    var password = document.getElementById('password1').value;
    if(userdate.name===username && userdate.password===password)
    {
        alert('login success');
        console.log(userdate);

        return true;
    }
    else{
        alert('login failed');
        return;
    }
}

function forgetpass() {
    var username = document.getElementById('username2').value;
    var password = document.getElementById('password2').value;
    for(var i =0; i<userdate.length ;i++)
    {
        if(userdate[i].name==username )
        {
            alert("success");
            userdate[i].password=password;
            return;
        }
        else{
            alert("failed");
        }
        console.log(userdate);
    }
   
}