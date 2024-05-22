import type { NextPage } from 'next'; //nos importamos este el tipado que nos da Next
import type { MouseEventHandler } from 'react'; //nos importamos este tipado que nos da React para el evento onClick
import { useState } from 'react';
import Head from 'next/head';
import { RandomFox } from '../components/RandomFox';

const Home: NextPage = () => {
  //vamos a obtener una foto aleatoria de una api con 123 fotos de zorros
  //generamos una función que nos devuelva un número aleatorio del 1 al 123:
  const random = (): number => {
    return Math.floor(Math.random() * 123) + 1;
  };

  //props que pasaremos al componente RandomFox:

  //prop 1:
  //simularemos como vendrían los datos desde una api en la vida real, en formato array de objetos (con id, url...)
  //como no tenemos id, lo generamos:

  const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  //establecemos nuestro tipado para cada objeto del array que nos devolvería la api

  type ImageType = { id: string; url: string };

  //creamos una variable de estado y añadimos al estado <ImageType []> para asegurarnos
  //que el seteo de la variable solo acepte dentro del array objetos que tengan nuestro tipado
  const [images, setImages] = useState<ImageType[]>([]);

  //prop 2:
  const altImage: string = 'Fox image';

  //función manejadora para añadir una imagen cada vez que hacemos click en un botón:
  //en el archivo tsconfig.json, tenemos la librería "dom" instalada, así que sólo tenemos que hacer hover
  //en el evento onClick donde llamamos a la función manejadora y ver qué tipado tenemos que poner
  //en dicha función, en este caso es MouseEventHandler<HTMLButtonElement>,
  //lo que nos dice que el elemento botón del HTML espera un MouseEventHandler
  //el tipado MouseEventHandler le importamos arriba, nos lo da la propia librería react
  //y a la constante newFoxImage le daremos el tipado que hemos diseñado
  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newFoxImage: ImageType = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newFoxImage]); //seteamos la variable de estado para ir añadiendo imágenes al array
  };

  return (
    <div>
      <Head>
        <title>App React with Typescript</title>
        <meta name="description" content="Generated by Next.js" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Foxes images</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {/* tomamos la variable de estado images (array de objetos) y con cada iteración
        //de map renderizamos el componete RandomFox, al que pasamos props*/}
        {images.map((image) => (
          <RandomFox key={image.id} url={image.url} alt={altImage} />
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
