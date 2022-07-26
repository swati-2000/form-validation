function validate(){
    var firstname=document.stud_form.firstname;
    var secondname=document.stud_form.secondname;
    var gender=document.stud_form.gender;
    var mobile=document.stud_form.mobile;
    var email=document.stud_form.email;
    var password=document.stud_form.password;
    var address=document.stud_form.address;
    var city=document.stud_form.city;
    var state=document.stud_form.state;
    var country=document.stud_form.country;
    var course=document.stud_form.course;
    if(firstname.value.length <=0){
        alert("FisrtName is required");
        firstname.focus();
        return false;
    }
    if(secondname.value.length <=0){
        alert("SecondName is required");
        secondname.focus();
        return false;
    }
    if(gender.value.length <=0){
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if(mobile.value.length <=0){
        alert("Mobile is required");
        mobile.focus();
        return false;
    }
    if(email.value.length <=0){
        alert("Email is required");
        email.focus();
        return false;
    }
    if(password.value.length <=0){
        alert("Password is required");
        password.focus();
        return false;
    }
    if(address.value.length <=0){
        alert("Address is required");
        address.focus();
        return false;
    }
    if(city.value.length <=0){
        alert("City is required");
        city.focus();
        return false;
    }
    if(state.value.length <=0){
        alert("State is required");
        state.focus();
        return false;
    }
    if(country.value.length <=0){
        alert("Country is required");
        country.focus();
        return false;
    }
    if(course.value.length <=0){
        alert("Course is required");
        course.focus();
        return false;
    }
     return false;
 }
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateNumber(id){
  var element=document.getElementById(id);
  var regExp=/^[0-9]{10}$/;
 
  if(!regExp.test(element.value)){
      alert("Enter your number");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateEmail(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+.[a-zA-Z]{2,4}$/;
 
  if(!regExp.test(element.value)){
      alert("Enter valid Email");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validatePassword(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z0-9]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter valid password");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
function validateString(id){
  var element=document.getElementById(id);
  var regExp=/^[a-zA-Z ]+$/;
 
  if(!regExp.test(element.value)){
      alert("Enter string value.");
      element.style.border="2px solid red";
      element.focus();
      return false;
  }
  element.style.border="2px solid green";
}
