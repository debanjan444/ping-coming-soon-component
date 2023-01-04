function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
  alert("correct email");
  const v =document.querySelector("small").style.visibility;
  if(v === "visible"){
  document.querySelector("small").style.visibility = "hidden";
  }



document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.querySelector("small").style.visibility = "visible";
document.querySelector("input").classList.add("red-border");
document.form1.text1.focus();
return false;
}
}
