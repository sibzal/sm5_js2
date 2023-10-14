// аккордион
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(element => {
    element.addEventListener('click', () => {
        accordionBody = element.querySelector('.accordion_body')
        img = element.querySelector('.fa-plus')
        accordionBody.classList.toggle('accordion_body_active')
        img.classList.toggle('img_active')
    })
})
// аккордион

// вкладки
const buttons = document.querySelectorAll('.tab_header_button')
const tabs = document.querySelectorAll('.tab_body')

for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click', () => {
        for(let y = 0; y < tabs.length; y++){
            if (x == y){
                tabs[y].classList.add('tab_body_active')
            }else{
                tabs[y].classList.remove('tab_body_active')
            }
        }
    })
}
buttons
// вкладки

// отложенный вызов

const timeBlock = document.querySelector('.time-block')
const timeBtn = document.querySelector('.time-button')
const countEl = document.querySelector('.count')

setTimeout(() => {
    countFunc()
}, 10000);

timeBtn.addEventListener('click', (() => {
    countFunc()
}))

function countFunc () {
    timeBlock.classList.add('active')
    let count = 5
    countHtml(count)
    timeBtn.classList.remove('active')
    const countInterval = setInterval(() => {
        count = count - 1
        countHtml(count)

        if(count === 0){
            clearInterval(countInterval)
            timeBlock.classList.remove('active')
            timeBtn.classList.add('active')
        }

    }, 1000)
}

function countHtml (value) {
    countEl.innerHTML = value
}
// отложенный вызов