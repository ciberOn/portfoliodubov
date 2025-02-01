const btn = document.getElementById("btn")
const array = ["+5kb","-5kb","+10kb","-10kb","-5kb","+10kb","-10kb","+100kb","-5kb","+10kb","-5kb","+10kb","-5kb","+10kb","-5kb","+10kb","-5kb","+10kb","-5kb","+10kb",]
btn.addEventListener("click", ()=>{ 
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText = array[rndNum]
})
const body = document.querySelector("body")
const blackTheme = document.querySelector(".header__circles")
const circLeone  = document.querySelector(".circle__one")
const route = document.getElementById("route__fortune")
btn.addEventListener("click",()=>{
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText = array[rndNum]
    route.classList.add("animation__style")
    setTimeout(() => {
        route.classList.remove("animation__style")

    }, 4000);
})
blackTheme.addEventListener("click", function(){
    body.classList.toggle("dark-theme");
    circLeone.classList.toggle("dark-theme");
})