//VAMOS A CREAR UN COMPONENTE GENÉRICO, LLAMADO "LAZYIMAGES" QUE PUEDA SER REUTILIZADO

//importamos los hooks de la librería de React
//useRef nos servirá para tomar el elemento HTML imagen y saber su posición dentro del viewport
import { useRef, useEffect, useState } from 'react';

//react ya tiene importada la librería del DOM, donde cada elemento del DOM tiene
//intrínsecamente unos atributos nativos (unas Props nativas) para trabajar con ellos
//nos importamos este tipado que nos da React para traernos los tipos nativos del elemento img
import type { ImgHTMLAttributes } from 'react';

//las props que recibe un componene siempre son un objeto
//diseñamos el tipado de las props no nativas, procedentes del componente padre
type LazyImageProps = { key: string; src: string; alt: string };

//diseñamos el tipado para tipar los atributos o props nativas que tendría el elemento img
//lo obtenemos de hacer hover en el elemento img, más abajo
type ImageNativeType = ImgHTMLAttributes<HTMLImageElement>;

//diseñamos el tipado que fusiona los 2 anteriores
type Props = LazyImageProps & ImageNativeType;

//pasamos las props del componente padre con destructuring
//y en ...ImgProps pasamos las props nativas de img con un spreed operatos a modo objeto
//y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx
//con useRef tomamos el elemento del DOM que queremos y lo inicializamos a null, porque
//no hay imagen hasta que se cargue el componente
//creamos una variable de estado para la src actual de la imagen y su valor será una imagen transparente

export const LazyImages = ({ key, src, alt, ...ImgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  useEffect(() => {
    //creamos un observador, que será window
    //.IntersectionObserve es un método de window y tendrá unas entradas (las imágenes) y
    //con forEach para cada una veremos si isIntersecting es true, si la imagen entra en la pantalla,
    //para setear la variable de estado currentSrc con la prop src
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
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
  }, [src]); //como dependencia de useEffect ponemos src para que se ejecute sólo si cambia esta prop

  return (
    //cada foto será un div con un id único y un padding de 4
    <div key={key} className="p-4">
      <img
        ref={node}
        src={currentSrc}
        alt={alt}
        {...ImgProps} //aquí pasamos todas las props nativas del elemento img por si nos hicieran falta
        //pasamos props nativas de img, typescript no devuelve error porque ya están importados sus tipados:
        width={320}
        height="auto"
        className="bg-gray-300"
      />
    </div>
  );
};
