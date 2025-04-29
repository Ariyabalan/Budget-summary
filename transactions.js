const incomes = JSON.parse(localStorage.getItem('incomes') || '[]');
const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
const list = document.getElementById('transactionList');

incomes.forEach(tx => {
  const div = document.createElement('div');
  div.className = 'transaction';
  div.textContent = `+ ${tx.source}: $${tx.amount}`;
  list.appendChild(div);
});

expenses.forEach(tx => {
  const div = document.createElement('div');
  div.className = 'transaction';
  div.textContent = `- ${tx.item}: $${tx.amount}`;
  list.appendChild(div);
});
