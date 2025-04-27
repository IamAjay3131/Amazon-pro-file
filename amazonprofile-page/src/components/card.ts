import { TypeOption } from "../models/accountType";


export const createAccountCard=(option:TypeOption):HTMLElement=>{
  const card=document.createElement('div');
  card.className='account-card';

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
  