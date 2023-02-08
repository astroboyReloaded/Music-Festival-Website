import db from '../../db.js';

const artists = db;

document.getElementById('artists').innerHTML = `
<h1 class="sectionTitle">Performers</h1>
${artists.map((artist) => `<article class="artist-card">
<img src="${artist.image}" alt="${artist.alt}" class="artist-img">
<dl class="artist-data">
  <h1 class="artist-name"><dt>${artist.name}</dt></h1>
  <dd>${artist.description}</dd>
  <p class="artist-intro">${artist.intro}</p>
</dl>
</article>`)
}`;