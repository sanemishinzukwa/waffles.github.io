const mypg = document.getElementById("mypg");
const notfoundbtn = document.getElementById("notfoundbtn");
const imghidebtn = document.getElementById("imghidebtn")
const spin = document.getElementById("spinimg");
const spinbtn = document.getElementById("spinbtn");
let currentRotation = 0;
const myaudio = document.getElementById("myaudio");
const playbtn = document.getElementById("playbtn");



notfoundbtn.addEventListener("click",()=>{
mypg.textContent = '';
notfoundbtn.textContent = "Now refresh the Page to get it back";
});

imghidebtn.addEventListener("click", ()=>{
    hideimg();
});
function hideimg(){
let img = document.getElementById("myimg");

if(img.style.display === "none"){
    img.style.display = "block";
    imghidebtn.textContent = "Hide Image"

}
else{
    img.style.display = "none";
    imghidebtn.textContent = "Show Image"
}
}


spinbtn.addEventListener("click", ()=>{
spinfun();
});

function spinfun(){
      
spin.style.transform = `translateY(-200px)`;
spinbtn.style.background = "pink";
}



playbtn.addEventListener("click", ()=>{
    myaudio.play();
})

