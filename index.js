const score = document.querySelector(".score")
const p = document.querySelector(".p")
const click = document.querySelector(".click")
const click1 = document.querySelector(".click1")

console.log(score)
console.log(p)
console.log(click)


let scoreValue = 0
const winScore = 5

click.addEventListener("click", function () {

    if (scoreValue >= winScore) {
        return
    }
    scoreValue++;
    score.textContent = scoreValue




    if (scoreValue === winScore) {
        p.textContent = "winner"

    }
})









click.addEventListener("click1", function () {

    if (scoreValue >= winScore) {
        return
    }
     function minus() {
  count--;
  document.getElementById("number").textContent = count;
}

    if (scoreValue === winScore) {
        p.textContent = "winner"

    }
})






