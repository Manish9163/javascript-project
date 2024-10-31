
function changeTheSlide(){
    
    const imgs = document.querySelectorAll('.con');
    const prev_btn = document.querySelector('#left');
    const nxt_btn = document.querySelector('#right');
    
    let n = 0;
    
    function changeSlide() {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
        imgs[n].style.display = 'block';
    }
    
    changeSlide();
    
    prev_btn.addEventListener('click', (e) => {
        if (n > 0) {
            n--;
            console.log(window);
        } else {
            n = imgs.length - 1;
        }
        changeSlide();
    });
    
    nxt_btn.addEventListener('click', (e) => {
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    });
}
changeTheSlide();





function changeArray() {
    const imgs = document.querySelectorAll('img');
    let currentIndex = 0;

    imgs[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imgs.length;
    imgs[currentIndex].classList.add('active');


}

setInterval(changeArray, 2000);
// setInterval(() => {
//     changeTheSlide();
// }, 2000);
function slider(){
    const sc = document.querySelectorAll('.products');
    for (const item of sc) {
        item.addEventListener('wheel', (evt)=>{
            evt.preventDefault();
            item.scrollLeft+=evt.deltaY;
        })
    }
}
slider();
