import { useRef } from 'react'; //importamos useRef de la librería de React, nos servirá
//para saber la posición de la imagen dentro del viewport

//las props que recibe un componene siempre son un objeto
//diseñamos nuestro propio tipado "Props" para tipar las props que recibe el componente
type Props = { key: string; url: string; alt: string };

//pasamos las props con destructuring y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx:
//con useRef tomamos el elemento del DOM que queremos y lo inicializamos a null, porque
//no hay imagen hasta que se cargue el componente
export const RandomFox = ({ key, url, alt }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  return (
    //cada foto será un div con un id único y un padding de 4
    <div key={key} className="p-4">
      <img ref={node} width={320} height="auto" src={url} alt={alt} />
    </div>
  );
};
