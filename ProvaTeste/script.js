$(document).ready(function () {
  const url = 'https://fakestoreapi.com/products';

  $.getJSON(url, function (produtos) {
    let total = produtos.length;
    $('#total-produtos').text(total); //quantidade de itens do catálogo

    produtos.forEach(produto => { 
      const card = `
          <div class="card h-100">
            <img src="${produto.image}" class="card-img-top p-2" alt="${produto.title}" style="height: 200px; object-fit: contain;">
              <h5 class="card-title">${produto.title}</h5>
              <p class="card-text fw-bold text-success">$${produto.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      `;
      
      $('#catalogo').append(card);
    });
  }).fail(function () {
    $('#catalogo').html('<p class="text-danger">Erro ao carregar os produtos.</p>');
  });
});