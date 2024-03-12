var fname = document.getElementById("fnames")
var dname =document.getElementById("dname")
var lname = document.getElementById("lnames")
var dlname =document.getElementById("dlname")
var Age = document.getElementById("age")
var dage =document.getElementById("dage")
var Course = document.getElementById("course")
var dcourse =document.getElementById("dcourse")
var Mail = document.getElementById("mail")
var dmail =document.getElementById("dmail")


function  change()
{
    dname.textContent=fname.value
    dlname.textContent=lname.value
    dage.textContent=Age.value
    dcourse.textContent=Course.value
    dmail.textContent=Mail.value
}