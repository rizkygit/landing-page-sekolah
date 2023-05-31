const buttonKiri = document.querySelector('.kiri');
const buttonKanan = document.querySelector('.kanan');
const main3Content = document.querySelector('.main3-content');
const left = document.querySelector('.left2');
const right = document.querySelector('.right2');
const left10 = document.querySelector('.left10');
const right10 = document.querySelector('.right10');
const containermain5 = document.querySelector('.container-main5');
const bagInti = document.querySelector('.bag-inti');

buttonKiri.addEventListener('click', function(){
    main3Content.scrollLeft -= 500;
})

buttonKanan.addEventListener('click', function(){
    main3Content.scrollLeft += 250;
})

left.addEventListener('click', function(){
    containermain5.scrollLeft -= 250;
})

right.addEventListener('click', function(){
    containermain5.scrollLeft += 250;
})

left10.addEventListener('click', function(){
    bagInti.scrollLeft -= 250;
})

right10.addEventListener('click', function(){
    bagInti.scrollLeft += 250;
})

