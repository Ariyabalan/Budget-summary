function addExpense() {
    const item = document.getElementById('expenseItem').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    if (item && amount) {
      let expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
      expenses.push({ item, amount });
      localStorage.setItem('expenses', JSON.stringify(expenses));
      displayExpense();
    }
  }
  
  function displayExpense() {
    const list = document.getElementById('expenseList');
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    list.innerHTML = expenses.map(e => `<div class="transaction">- ${e.item}: $${e.amount}</div>`).join('');
  }
  displayExpense();
  