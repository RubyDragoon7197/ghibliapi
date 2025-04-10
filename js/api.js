async function conexionHome() {
    const res = await fetch('https://ghibliapi.vercel.app/films');
    const data = await res.json();
    return data;
}

async function General() {
    const peliculas = await conexionHome();
    mostrarHome(peliculas);
}
