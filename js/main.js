
const  name = document.getElementById("name");
const  subject = document.getElementById("subject")
const  phone = document.getElementById("phone")
const  email = document.getElementById("email")
const  message = document.getElementById("message")



function validate(){
    this.validate.preventDefault();
    var text;
    if(name.value.length< 5){
        text = "Please Enter valid Name";
       alert(text)
        return false;
    }
    if(email.value.length < 6){
        text = "Please Enter valid Email";
        alert(text)
        return false;
    }
    if(subject.value === ''){
        text = "Please Enter Subject Titele";
        alert(text)
        return false;
    }
    if(phone.value.length === 10){
        text = "Please Enter valid Phone Number";
        alert(text)
        return false;
    }
    if(message.length <= 100){
        text = "Please Enter More Than 100 Characters";
        alert(text)
        return false;
    }else {
        console.log("Form Submitted Successfully ")
        return  alert("Form Submitted Successfully!");
    }

}

