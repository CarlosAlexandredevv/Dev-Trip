import { Intro } from './Intro';
import { PacotesHome } from './PacotesHome';
import { PassagensHome } from './PassagensHome';
import { HoteisHome } from './HoteisHome';
import { CarrosHome } from './CarrosHome';
import { Novidades } from '../Novidades';

export function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Intro />
        <PacotesHome />
        <PassagensHome />
        <HoteisHome />
        <CarrosHome />
        <div className="max-w-[1200px] my-0 mx-auto grid grid-cols-2 items-center justify-center rounded gap-10 min-h-[200px]">
          <Novidades />
        </div>
      </div>
    </>
  );
}
