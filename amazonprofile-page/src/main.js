"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountType_1 = require("./constants/AccountType");
const card_1 = require("./components/card");
const app = document.getElementById('app');
if (app) {
    const title = document.createElement('h1');
    title.textContent = "Your Account";
    app.appendChild(title);
    const grid = document.createElement('div');
    grid.className = 'account-grid';
    AccountType_1.typeOptions.forEach((option) => {
        const card = (0, card_1.createAccountCard)(option);
        grid.appendChild(card);
    });
    app.appendChild(grid);
}
