async function mostrarAleatorios() {
    const peliculas = await conexionHome();
    const random = peliculas.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const app = document.getElementById("app");
    app.innerHTML = `
      <h2>Películas Aleatorias</h2>
      <div class="c-lista">
        ${random.map(peli => `
          <div class="c-lista-pokemon">
            <h3>${peli.title}</h3>
            <p><strong>Año:</strong> ${peli.release_date}</p>
          </div>
        `).join('')}
      </div>
    `;
    lucide.createIcons();

  }
  