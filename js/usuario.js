function mostrarUsuario() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <h2>Información del Usuario</h2>
      <p>Nombre: GhibliFan</p>
      <p>Películas favoritas: 3</p>
      <p>Última visita: ${new Date().toLocaleDateString()}</p>
    `;
    lucide.createIcons();
  }
  