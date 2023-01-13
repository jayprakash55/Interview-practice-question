var num1 = document.querySelector("#num1")
var num2= document.querySelector("#num2")


var addBtn = document.querySelector("#btn-add")
var subBtn = document.querySelector("#btn-sub")
var mulBtn = document.querySelector("#btn-mul")
var divBtn = document.querySelector("#btn-div")
var result = document.querySelector("#ans")


// console.log(num1);

var ans= 0;

addBtn.addEventListener("click", ()=>
{
   ans = Number(num1.value) + Number(num2.value);
   result.innerText= `Your result is ${ans}`
   console.log(ans);
})

subBtn.addEventListener("click", ()=>
{
    ans = num1.value - num2.value ;
    result.innerText = `Your result is ${ans}`
    console.log(ans)
} )

mulBtn.addEventListener("click", ()=> 
{
    ans = num1.value * num2.value;
    result.innerText = `Your result is ${ans}`
    console.log(ans);
}) 

divBtn.addEventListener("click", ()=>
{
    ans = num1.value / num2.value;
    result.innerText=` Your result is ${ans}`

    // console.log(ans)
})