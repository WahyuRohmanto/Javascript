$(document).ready(function () {
  //HEWAN UNGGAS
  for (let i = 0; i < unggas.length; i++) {
    let namaUnggas = unggas[i].nama;
    let gambarUnggas = unggas[i].gambar;
    let suaraUnggas = unggas[i].suara;
    $(".unggas").append(
      ` <div class="card mx-2" style="width: 18rem">
          <img src="${gambarUnggas}" class="card-img-top ${namaUnggas}" alt="..." />
          <div class="card-body">
            <p class="card-text text-center">
             ${namaUnggas}
            </p>
          </div>
        </div> `
    );

    $(`.${namaUnggas}`).click(function () {
      $("<audio></audio>")
        .attr({
          src: `${suaraUnggas}`,
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  }

  // HEWAN BUAS
  for (let i = 0; i < buas.length; i++) {
    let nama = buas[i].nama;
    let gambar = buas[i].gambar;
    let suara = buas[i].suara;

    $(".buas").append(
      ` <div class="card mx-2" style="width: 18rem">
          <img src="${gambar}" class="card-img-top ${nama}"  height="175" alt="..." />
          <div class="card-body">
            <p class="card-text text-center">
             ${nama}
            </p>
          </div>
        </div> `
    );

    $(`.${nama}`).click(function () {
      console.log(nama);
      $("<audio></audio>")
        .attr({
          src: `${suara}`,
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  }

  // HEWAN TERNAK
  for (let i = 0; i < ternak.length; i++) {
    let nama = ternak[i].nama;
    let gambar = ternak[i].gambar;
    let suara = ternak[i].suara;

    $(".ternak").append(
      ` <div class="card mx-2" style="width: 18rem">
          <img src="${gambar}" class="card-img-top ${nama}"  height="175" alt="..." />
          <div class="card-body">
            <p class="card-text text-center">
             ${nama}
            </p>
          </div>
        </div> `
    );

    $(`.${nama}`).click(function () {
      $("<audio></audio>")
        .attr({
          src: `${suara}`,
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  }
});
