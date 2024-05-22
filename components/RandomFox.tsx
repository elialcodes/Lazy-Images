import { useRef, useEffect, useState } from 'react';
//importamos los hooks de la librería de React
//useRef nos servirá para tomar el elemento HTML imagen y saber su posición dentro del viewport

//las props que recibe un componene siempre son un objeto
//diseñamos nuestro propio tipado "Props" para tipar las props que recibe el componente
type Props = { key: string; url: string; alt: string };

//pasamos las props con destructuring y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx
//con useRef tomamos el elemento del DOM que queremos y lo inicializamos a null, porque
//no hay imagen hasta que se cargue el componente
//creamos una variable de estado para la url de la imagen y su valor será una imagen transparente

export const RandomFox = ({ key, url, alt }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  useEffect(() => {
    //creamos un observador, que será window
    //.IntersectionObserve es un método de window y tendrá unas entradas (las imágenes) y
    //con forEach para cada una veremos si isIntersecting es true, si la imagen entra en la pantalla
    //para setear la variable de estado src con la prop url
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(url);
        }
      });
    });
    //si existe un nodo, le decimos al observador con el método .observe, que observe el nodo
    if (node.current) {
      observer.observe(node.current);
    }
    //le decimos al observador que se desconecte para evitar observación continua una vez
    //que la imagen se ha cargado.
    return () => {
      observer.disconnect();
    };
  }, [url]); //como dependencia de useEffect ponemos la url para que se ejecute sólo al cambiar esta prop

  return (
    //cada foto será un div con un id único y un padding de 4
    <div key={key} className="p-4">
      <img ref={node} width={320} height="auto" src={src} alt={alt} className="bg-gray-300" />
    </div>
  );
};
