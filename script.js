let total = 0;

function addExpense() {
    const name = document.getElementById("name").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    total += amount;
    document.getElementById("total").textContent = total;

    const li = document.createElement("li");
    li.innerHTML = `
        ${name} (${category}) - ₹${amount}
        <button onclick="removeExpense(this, ${amount})">Delete</button>
    `;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}

function removeExpense(button, amount) {
    total -= amount;
    document.getElementById("total").textContent = total;
    button.parentElement.remove();
}
