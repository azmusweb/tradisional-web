const DATA_URL = "ISI_URL_JSON_SPREADSHEET_KAMU";

fetch(DATA_URL)
  .then(r => r.json())
  .then(data => {

    // tanggal
    document.getElementById("date").innerText =
      new Date().toLocaleDateString("id-ID", {
        weekday:"long", year:"numeric", month:"long", day:"numeric"
      });

    // BREAKING
    document.getElementById("breaking-text").innerText =
      data.slice(0,5).map(d => d.judul).join(" • ");

    // HERO
    const heroMain = document.getElementById("hero-main");
    const heroSide = document.getElementById("hero-side");

    const main = data[0];
    heroMain.innerHTML = `
      <div class="hero-card">
        <img src="${main.gambar}">
        <div class="info">
          <h2><a href="berita.html?slug=${main.slug}" style="color:white">${main.judul}</a></h2>
        </div>
      </div>
    `;

    heroSide.innerHTML = data.slice(1,3).map(d => `
      <div class="hero-card" style="margin-bottom:10px">
        <img src="${d.gambar}">
        <div class="info">
          <a href="berita.html?slug=${d.slug}" style="color:white">${d.judul}</a>
        </div>
      </div>
    `).join("");

    // GRID
    const grid = document.getElementById("news-grid");
    data.slice(3).forEach(d => {
      grid.innerHTML += `
        <div class="card">
          <img src="${d.gambar}">
          <div class="content">
            <span class="label">${d.label}</span>
            <h3><a href="berita.html?slug=${d.slug}">${d.judul}</a></h3>
            <small>${d.tanggal}</small>
          </div>
        </div>
      `;
    });

  });
