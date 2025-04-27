"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountCard = void 0;
const createAccountCard = (option) => {
    const card = document.createElement('div');
    card.className = 'account-card';
    const img = document.createElement("img");
    img.src = option.icon;
    img.alt = option.title;
    const h2 = document.createElement("h2");
    h2.textContent = option.title;
    const p = document.createElement("p");
    p.textContent = option.description;
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    return card;
};
exports.createAccountCard = createAccountCard;
