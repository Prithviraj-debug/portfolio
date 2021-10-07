import data from './data.js'

const buildCard = (card) => {

    // declare elements 
    const div = document.createElement('div');
    const info = document.createElement('div')
    const h4 = document.createElement('h4');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const button = document.createElement('button')
    
    // append elements recently created
    const cardd = document.querySelector('.cards');
    cardd.append(div);
    div.append(img);
    div.append(info);
    info.append(h4);
    info.append(button);
    button.append(a);
    
    // set atteributes
    div.setAttribute("class", "card");
    info.setAttribute("class", "info");
    h4.innerHTML = card.name;
    a.innerHTML = "Visit Site"
    img.setAttribute("src", card.pic);
    a.setAttribute("href", card.link);
}

data.forEach(card => buildCard(card))

// const card = document.querySelector('.card');

// const addCard = (data) => {
//     card.innerHTML += `
//     <img src="${data.pic}" class="thumb" alt="">
//     <div class="info">
//         <h1>${data.name}</h1>
//         <button><a href="${data.link}">visit site</a></button>
//       </div>
//     `
// }

// data.forEach(card => addCard(card));