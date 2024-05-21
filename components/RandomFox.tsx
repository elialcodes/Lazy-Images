//las props que recibe un componene siempre son un objeto
//diseñamos nuesto propio tipado "Props" para tipar las props que recibe el componente
type Props = { key: string; url: string; alt: string };

//pasamos las props con destructuring y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx:
export const RandomFox = ({ key, url, alt }: Props): JSX.Element => {
  return (
    //cada foto será un div con un id único y un padding de 4
    <div key={key} className="p-4">
      <img width={320} height="auto" src={url} alt={alt} />
    </div>
  );
};
