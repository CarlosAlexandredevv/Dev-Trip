import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from './ui/sheet';
import { BaggageClaim, Car, Hotel, Menu, Plane, User } from 'lucide-react';

export function Header() {
  return (
    <>
      {/* Mobile */}
      <header className="bg-primary p-6 md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu
              className="transform transition-transform duration-300 rotate-0 hover:rotate-90"
              color="white"
              size={36}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mt-16">
                <NavLink to="/">
                  <SheetClose asChild>
                    <h1 className="font-extrabold text-5xl italic text-center">
                      DevTrip
                    </h1>
                  </SheetClose>
                </NavLink>
              </SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col gap-8 font-bold text-2xl mt-10">
                  <SheetClose asChild>
                    <NavLink
                      to="passagens"
                      className="flex items-center justify-center text-slate-800 gap-1"
                    >
                      Passagens <Plane />
                    </NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink
                      to="pacotes"
                      className="flex items-center justify-center text-slate-800 gap-1"
                    >
                      Pacotes <BaggageClaim />
                    </NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink
                      to="hoteis"
                      className="flex items-center justify-center text-slate-800 gap-1"
                    >
                      Hotéis <Hotel />
                    </NavLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <NavLink
                      to="carros"
                      className="flex items-center justify-center text-slate-800 gap-1"
                    >
                      Carros <Car />
                    </NavLink>
                  </SheetClose>
                </nav>
                <div className="flex gap-8 items-center justify-center mt-20">
                  <button className="text-slate-800 font-bold border px-2 py-2 rounded-full">
                    Cadastre-se
                  </button>
                  <button className="px-2 py-2 text-slate-800 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300 flex items-center font-bold">
                    Entrar <User />
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      {/* Min 768px */}
      <header className="hidden w-full justify-evenly items-center p-6 bg-primary text-white md:flex">
        <NavLink
          to="/"
          className="font-extrabold text-3xl italic hover:text-red-600 duration-300"
        >
          DevTrip
        </NavLink>
        <nav className="flex gap-8 font-bold">
          <NavLink
            to="passagens"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Passagens <Plane />
          </NavLink>
          <NavLink
            to="pacotes"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Pacotes <BaggageClaim />
          </NavLink>
          <NavLink
            to="hoteis"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Hotéis <Hotel />
          </NavLink>
          <NavLink
            to="carros"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Carros <Car />
          </NavLink>
        </nav>
        <div className="flex gap-8 center">
          <button className=" hover:text-red-600 duration-300">
            Cadastre-se
          </button>
          <button className="flex gap-1 px-6 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300">
            Entrar <User />
          </button>
        </div>
      </header>
    </>
  );
}
