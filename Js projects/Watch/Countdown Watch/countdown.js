// Result should occur in the following 
const dayE1 = document.getElementById("day");
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("second");

// Created what is required wanted 
const birthDate = new Date("Sept 13, 2022 00:00:00").getTime()

// updating it everytime
updateCountdown()

// function made on update 
function updateCountdown(){
    // New varibles created for execution 
    const now = new Date().getTime();
    const gap = birthDate - now
    
    // These are variables for selection 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second);

    dayE1.innerText = d;
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;

    // Setting a timer to execute the function after the timer expires
    // Timer is updated after every second 
    setTimeout(updateCountdown, 1000)
}