const japButton = document.querySelector('#jaapButton');
const resetButton = document.querySelector('#reset');
const count = document.querySelector('#counter');
const rounds = document.querySelector('#roundsDone');
const intendedRounds = document.querySelector('#roundsIntended');
let jaapCount = 0;
let roundsDone = 0;
let leng = 108;
japButton.addEventListener('click', function () {
    if (jaapCount === 0) {
        count.classList.remove('has-text-success');
    }
    jaapCount += 1;
    count.textContent = jaapCount;
    if (jaapCount === leng) {
        count.classList.add('has-text-success');
        roundsDone += 1;
        rounds.textContent = roundsDone;
        jaapCount = 0;
    }
    
    
});

intendedRounds.addEventListener('change', function () {
    leng = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);
function reset() {
    jaapCount = 0;
    count.textContent = jaapCount;
    roundsDone = 0;
    rounds.textContent = 0;
    count.classList.remove("has-text-success");
}
