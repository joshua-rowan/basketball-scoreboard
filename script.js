const homeEl = document.getElementById("home-el")
const awayEl = document.getElementById("away-el")
const homeBtn1Pt = document.getElementById("1ptHome")
const homeBtn2Pt = document.getElementById("2ptHome")
const homeBtn3Pt = document.getElementById("3ptHome")
const awayBtn1Pt = document.getElementById("1ptAway")
const awayBtn2Pt = document.getElementById("2ptAway")
const awayBtn3Pt = document.getElementById("3ptAway")

let homeScore = 0;
let awayScore = 0;

homeBtn1Pt.addEventListener("click", function increment1Home() {
    homeScore += 1
    homeEl.textContent = homeScore
})

homeBtn2Pt.addEventListener("click", function increment2Home() {
    homeScore += 2
    homeEl.textContent = homeScore
})

homeBtn3Pt.addEventListener("click", function increment3Home() {
    homeScore += 3
    homeEl.textContent = homeScore
})

awayBtn1Pt.addEventListener("click", function increment1Away() {
    awayScore += 1
    awayEl.textContent = awayScore
})

awayBtn2Pt.addEventListener("click", function increment2Away() {
    awayScore += 2
    awayEl.textContent = awayScore
})

awayBtn3Pt.addEventListener("click", function increment3Away() {
    awayScore += 3
    awayEl.textContent = awayScore
})