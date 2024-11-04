// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "<span class='spoken'>Santiago</span>\n <p> Felicidades Jorge ¡Que tu matrimonio sea como un buen vino, que mejore con el tiempo!</p>", time: 5 },
  { text: "<span class='spoken'>Dulce</span>\n <p> Si pensabas que resolver incidentes en ServiceNow era complicado, espera a los nuevos ‘tickets’ de casado. ¡Felicidades, que está nueva etapa en tu vida sea increíble!.</p>", time: 15 },
  { text: "<span class='spoken'>Erika</span>\n <p>¡Jorge muchas Felicidades por tu boda! Que este nuevo capítulo este lleno de  un montón de aventuras, risas y momentos inolvidables juntos. Que el amor y la alegría siempre estén presentes en sus vidas. Un abrazo, Erika</p>", time: 25 },
  { text: "<span class='spoken'>Carmen</span>\n <p>¡Felicidades Jorge! En mi época se decía que las 2 decisiones mas importantes en la vida eran la profesión y la persona elegida para acompañarte en tu vida. Deseo que sean un pilar el uno al otro y que sepan cuidarse mutuamente ya que en el matrimonio como en la vida hay de todo tipo de experiencias.</p>", time: 35 },
  { text: "<span class='spoken'>Jose Luis</span>\n <p>Recuerda: el matrimonio es una relación en la que una persona siempre tiene la razón… y la otra persona eres tú.</p>", time: 45 },
  { text: "<span class='spoken'>Luis</span>\n <p>Que su amor brille como un algoritmo perfecto, donde cada día juntos sea una nueva línea de código en la hermosa historia que están construyendo, uniendo sus corazones en un universo lleno de posibilidades infinitas.</p>", time: 55 },
  { text: `<span class='spoken'>Cris</span>\n <p>¡Muchísimas felicidades Jorge! Que esta nueva etapa en tu vida sea como una gran canción de rock: que resuene, trascienda y que su amor siempre sea tan sólido como el "metal". ¡Disfruten juntos de esta emocionante aventura!</p>`, time: 65 },
  { text: "<span class='spoken'>Sebastián</span>\n <p>!Felicidades, Jorge, por encontrar a tu pareja perfecta para codificar la vida juntos! Éxitos en esta aventura emocionante que te hará reír, llorar y cuestionar quién es el dueño del mando de la tv, les deseo una vida llena de amor, risas y momentos inolvidables. ¡Que su unión sea tan larga como un desarrollo en Cobol, tan eficiente como un algoritmo optimizado y tan duradera como un código bien documentado. ¡Feliz coding... de la vida!</p>", time: 75 },
  { text: "<span class='spoken'>Jonnathan</span>\n <p>¡Felicidades, Jorge! Te deseo una vida llena de amor, alegría y momentos inolvidables junto a tu pareja. Que esta nueva etapa esté llena de bendiciones y felicidad. ¡Un gran abrazo!</p>", time: 85 },
  { text: "<span class='spoken'>Andrés García</span>\n <p>¡Felicidades, Jorge! Que este nuevo capítulo de tu vida esté lleno de amor, risas y momentos inolvidables. ¡Disfruta cada instante de esta emocionante aventura!</p>", time: 95 },

 ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 10
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = .5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1.5, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 10000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);