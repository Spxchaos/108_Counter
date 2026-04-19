const display = document.querySelector("#disp_num");
const count=document.querySelector("#incr");
const reset = document.querySelector("#reset");

let start = 0;

display.innerText = `${start}`

function vibrate(ms = 30) {
    if (navigator.vibrate) {
        navigator.vibrate(ms);
    }
}

count.addEventListener("click", ()=>{
    if (start != 108){
    start++;
    display.innerText = `${start}`;}

    if (start === 108){
    count.disabled = true;
    vibrate([100,50,100]);
}

});

reset.addEventListener("click",()=>{
    start = 0
    display.innerText = `${start}`
    count.disabled = false;

});

count.addEventListener("dblclick", e =>{
    e.preventDefault;
})

