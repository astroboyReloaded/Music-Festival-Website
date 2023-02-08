import db from '../../db.js';

const artists = db;

document.getElementById('artists').innerHTML = `
<h1 class="sectionTitle">Performers</h1>
${artists.map((artist) => `<article class="artist-card">
<img src="${artist.image}" alt="${artist.alt}" class="artist-img">
<dl class="artist-data">
  <h1><dt>${artist.name}</dt></h1>
  <dd>${artist.description}</dd>
  <p>${artist.intro}</p>
</dl>
</article>`)
}`;