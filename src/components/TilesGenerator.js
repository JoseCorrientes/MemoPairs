//Funcion que debe generar en base al tamania de la matriz el arreglo de fichas a visualizar
const tilesGenerator = (size) => {
  let tilesNumber = size * size;
  let tiles = [];

  for (let i = 0; i < tilesNumber / 2; i++) {
    let imageIndex = Math.floor(Math.random() * (10 - 1) + 1);
    tiles[i] = {
      tileIndex: i,
      imageIndex,
      IsSelected: false,
      IsActive: true,
    };
  }

  for (let i = tilesNumber / 2; i < tilesNumber; i++) {
    tiles[i] = {
      tileIndex: i,
      imageIndex: tiles[i - tilesNumber / 2]["imageIndex"],
      IsSelected: false,
      IsActive: true,
    };
  }
  let tempoArray = tiles;
  let n = 0;
  while (n < tilesNumber) {
    let r = Math.floor(Math.random() * tilesNumber);
    let tempoImage = tempoArray[r]["imageIndex"];
    tempoArray[r]["tileIndex"] = r;
    tempoArray[r]["imageIndex"] = tempoArray[n]["imageIndex"];
    tempoArray[n]["tileIndex"] = n;
    tempoArray[n]["imageIndex"] = tempoImage;
    n++;
  }
  return tempoArray;
};

export default tilesGenerator;
