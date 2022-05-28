let musicas = [
  {titulo: 'Believe', artista: 'NEFFEX', src:'music/Believe (Instrumental) - NEFFEX.mp3', img:'images/rock.png'},
  {titulo: 'Go Down Swinging', artista: 'NEFFEX', src:'music/Go Down Swinging (Instrumental) - NEFFEX.mp3', img:'images/rockshow.png'},
  {titulo: 'Go!', artista: 'NEFFEX', src:'music/Go! - NEFFEX.mp3', img:'images/rock-2.png'},
  {titulo: 'Statement', artista: 'NEFFEX', src:'music/Statement - NEFFEX.mp3', img:'images/rockband.png'},
  {titulo: 'Winning', artista: 'NEFFEX', src:'music/Winning - NEFFEX.mp3', img:'images/buttf.png'}

];


let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');


let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);


document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pararMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if(indexMusica < 0){
    indexMusica = 4;
  }
  renderizarMusica(indexMusica);
});
document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if(indexMusica > 4){
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

function renderizarMusica(index) {
  musica.setAttribute('src', musicas[index].src);
  musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  });
}


function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = 'block';
  document.querySelector(".botao-play").style.display = 'none';
}


function pararMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = 'none';
  document.querySelector(".botao-play").style.display = 'block';
}


function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10){
    campoSegundos = '0' + campoSegundos
  }

  return campoMinutos + ':' + campoSegundos;
}


