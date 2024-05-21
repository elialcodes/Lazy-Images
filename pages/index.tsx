import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { RandomFox } from '../components/RandomFox';

const Home: NextPage = () => {
  //vamos a obtener una foto aleatoria de una api con 123 fotos de zorros
  //generamos una función que nos devuelva un número aleatorio del 1 al 123:
  const random = (): number => {
    return Math.floor(Math.random() * 123) + 1;
  };

  //constantes que pasaremos al componente RandomFox por Props:

  //prop 1: creamos una variable de estado que tendrá un array de strings con 4 imagenes aleatorias
  //añadimos al estado <string []> para asegurarnos que el seteo de la variable solo acepte array de strings
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  //prop 2:
  const altImage: string = 'Fox image';

  return (
    <div>
      <Head>
        <title>App React with Typescript</title>
        <meta name="description" content="Generated by Next.js" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Foxes images</h1>
        {/* renderizamos con un map el componete RandomFox y sus props, le daremos un padding de 4 (p-4) */}
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image} alt={altImage} />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
