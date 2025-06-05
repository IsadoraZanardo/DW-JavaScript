const limit = 168;

$(document).ready(function () {
  for (let id = 1; id<=limit; id++) {

    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (data) {
        
      const row = `
        <tr>
          <td>${data.id}</td>
          <td class="specie">${data.name}</td>
          <td><img src="${data.sprites.front_default}" alt="${data.name}" width="50"></td>
          <td>${data.height/10}</td>
          <td>${data.weight/10}</td>
          <td class="specie">${data.species.name}</td>
        </tr>`;

      $("#pokemons").append(row);
      loaded++;
      
    })

  }
});