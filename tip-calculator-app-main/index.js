
console.log("JS file loaded!");


const billInput = document.getElementById('bill-input');
const peopleNumber = document.getElementById('people-input')


const tipPerPerson = document.getElementById('tip-per-person')


const boxes = document.querySelectorAll(".amount-box");
const customBox = document.getElementById("custom-box");

const totalPerPerson = document.getElementById('total-per-person')

let selectedTip = 0;

const handleBoxClick = (box) => {
  boxes.forEach(b => b.classList.remove("selected")); // remove from all
  box.classList.add("selected");                      // highlight clicked one

  customBox.value = "";
  selectedTip = parseFloat(box.textContent);
  console.log("Selected Tip:", selectedTip);
};

// attach listener
boxes.forEach(box => {
  box.addEventListener("click", () => handleBoxClick(box));
});

customBox.addEventListener('input', () => {
    boxes.forEach( b => b.classList.remove("selected"));
    selectedTip = parseFloat(customBox.value) || 0;

    console.log('Custom Tip :', selectedTip)
})

function finalCalculation() {
    const bill = parseFloat(billInput.value) || 0;
    console.log(bill)
    const people = parseFloat(peopleNumber.value) || 0;
    console.log(people)
    const tipPercent = parseFloat(selectedTip) || 0;
    console.log(tipPercent)

    const tipPerPersonValue = (bill * (tipPercent / 100)) / people;

    const totalPerPersonValue = (bill/people) + tipPerPersonValue;

     tipPerPerson.textContent = `$${tipPerPersonValue.toFixed(2)}`;
     totalPerPerson.textContent = `$${totalPerPersonValue.toFixed(2)}`;
}

billInput.addEventListener("input", finalCalculation);
peopleNumber.addEventListener("input", finalCalculation);

