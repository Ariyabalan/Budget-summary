let transactions = [];

function addTransaction() {
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;

  if (!category || !amount || !date) {
    alert('Please fill out all fields.');
    return;
  }

  const tx = {
    id: Date.now(),
    category,
    amount: parseFloat(amount),
    date,
  };

  transactions.push(tx);
  renderTransactions();
  clearForm();
}

function renderTransactions() {
  const container = document.getElementById('history');
  container.innerHTML = '';

  transactions.forEach(tx => {
    const div = document.createElement('div');
    div.className = 'transaction expense';
    div.innerHTML = `
      <div>
        <strong>${tx.category}</strong> - $${tx.amount}<br/>
        <small>${tx.date}</small>
      </div>
      <button onclick="deleteTransaction(${tx.id})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  renderTransactions();
}

function clearForm() {
  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('date').value = '';
}
