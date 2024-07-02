import React from 'react';
import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import promocoesData from '../../api/passagens.json';
import { Button } from '../Button';

export function PassagensHome() {
  const promocoes = promocoesData;

  // Função para remover acentos e caracteres especiais
  const removerAcentos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  return (
    <>
      <h1 className="text-center py-4 font-bold text-blue-gray-800 flex justify-center gap-1 text-2xl items-center">
        Passagens aéreas
        <Plane />
      </h1>
      <section className="max-w-[900px] my-0 mx-auto grid grid-cols-2 items-center justify-center rounded gap-10 min-h-[200px]">
        <img src="TravelBooking.svg" alt="hero" />

        <div className="scrollmenu flex gap-6 p-8 pl-4 pt-0 cursor-pointer">
          {/* Iterar sobre as promoções */}
          {promocoes.promocoes.map((promocao, index) => (
            <Link
              key={index}
              to={`/passagens/${encodeURIComponent(
                removerAcentos(promocao.local.toLowerCase()),
              )}`}
              className="flex flex-col shadow-lg h-[250px] items-center justify-center hover:scale-110 duration-300 mt-4"
            >
              <div>
                <img
                  src={promocao.imagem}
                  alt={promocao.local}
                  className="w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <h3 className="text-lg">{promocao.local}</h3>
                <span className="text-xs flex-wrap opacity-60 text-black">
                  Passagens a <br />
                  partir de
                </span>
                <span className="text-green-400 font-bold text-3xl">
                  R$ {promocao.valor_passagem}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center">
        <Link to="/passagens">
          <Button>Confira Mais</Button>
        </Link>
      </div>
    </>
  );
}
