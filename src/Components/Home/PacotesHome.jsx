import { Button } from '../Button';
import { BaggageClaim } from 'lucide-react';
import { Link } from 'react-router-dom';
import promocoesData from '../../data/pacotes.json';

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export function PacotesHome() {
  const promocoes = promocoesData;

  return (
    <>
      <h1 className="text-center py-4 font-bold text-blue-gray-800 flex justify-center gap-2  items-center flex-nowrap text-2xl md:text-3xl">
        <BaggageClaim />
        Pacotes em promoção
      </h1>
      <section className="max-w-[900px] my-0 mx-auto grid items-center justify-center rounded gap-5 md:grid-cols-2">
        {promocoes.map((promocao, index) => (
          <Link
            key={index}
            to={`/pacotes/${encodeURIComponent(
              removeAccents(promocao.nome_do_local.toLowerCase()),
            )}`}
            className="flex w-full gap-5 p-4 shadow-lg max-w-[400px] hover:scale-110 duration-300 cursor-pointer"
          >
            <div>
              <img
                src={promocao.imagem_do_local}
                alt={promocao.nome_do_local}
                className="w-32 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-around">
              <h2>{promocao.nome_do_local}</h2>
              <p className="text-sm opacity-60 text-black">
                {promocao.quantidade_de_dias_do_pacote}
              </p>
              <div className="flex gap-2 items-center">
                <span className="line-through text-red-800">
                  {promocao.valor_antigo}
                </span>
                <span className="text-green-400 font-bold text-xl">
                  {promocao.valor_novo}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <div className="w-full flex justify-center">
        <Link to="/pacotes">
          <Button>Confira Mais</Button>
        </Link>
      </div>
    </>
  );
}
