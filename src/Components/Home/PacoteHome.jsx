import { BaggageClaim } from 'lucide-react';
import { Link } from 'react-router-dom';
import promocoesData from '../../api/promocoes.json';

export function Promocoes() {
  const promocoes = promocoesData;

  return (
    <>
      <h1 className="text-center pt-4 pb-4 font-bold to-blue-gray-800 flex justify-center gap-1">
        Pacotes para sua viagem
        <BaggageClaim />
      </h1>
      <section className="max-w-[900px] my-0 mx-auto grid items-center justify-center rounded gap-5 md:grid-cols-2">
        {promocoes.map((promocao, index) => (
          <Link
            key={index}
            to={`/pacotes/${encodeURIComponent(
              promocao.nome_do_local.toLowerCase(),
            )}`}
            className="flex w-full gap-5 p-4 shadow-lg max-w-[400px] hover:scale-110 duration-300 cursor-pointer"
          >
            <div>
              <img
                src={promocao.imagem_do_local}
                alt=""
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
          <button className="bg-primary px-4 py-2 text-white rounded font-bold mt-5 hover:bg-red-600 duration-300 md:mr-10">
            Confira mais
          </button>
        </Link>
      </div>
    </>
  );
}
