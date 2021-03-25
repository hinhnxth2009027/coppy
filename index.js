document.addEventListener("DOMContentLoaded",function (){
    var podUp = document.querySelector('.pod-up')
    var btnShowPodUp = document.querySelector('.content>button')
    btnShowPodUp.onclick = function (){
        podUp.style.height='300px'
        podUp.style.border='red 2px solid'
        podUp.onclick = function (){
            podUp.style.height= "0px"
            podUp.style.border = "none"
        }
    }
})