const currentBalanceInfo = document.querySelector("#current-balance");
const expensesInfo = document.querySelector("#expenses");

function saveData(event) {
    event.preventDefault();

    console.log(event.target["note"].value);
    console.log(event.target["amount"].value);
}
