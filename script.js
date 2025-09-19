const countLabel = document.getElementById("count-label");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");
let count = 0;

decreaseBtn.addEventListener("click", function() {
    count--;
    countLabel.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    countLabel.textContent = count;
});

increaseBtn.addEventListener("click", function() {
    count++;
    countLabel.textContent = count;
});