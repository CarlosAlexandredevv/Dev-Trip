import { Intro } from './Intro';
import { Promocoes } from './Promocoes';
export function Home() {
  return (
    <>
      <Intro />
      <h1 className="text-center pt-4 font-bold to-blue-gray-800">
        Promoções para sua viagem
      </h1>
      <Promocoes />
    </>
  );
}
