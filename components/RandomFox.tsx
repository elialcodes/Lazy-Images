//las props que recibe un componene siempre son un objeto
//diseñamos nuesto propio tipado "Props" para tipar las props que recibe el componente
type Props = { image: string; alt: string };

//pasamos las props con destructuring y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx:
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  return <img width={320} height="auto" src={image} alt={alt} />;
};
