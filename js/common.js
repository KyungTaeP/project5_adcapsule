const $logo = document.querySelector('.logo');
const $menu = document.querySelector('.menu');
const $ham = document.querySelector('.ham');
const $bg_size = document.querySelector('.bg_con');

$logo.addEventListener('click', ()=>{
    // scroll을 top:0까지 부드럽게 올려라(맨 위까지)
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

$ham.addEventListener('click', ()=>{
    $menu.classList.toggle('on');
    $ham.classList.toggle('on');
})

window.addEventListener('scroll', ()=>{
    let win_x = window.scrollX;
    let win_y = window.scrollY;
    console.log(win_x, win_y);

    // scrollY의 값이 245 이상, 1000 이하일 때 커짐
    if(win_y >= 245 && win_y <= 1000){
        $bg_size.style.width = "calc(100% - 30px)";
        $bg_size.style.height = "calc(100vh - 30px)";
    } else {
        $bg_size.style.width = "500px";
        $bg_size.style.height = "500px";
    }
});
