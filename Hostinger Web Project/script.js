// NAVBAR DROPDOWN MENU
let navLi_item = document.querySelectorAll(".navLi_item")

navLi_item.forEach((e, ind) => {
    e.addEventListener("click", () => {
        for(let i = 0; i < navLi_item.length; i++){
            if(i != ind){
                if(navLi_item[i].parentElement.classList.contains("active")){
                    navLi_item[i].parentElement.classList.remove("active")
                }
            }
        }
        
        if(!(e.parentElement.classList.contains("active"))){
            e.parentElement.classList.add("active")
        }else{
            e.parentElement.classList.remove("active")
        }
    })
})

// RESPONSIVE NAVBAR
let navbar = document.getElementById("navbar")
let hamburger = document.getElementById("hamburger")
let closeBtn = document.getElementById("closeBtn")
hamburger.addEventListener("click", () => {
    navbar.classList.add("showMenu")
})
closeBtn.addEventListener("click", () => {
    if(navbar.classList.contains("showMenu")){
        navbar.classList.remove("showMenu")
    }
})

// PRICE CARD BENEFITS SHOW
let benBtn = document.querySelectorAll(".ben-btn")
let toggle = document.querySelectorAll(".toggle")
benBtn.forEach((e, ind) => {
    e.addEventListener("click", () => {
        if(!(e.parentElement.parentElement.classList.contains("show"))){
            e.parentElement.parentElement.classList.add("show")
            toggle[ind].innerHTML = "Hide"
        }else{
            e.parentElement.parentElement.classList.remove("show")
            toggle[ind].innerHTML = "Show"
        }
    })
})

// COUNTDOWN

let stTime = setInterval(() => {
    let daysSpan = document.getElementById("days")
    let hoursSpan = document.getElementById("hours")
    let minutesSpan = document.getElementById("minutes")
    let secondsSpan = document.getElementById("seconds")

    let destTime = new Date("30 Sep, 2022 07:07:07").getTime()
    let currTime = new Date().getTime()
    let diffTime = destTime - currTime

    if(diffTime < 0){
        clearInterval(stTime)
        daysSpan.innerHTML = "00"
        hoursSpan.innerHTML = "00"
        minutesSpan.innerHTML = "00"
        secondsSpan.innerHTML = "00"
    }else{
        let days = Math.floor(diffTime / (1000 * 24 * 60 * 60))
        let hours = Math.floor((diffTime % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60))
        let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60 ))
        let seconds = Math.floor((diffTime % (1000 * 60)) / 1000)
    
        daysSpan.innerHTML = days
        hoursSpan.innerHTML = hours
        minutesSpan.innerHTML = minutes
        secondsSpan.innerHTML = seconds
    }
}, 1000)
