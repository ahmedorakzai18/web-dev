let forms = document.querySelector("form");

forms.addEventListener("submit" , function(){
    // alert("Form Submitted");
    console.log("Username Submitted");
    event.preventDefault();
});