import { Intro } from './Intro';
import { PacotesHome } from './PacotesHome';
import { PassagensHome } from './PassagensHome';
import { HoteisHome } from './HoteisHome';
import { CarrosHome } from './CarrosHome';
import { InfoHome } from './InfoHome';

export function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Intro />
        <PacotesHome />
        <PassagensHome />
        <HoteisHome />
        <CarrosHome />
        <InfoHome />
      </div>
    </>
  );
}
