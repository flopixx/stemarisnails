let slider=document.querySelector(".slider-container");
let sliderInd=document.querySelectorAll(".slider-item");
let contador=1;
let tamano=sliderInd[0].clientWidth;
let intervalo=5000;

window.addEventListener("resize",function(){
    tamano=sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
slides()
},intervalo);

function slides(){
    slider.style.transform="translate(" + (- tamano * contador) + "px";
    slider.style.transition="transform 1s"
    contador++
    if(contador===sliderInd.length){
        contador=0
        setTimeout(function(){
            slider.style.transform="translate(0px)";
            slider.style.transition="transform 0s"
        },intervalo)
    }
}



const navslides =()=>{
  let hambur=document.getElementById("open")
let nav=document.getElementById("nav")
  hambur.addEventListener('click',()=>{
   nav.classList.toggle('active')
  })
}

navslides()