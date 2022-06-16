let numberBox = document.querySelector("#numberBox");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let myNum = 0;

plus.addEventListener('click', function() {
    let existingNum = numberBox.value;
    myNum = existingNum;
    myNum++;
    numberBox.value = myNum;
});

minus.addEventListener('click', () => {
    let existingNum = numberBox.value;
    myNum = existingNum;
    myNum--;
    numberBox.value = myNum;
});

reset.addEventListener('click', () => {
    let existingNum = numberBox.value;
    myNum = existingNum;
    myNum = 0;
    numberBox.value = myNum;
});