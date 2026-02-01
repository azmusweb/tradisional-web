const DATA_URL =
"https://docs.google.com/spreadsheets/d/1iQOTyUy_92uhiLzwICcMrmHojDYkyRfzkSTS6c80-j4/gviz/tq?tqx=out:json&sheet=Live%20Website";

fetch(DATA_URL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    // HEADLINE
    const h = rows[0].c;
    document.getElementById("headline").innerHTML = `
      <img src="${h[2].v}">
      <h1>${h[0].v}</h1>
      <p>${h[5].v}</p>
    `;

    // LIST BERITA
    let list = "";
    rows.slice(1).forEach(r => {
      const c = r.c;
      list += `
        <div class="news-item">
          <img src="${c[2].v}">
          <div>
            <small>${c[1].v}</small>
            <h3>${c[0].v}</h3>
          </div>
        </div>
      `;
    });
    document.getElementById("news").innerHTML = list;

    // POPULER
    document.getElementById("popular").innerHTML = list;
  })
  .catch(err => {
    document.body.innerHTML = "ERROR LOAD DATA";
    console.error(err);
  });
