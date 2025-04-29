const incomes = JSON.parse(localStorage.getItem('incomes') || '[]');
const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');

const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
const balance = totalIncome - totalExpenses;

document.getElementById('totalIncome').textContent = totalIncome;
document.getElementById('totalExpenses').textContent = totalExpenses;
document.getElementById('balance').textContent = balance;
