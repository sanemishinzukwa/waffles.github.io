const changefont = document.getElementById("changefont");
const fontchange = document.getElementById("fontchange");
const changeimgbtn = document.getElementById("changeimgbtn");
const profile = document.getElementById("profile");
const runanimation = document.getElementById("animatebtn");
changefont.addEventListener("click",()=>{
    fontchange.style.fontFamily = "Arial, sans-serif";
})

function changephoto (){
    profile.src = "download.jpeg"
    changeimgbtn.textContent = "Refresh to Get Image back"
}

changeimgbtn.addEventListener("click", ()=>{
    changephoto();
})

function animation (){
    profile.animate([
        {
            tranform: 'translateX(0px)'
        
        },
        {transform: 'translateX(200px)'}
    ],
{
    duration: 1000,
    iteration: Infinity,
    direction: 'alternate',
    easing : 'ease-in-out'
});
}

animatebtn.addEventListener("click",()=>{
    animation();
})