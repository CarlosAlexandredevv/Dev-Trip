import { Intro } from './Intro';
import { PacotesHome } from './PacotesHome';
import { PassagensHome } from './PassagensHome';
import { HoteisHome } from './HoteisHome';
export function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Intro />
        <PacotesHome />
        <PassagensHome />
        <HoteisHome />
      </div>
    </>
  );
}
