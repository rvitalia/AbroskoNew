export function burgerOpen(){
    let buttonOpen = document.querySelector('[data-openburger]');
    buttonOpen.addEventListener('click',()=>{
        let burger = document.querySelector('[data-burger]');
        burger.classList.add('burger-active');
        setTimeout(function (){
            burger.style.opacity = '1';
            burger.style.transform = 'translateX(0)';
        },100)
    })
}
export function burgerClose(){
    let buttonClose = document.querySelector('[data-burgerclose]');
    buttonClose.addEventListener('click',()=>{
        let burger = document.querySelector('[data-burger]');
        burger.style.opacity = '0';
        burger.style.transform = 'translateX(-200%)';
        setTimeout(function (){
            burger.classList.remove('burger-active');
        },100)
    })
}