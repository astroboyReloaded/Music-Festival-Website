import db from '../db.js';

const artists = db;

document.getElementById('artists').innerHTML = `
<h1 class="sectionTitle">Performers</h1>
${artists.map((artist, i) => `<article class="artist-card ${i > 1 && 'hide'}">
<img src="${artist.image}" alt="${artist.alt}" class="artist-img">
<dl class="artist-data">
  <h1 class="artist-name"><dt>${artist.name}</dt></h1>
  <dd>${artist.description}</dd>
  <p class="artist-intro">${artist.intro}</p>
</dl>
</article>`).join('')}
<label class="see-label"><input id="seeBtn" type="checkbox"><p id="see-label-text">MORE</p></label>`;

const seeBtn = document.getElementById('seeBtn');
const cards = Array.from(document.getElementsByClassName('artist-card'));
const label = document.getElementById('see-label-text');

seeBtn.addEventListener('click', () => {
  if (seeBtn.checked) {
    cards.map((card) => card.classList.remove('hide'));
    label.innerText = 'LESS';
  } else {
    cards.map((card, i) => i > 1 && card.classList.add('hide'));
    label.innerText = 'MORE';
  }
});
