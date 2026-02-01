const DATA_URL = "ISI_URL_JSON_SPREADSHEET_KAMU";

fetch(DATA_URL)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    const popular = document.getElementById("popular");

    list.innerHTML = "";
    popular.innerHTML = "";

    data.slice().reverse().forEach((item, i) => {
      // HOME CARD
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.gambar}" alt="${item.judul}">
        <h3>
          <a href="berita.html?slug=${item.slug}">
            ${item.judul}
          </a>
        </h3>
      `;
      list.appendChild(card);

      // SIDEBAR POPULER
      if(i < 5){
        const li = document.createElement("li");
        li.innerHTML = `<a href="berita.html?slug=${item.slug}">${item.judul}</a>`;
        popular.appendChild(li);
      }
    });
  })
  .catch(err => console.error(err));
