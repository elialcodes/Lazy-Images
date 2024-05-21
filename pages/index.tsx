import type { NextPage } from 'next';
import Head from 'next/head';
import { RandomFox } from '../components/RandomFox';

const Home: NextPage = () => {
  //vamos a obtener una foto aleatoria de una api con 123 fotos de zorros
  //generamos una función que nos devuelva un número aleatorio del 1 al 123:
  const random = (): number => {
    return Math.floor(Math.random() * 123) + 1;
  };

  //constantes que pasaremos por Props:
  const srcImage: string = `https://randomfox.ca/images/${random()}.jpg`;
  const altImage: string = 'Fox image';

  return (
    <div>
      <Head>
        <title>App React with Typescript</title>
        <meta name="description" content="Generated by Next.js" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Foxes images</h1>
        <RandomFox src={srcImage} alt={altImage} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
