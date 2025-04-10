function mostrarHome(peliculas) {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Películas de Studio Ghibli</h2>
        <div class="c-lista">
            ${peliculas.map(peli => `
                <div class="c-lista-pokemon">
                    <h3>${peli.title}</h3>
                    <img src="${peli.movie_banner}" alt="${peli.title}" style="width: 100%; max-height: 200px; object-fit: cover;">
                    <p><strong>Año:</strong> ${peli.release_date}</p>
                    <p>${peli.description.slice(0, 100)}...</p>
                </div>
            `).join('')}
        </div>
    `;
}
