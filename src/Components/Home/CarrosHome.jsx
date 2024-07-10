import { Car } from 'lucide-react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import carros from '../../data/carros.json';

function removerAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function CarrosHome() {
  return (
    <>
      <h1 className="text-center py-4 font-bold text-blue-gray-800 flex justify-center gap-2  items-center text-2xl md:text-3xl">
        <Car />
        Melhores veículos
      </h1>
      <section className="max-w-[1200px] my-0 mx-auto grid grid-cols-2 items-center justify-center rounded gap-10 min-h-[200px]">
        <div className="ml-4">
          <img src="CarNavigator.svg" alt="hero" />
        </div>
        <div className="scrollmenu flex gap-6 p-8 pl-4 pt-0 cursor-pointer">
          {/* Iterar sobre os veículos */}
          {carros.veiculos.map((veiculo, index) => (
            <Link
              key={index}
              to={`/carros/${encodeURIComponent(
                removerAcentos(veiculo.nome.toLowerCase()),
              )}`}
              className="flex flex-col shadow-lg h-[250px] items-center justify-center hover:scale-110 duration-300 mt-4"
            >
              <div>
                <img
                  src={veiculo.imagem}
                  alt={veiculo.nome}
                  className="w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <h3 className="text-sm mb-1">{veiculo.nome}</h3>
                <span className="text-xs opacity-60 text-black">
                  Para {veiculo.quantidade_pessoas} pessoas, por <br />
                  {veiculo.dias} dias
                </span>
                <span className="text-green-400 font-bold text-3xl">
                  R$ {veiculo.valor}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center">
        <Link to="/carros">
          <Button>Confira Mais</Button>
        </Link>
      </div>
    </>
  );
}
