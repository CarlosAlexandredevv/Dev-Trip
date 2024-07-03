import { Hotel } from 'lucide-react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import hoteis from '../../api/hoteis.json';

export function HoteisHome() {
  const removerAcentos = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  return (
    <>
      <h1 className="text-center py-4 font-bold text-blue-gray-800 flex justify-center gap-1 text-2xl items-center">
        <Hotel />
        Hospedagem para você
      </h1>
      <section className="max-w-[900px] my-0 mx-auto grid grid-cols-2 items-center justify-center rounded gap-10 min-h-[200px]">
        <div className="scrollmenu flex gap-6 p-8 pl-4 pt-0 cursor-pointer">
          {/* Iterar sobre as promoções */}
          {hoteis.map((hotel, index) => (
            <Link
              key={index}
              to={`/hoteis/${encodeURIComponent(
                removerAcentos(hotel.local.toLowerCase()),
              )}`}
              className="flex flex-col shadow-lg h-[250px] items-center justify-center hover:scale-110 duration-300 mt-4"
            >
              <div>
                <img
                  src={hotel.imagem}
                  alt={hotel.local}
                  className="w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <h3>{hotel.local}</h3>
                <span className="text-xs flex-wrap opacity-60 text-black">
                  Diárias <br />
                  partir de
                </span>
                <span className="text-green-400 font-bold text-3xl">
                  R$ {hotel.valor_diaria}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mr-4">
          <img src="BestPlace.svg" alt="hero" />
        </div>
      </section>
      <div className="w-full flex justify-center">
        <Link to="/hoteis">
          <Button>Confira Mais</Button>
        </Link>
      </div>
    </>
  );
}
