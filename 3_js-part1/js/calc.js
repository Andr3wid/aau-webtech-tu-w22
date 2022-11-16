const btnAdd = document.querySelector('input[name="add-investment"]');
const btnCalc = document.querySelector('input[name="calculate-balance"]');

const txtCurrency = document.querySelector('input[name="currency"]');
const txtAmount = document.querySelector('input[name="amount"]');
const txtType = document.querySelector('select');
const txtRate = document.querySelector('input[name="rate"]');

const tbody = document.querySelector('tbody');

let nextTableEntryCount = 1;

function getTdElement(value) {
    const td = document.createElement('td');
    td.innerHTML = value;

    return td;
}

btnCalc.addEventListener('click', function(e) {
    const tableRows = document.querySelectorAll('tbody > tr');

    let totalEarnings = 0;

    tableRows.forEach(row => {
        const tdElements = row.querySelectorAll('td');

        const type = tdElements.item(2).innerText;
        const amount = tdElements.item(3).innerText;

        if(type === 'Buy') {
            totalEarnings = totalEarnings - Number(amount);
        } else {
            totalEarnings = totalEarnings + Number(amount);
        }
    });

    alert('Your total balance is ' + totalEarnings);
});

btnAdd.onclick = function(event) {

    const deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'Delete');
    deleteButton.classList.add('btn-danger');
    deleteButton.classList.add('btn');
    deleteButton.addEventListener('click', function(event) {
        this.parentElement.parentElement.remove();
    });

    const row = document.createElement('tr');

    row.appendChild(getTdElement(nextTableEntryCount++));
    row.appendChild(getTdElement(txtCurrency.value));
    row.appendChild(getTdElement(txtType.value));
    row.appendChild(getTdElement(txtAmount.value));
    row.appendChild(getTdElement(txtRate.value));

    const deleteButtonTd = getTdElement('');
    deleteButtonTd.appendChild(deleteButton);

    row.appendChild(deleteButtonTd);

    tbody.appendChild(row);
};
