const times = document.querySelectorAll('.count_number'),
    box = document.querySelector('.count__box');
window.addEventListener("scroll", function scroll() {
    if (box.offsetTop < window.scrollY + 2.5 * box.clientHeight) {
        times.forEach(time => {
            function count(i = 0) {
                time.innerHTML = i
                i++
                let countAtt = time.getAttribute("count")
                if (i <= countAtt) {
                    setTimeout(() => {
                        count(i)
                    }, 100);
                }
            }
            count()
        })
        window.removeEventListener("scroll", scroll)
    }
})

const menuImg = document.querySelector('.nav__menu-img'),
      navList = document.querySelector('.nav__list'),
      close = document.querySelector('.nav_close')

// menuImg.addEventListener('click', ()=>{
//     navList.classList.add('active')
// } )
// close.addEventListener('click', ()=>{
//     navList.classList.remove('active')
// })

window.addEventListener("load", ()=>{
    document.querySelector(".loader").classList.add("hidden");
})
