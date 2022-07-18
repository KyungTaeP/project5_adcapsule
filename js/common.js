const $menu = document.querySelector('.menu');
const $ham = document.querySelector('.ham');
const $bg_size = document.querySelector('.bg_con');


$ham.addEventListener('click', ()=>{
    $menu.classList.toggle('on');
    $ham.classList.toggle('on');
})

window.addEventListener('scroll', ()=>{
    let win_x = window.scrollX;
    let win_y = window.scrollY;
    console.log(win_x, win_y);

    if(win_y >= 245){
        $bg_size.style.width = "calc(100% - 30px)";
        $bg_size.style.height = "calc(100vh - 30px)";
    } else {
        $bg_size.style.width = "500px";
        $bg_size.style.height = "500px";
    }
});