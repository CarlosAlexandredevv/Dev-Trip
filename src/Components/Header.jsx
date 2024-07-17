import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Drawer,
} from '@material-tailwind/react';
import { BaggageClaim, Car, Hotel, Menu, Plane, User } from 'lucide-react';
import { Button } from './Form/ButtonForm';

export function Header() {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  //Ja tem conta
  const handleOpenLogin = () => setOpenLogin((cur) => !cur);
  function handleAlreadyAccount() {
    setOpenLogin(true);
    setOpenSignIn(false);
  }

  // Nao tem conta
  const handleOpenSignIn = () => setOpenSignIn((cur) => !cur);
  function handleDontHaveAccount() {
    setOpenLogin(false);
    setOpenSignIn(true);
  }

  //Nav mobile
  const [open, setOpen] = React.useState(false);
  const closeDrawer = () => setOpen(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <header className="bg-primary p-6 md:hidden">
        <button onClick={openDrawerRight}>
          <Menu
            className="transform transition-transform duration-300 rotate-0 hover:rotate-90"
            color="white"
            size={36}
          />
        </button>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <button variant="text" color="blue-gray" onClick={closeDrawerRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <NavLink to="/" className="mt-16" onClick={closeDrawer}>
              <h1 className="font-extrabold text-5xl italic text-center">
                DevTrip
              </h1>
            </NavLink>
            <nav className="flex flex-col gap-8 font-bold text-2xl mt-10">
              <NavLink
                to="/passagens"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawer}
              >
                Passagens <Plane />
              </NavLink>

              <NavLink
                to="/pacotes"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawer}
              >
                Pacotes <BaggageClaim />
              </NavLink>

              <NavLink
                to="/hoteis"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawer}
              >
                Hotéis <Hotel />
              </NavLink>
              <NavLink
                to="/carros"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawer}
              >
                Carros <Car />
              </NavLink>
            </nav>
            <div className="flex gap-8 items-center justify-center mt-20">
              <button
                onClick={handleOpenSignIn}
                className="font-bold border px-2 py-2 rounded-full"
              >
                Cadastre-se
              </button>
              <button
                onClick={handleOpenLogin}
                className="px-2 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300 flex items-center font-bold"
              >
                Entrar <User />
              </button>
            </div>
          </div>
        </Drawer>
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
            to="/passagens"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Passagens <Plane />
          </NavLink>
          <NavLink
            to="/pacotes"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Pacotes <BaggageClaim />
          </NavLink>
          <NavLink
            to="/hoteis"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Hotéis <Hotel />
          </NavLink>
          <NavLink
            to="/carros"
            className="flex gap-1 hover:text-red-600 duration-300"
          >
            Carros <Car />
          </NavLink>
        </nav>
        <div className="flex gap-8 items-center">
          <button
            onClick={handleOpenSignIn}
            className="hover:text-red-600 duration-300"
          >
            Cadastre-se
          </button>
          <button
            className="flex gap-1 px-6 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300"
            onClick={handleOpenLogin}
          >
            Entrar <User />
          </button>
        </div>
      </header>

      <Dialog
        size="xs"
        open={openSignIn}
        handler={handleOpenSignIn}
        className="bg-transparent h-screen md:h-auto  shadow-none snap-y"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-2.5">
            <Typography variant="h4" color="blue-gray">
              Cadastro
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Insira seus dados para criar uma conta.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nome
            </Typography>
            <Input label="Nome" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Senha
            </Typography>
            <Input label="Senha" size="lg" type="password" />
            <Typography className="-mb-2" variant="h6">
              Confirmar Senha
            </Typography>
            <Input label="Senha" size="lg" type="password" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Lembrar-me" />
            </div>
          </CardBody>
          <div className="px-6 -mt-5 pb-2">
            <Button onClick={handleOpenSignIn}>Cadastre-se</Button>
            <Typography variant="small" className="flex justify-center mt-3">
              Já tem uma conta?
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleAlreadyAccount}
              >
                Entrar
              </Typography>
            </Typography>
          </div>
        </Card>
      </Dialog>

      <Dialog
        size="xs"
        open={openLogin}
        handler={handleOpenLogin}
        className="bg-transparent h-screen shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Entrar
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Digite seu e-mail e senha para entrar.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Seu Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Sua Senha
            </Typography>
            <Input label="Senha" size="lg" type="password" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Lembrar-me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpenLogin} fullWidth>
              Entrar
            </Button>
            <Typography variant="small" className="flex justify-center mt-3">
              Não tem uma conta?
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleDontHaveAccount}
              >
                Cadastre-se
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
