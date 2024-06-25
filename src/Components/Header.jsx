import React, { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const openSheet = () => {
    setIsOpen(true);
    setIsRotated(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
    setIsRotated(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.closest('.sheet') === null) {
        closeSheet();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const menuRotation = isRotated ? 'rotate-90' : 'rotate-0';

  function clickNavLink() {
    <Sheet /> === null;
  }
  return (
    <>
      {/* // Mobile */}
      <header className="bg-primary p-6 md:hidden">
        <Sheet onClose={closeSheet}>
          <SheetTrigger onClick={openSheet}>
            <Menu
              className={`transform transition-transform duration-300 ${menuRotation}`}
              color="white"
              size={36}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mt-16">
                <NavLink to="/">
                  <SheetClose asChild>
                    <h1
                      to="/"
                      className="font-extrabold text-5xl italic text-center"
                    >
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
                  <button className="text-slate-800 font-bold border px-1 py-3 rounded-full">
                    Cadastre-se
                  </button>
                  <button className="px-2 py-3 text-slate-800 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300 flex items-center font-bold">
                    Entrar <User />
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      {/* Min 768px */}
      <header className=" hidden w-full justify-evenly items-center p-6 bg-[#10004F] text-white md:flex">
        <NavLink to="/" className="font-extrabold text-3xl italic">
          DevTrip
        </NavLink>
        <nav className="flex gap-8 font-bold">
          <NavLink to="passagens" className="flex gap-1">
            Passagens <Plane />
          </NavLink>
          <NavLink to="pacotes" className="flex gap-1">
            Pacotes <BaggageClaim />
          </NavLink>
          <NavLink to="hoteis" className="flex gap-1">
            Hotéis <Hotel />
          </NavLink>
          <NavLink to="carros" className="flex gap-1">
            Carros <Car />
          </NavLink>
        </nav>
        <div className="flex gap-8 center">
          <button>Sign In</button>
          <button className=" flex gap-1 px-6 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300">
            Sign UP <User />
          </button>
        </div>
      </header>
    </>
  );
}
