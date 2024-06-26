//VAMOS A CREAR UN COMPONENTE GENÉRICO, LLAMADO "LAZYIMAGES" QUE PUEDA SER REUTILIZADO

//importamos los hooks de la librería de React
//useRef nos servirá para tomar el elemento HTML imagen y saber su posición dentro del viewport
import { useRef, useEffect, useState } from 'react';

//react ya tiene importada la librería del DOM, donde cada elemento del DOM tiene
//intrínsecamente unos atributos nativos (unas Props nativas) para trabajar con ellos
//nos importamos este tipado que nos da React para traernos los tipos nativos del elemento img
//(al hacer hover sobre img obtenemos ImgHTMLAttributes)
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
//y en ...ImgProps pasamos las props nativas de img con un spreed operator a modo objeto
//y le decimos que tendrán el tipado definido en Props
//tipamos explícitamente que el retorno de la función será un elemento jsx
//con useRef tomamos el elemento del DOM que queremos (sabemos cual es al hacer hover sobre éñ)
//y lo inicializamos a null, porque no hay imagen hasta que se cargue el componente
//creamos una variable de estado para la src actual de la imagen y su valor será una imagen transparente

export const LazyImages = ({ key, src, alt, ...ImgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base32,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
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
    //cada foto será un div con un id único
    <div key={key} className="container-image">
      <img
        //aquí pasamos las props relacionadas con el useRef:
        ref={node}
        //aquí pasamos las props relacionadas con el componente padre:
        src={currentSrc}
        alt={alt}
        //aquí pasamos todas las props nativas del elemento img por si nos hicieran falta más adelante:
        {...ImgProps}
      />
    </div>
  );
};
