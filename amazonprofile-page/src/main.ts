import { typeOptions } from './constants/AccountType';
import { createAccountCard } from './components/card';


const app = document.getElementById('app');

if (app) {
  const title = document.createElement('h1');
  title.textContent = "Your Account";
  app.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'account-grid';

  typeOptions.forEach((option) => {
    const card = createAccountCard(option);
    grid.appendChild(card);
  });

  app.appendChild(grid);
}