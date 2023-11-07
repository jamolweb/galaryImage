let img1 = document.querySelector('.littleimg');
let img2 = document.querySelector('.img2');

let container = document.querySelector('.container')

let Yoqi = document.querySelector('.y-oqi')
let Xoqi = document.querySelector('.x-oqi')

let chapgaAylan = document.querySelector('.chapgaaylan');
let onggaAylan = document.querySelector('.onggaAylan')

let zoomPlus = document.querySelector('.plus')
let zoomMinus = document.querySelector('.minus')

img1.addEventListener('click', () => {
    container.style.display = 'flex'
})
container.addEventListener('click', (e) => {
    if (e.target.className == 'container') {
        container.style.display = 'none'
    }
})

// ////// y oqi boyicha aylantirish
Yoqi.addEventListener('click',()=>{
    img2.classList.toggle('yOqi')
})
// ////// x oqi boyicha aylantirish
Xoqi.addEventListener('click',()=>{
    img2.classList.toggle('xOqi')
})
// //////chapga burish
let boshlangichGradus = 90;

chapgaAylan.addEventListener('click',()=>{
    boshlangichGradus-=90;
    img2.style.transform = `rotate(${boshlangichGradus}deg)`
});
onggaAylan.addEventListener('click',()=>{
    boshlangichGradus+=90;
    img2.style.transform = `rotate(${boshlangichGradus}deg)`
});

// /////////////////// ZOOM PULS VA MINUS
let x = 1;
let y = 1;
zoomPlus.addEventListener('click',()=>{
    x+=0.5
    y+=0.5
    img2.style.transform = `scale(${x},${y})`
})
zoomMinus.addEventListener('click',()=>{
    x-=0.5
    y-=0.5
    if(x>=1 || y>=1){
        img2.style.transform = `scale(${x},${y})`
    } else{
        x=1;
        y=1;
    }
})