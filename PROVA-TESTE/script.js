$(document).ready(function () {
  const url = 'data.json';

  $.getJSON(url, function (produtos) {
    let total = produtos.length;
    $('#total-produtos').text(total); //quantidade de itens do catálogo

    produtos.forEach(produto => { 
      const card = `
        <div class="col-md-3 col-lg-4 mb-3">
          <div class="card">

            <img src="${produto.image}" class="card-img-top p-2" style="height: 100px; object-fit: contain;">
              <p class="card-text">${produto.title}</p>
              <p class="card-text fw-bold text-success">$${produto.price}</p>
              
            </div>
          </div>
        </div>
      `;

// class="card-img-top p-2" --> p-2 é o tamanho da imagem
// style="height: 100px --> 100px é o tamanho da imagem dentro do container
// object-fit: contain --> é para ajustar a largura da imagem

      $('#catalogo').append(card);
    });
  }).fail(function () {
    $('#catalogo').html('<p class="text-danger">Erro ao carregar os produtos.</p>');
  });
});