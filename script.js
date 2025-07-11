/* ---------- 1. Reloj dinámico ---------- */
function actualizarReloj() {
  const ahora = new Date();

  // Convertir a hora de Bolivia (UTC‑4)
  const utc = ahora.getTime() + ahora.getTimezoneOffset() * 60000;
  const bolivia = new Date(utc - 4 * 60 * 60 * 1000);

  const año = bolivia.getFullYear();
  const cumple = new Date(`${año}-07-11T00:00:00-04:00`);
  const finCumple = new Date(`${año}-07-11T23:59:59-04:00`);

  let texto;

  if (bolivia < cumple) {
    const diff = cumple - bolivia;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    texto = `⏳ Falta para tu cumpleaños: ${h}h ${m}m ${s}s`;
  } else if (bolivia <= finCumple) {
    const diff = bolivia - cumple;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    texto = `🎂 Ya es tu día mi amor 💖 Tiempo transcurrido: ${h}h ${m}m ${s}s`;
  } else {
    texto = "🎉 ¡Tu cumpleaños ya pasó, pero te sigo amando todos los días! 💕";
  }

  document.getElementById("contador").innerText = texto;
}
setInterval(actualizarReloj, 1000);   // actualiza cada segundo
actualizarReloj();                    // llamada inicial

/* ---------- 2. Mostrar galería ---------- */
function mostrarGaleria() {
  const audio = document.getElementById("audioAmor");

  // Intentar reproducir (algunos navegadores requieren interacción previa)
  audio.play().catch(err => console.log("Autoplay bloqueado:", err));

  document.getElementById("paginaInicio").style.display = "none";
  document.getElementById("paginaGaleria").style.display = "block";
}

/* ---------- 3. Volver al inicio ---------- */
function volverInicio() {
  document.getElementById("paginaGaleria").style.display = "none";
  document.getElementById("paginaInicio").style.display = "block";
}
