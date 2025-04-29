function addIncome() {
    const source = document.getElementById('incomeSource').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    if (source && amount) {
      let incomes = JSON.parse(localStorage.getItem('incomes') || '[]');
      incomes.push({ source, amount });
      localStorage.setItem('incomes', JSON.stringify(incomes));
      displayIncome();
    }
  }
  
  function displayIncome() {
    const list = document.getElementById('incomeList');
    const incomes = JSON.parse(localStorage.getItem('incomes') || '[]');
    list.innerHTML = incomes.map(i => `<div class="transaction">+ ${i.source}: $${i.amount}</div>`).join('');
  }
  displayIncome();
  