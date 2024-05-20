//componente que nos devuelve una foto aleatoria de una api con 123 fotos de zorros

//generamos una función que nos devuelva un número aleatorio del 1 al 123:
const random = (): number => {
  return Math.floor(Math.random() * 123) + 1;
};

//tipamos explícitamente que el retorno de la función será un elemento jsx:
export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;
  return <img width={320} height="auto" src={image} alt="fox image" />;
};
