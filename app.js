const body = document.querySelector(`body`);
const btnBlue = document.querySelector(`#color-blue`);
const btnBrown = document.querySelector(`#color-brown`);
const btnGreen = document.querySelector(`#color-green`);
const btnNone = document.querySelector(`#color-none`);

// Applying logic 

btnBlue.addEventListener(`mouseover`,()=> {
    body.classList.add(`bg-blue`,`text-white`);
    body.classList.remove(`bg-green`,`bg-yellow`);
});
btnBrown.addEventListener(`click`,()=> {
    body.classList.add(`bg-brown`,`text-white`);
    body.classList.remove(`bg-red`,`bg-blue`);

});
btnGreen.addEventListener(`click`,()=> {
    body.classList.add(`bg-green`,`text-white`);
    body.classList.remove(`bg-black`,`bg-red`);

});
btnNone.addEventListener(`click`,()=> {
    body.classList.remove(`bg-blue`,`bg-green`, `bg-red ` ,` text-white`);

});
