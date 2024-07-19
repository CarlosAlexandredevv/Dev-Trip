import React, { useState, useEffect } from 'react';
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
import {
  BaggageClaim,
  Car,
  Hotel,
  Menu,
  Plane,
  User,
  Eye,
  EyeOff,
  LogOut,
} from 'lucide-react';
import { Button } from './Form/ButtonForm';
import { Toaster, toast } from 'sonner';
import { Error } from './Helper/Error';

export function Header() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [loggedOut, setLoggedOut] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const rememberMeState = localStorage.getItem('rememberMe') === 'true';

    if (userDataString && isLoggedIn && rememberMeState) {
      const userData = JSON.parse(userDataString);
      setUserName(userData.userName);
      setLoggedIn(true);
      setLoggedOut(false);
    }
  }, []);

  useEffect(() => {
    if (name) setNameError('');
    if (email) setEmailError('');
    if (password) setPasswordError('');
  }, [name, email, password]);

  useEffect(() => {
    if (loginEmail || loginPassword) setLoginError('');
  }, [loginEmail, loginPassword]);

  const validateSignUp = () => {
    let hasError = false;
    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is already registered
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
    const userExists = users.find((user) => user.userEmail === email);

    if (userExists) {
      setEmailError('Email já cadastrado.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!name) {
      setNameError('Nome é obrigatório.');
      hasError = true;
    }

    if (!email) {
      setEmailError('Email é obrigatório.');
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError('Email inválido.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Senha é obrigatória.');
      hasError = true;
    } else if (!strongPasswordRegex.test(password)) {
      setPasswordError(
        'Senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um caractere especial.',
      );
      hasError = true;
    }

    return hasError;
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);

    const hasError = validateSignUp();

    if (hasError) {
      setLoading(false);
      return;
    }

    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

    const userData = {
      userName: name,
      userEmail: email,
      userPassword: password,
    };

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('userData', JSON.stringify(userData));
    setUserName(userData.userName);
    setLoggedIn(true);
    setLoggedOut(false);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('rememberMe', rememberMe);
    setOpenSignIn(false);
    setLoading(false);

    toast.success('Cadastro realizado com sucesso!', {
      duration: 2000,
    });
  };

  const validateLogin = () => {
    let hasError = false;

    if (!loginEmail) {
      setLoginError('Email é obrigatório.');
      hasError = true;
    }

    if (!loginPassword) {
      setLoginError('Senha é obrigatória.');
      hasError = true;
    }

    return hasError;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    if (validateLogin()) {
      setLoading(false);
      return;
    }

    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

    const user = users.find(
      (user) =>
        user.userEmail === loginEmail && user.userPassword === loginPassword,
    );

    if (user) {
      setLoggedIn(true);
      setLoggedOut(false);
      setOpenLogin(false);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('rememberMe', rememberMe);
      setUserName(user.userName);
      localStorage.setItem('userData', JSON.stringify(user));
      toast.success('Login realizado com sucesso');
    } else {
      setLoginError('Email ou senha incorretos.');
    }

    setLoading(false);
  };

  const handleLogout = () => {
    setName('');
    setEmail('');
    setPassword('');
    setLoginEmail('');
    setLoginPassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    setLoggedOut(true);
    setLoggedIn(false);
    setUserName('');

    localStorage.removeItem('loggedIn');
    localStorage.removeItem('rememberMe');

    setLoading(false);

    toast.success('Logout realizado com sucesso', {
      duration: 2000,
    });
  };

  const handleAlreadyAccount = () => {
    setOpenLogin(true);
    setOpenSignIn(false);
  };

  const handleOpenSignIn = () => setOpenSignIn(!openSignIn);
  const handleOpenLogin = () => setOpenLogin(!openLogin);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleDontHaveAccount = () => {
    setOpenLogin(false);
    setOpenSignIn(true);
  };

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <header className="bg-primary p-6 md:hidden flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-extrabold text-white text-3xl italic hover:text-red-600 duration-300">
            DevTrip
          </h1>
        </NavLink>
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
            <NavLink to="/" className="mt-16" onClick={closeDrawerRight}>
              <h1 className="font-extrabold text-5xl italic text-center">
                DevTrip
              </h1>
            </NavLink>
            <nav className="flex flex-col gap-8 font-bold text-2xl mt-10">
              <NavLink
                to="/passagens"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawerRight}
              >
                Passagens <Plane />
              </NavLink>
              <NavLink
                to="/pacotes"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawerRight}
              >
                Pacotes <BaggageClaim />
              </NavLink>
              <NavLink
                to="/hoteis"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawerRight}
              >
                Hotéis <Hotel />
              </NavLink>
              <NavLink
                to="/carros"
                className="flex items-center justify-center text-primary gap-1 hover:text-red-600 duration-300"
                onClick={closeDrawerRight}
              >
                Carros <Car />
              </NavLink>
            </nav>
            <div className="flex gap-8 items-center justify-center mt-20">
              {loggedOut && (
                <button
                  onClick={handleOpenSignIn}
                  className="font-bold border px-2 py-2 rounded-full"
                >
                  Cadastre-se
                  <Toaster richColors expand={true} />
                </button>
              )}
              {loggedOut && (
                <button
                  onClick={handleOpenLogin}
                  className="px-2 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300 flex items-center font-bold"
                >
                  Entrar <User />
                </button>
              )}
            </div>
            {loggedIn && (
              <div className="flex flex-col gap-10 items-center">
                <h1 className="font-extrabold text-black text-lg flex gap-1">
                  Olá,{' '}
                  <NavLink to="conta">
                    <span className="hover:text-red-600 duration-300 flex gap-1">
                      {userName}
                      <User />
                    </span>
                  </NavLink>
                </h1>
                <LogOut
                  className="text-red-400 cursor-pointer"
                  onClick={handleLogout}
                />
                <Toaster richColors expand={true} />
              </div>
            )}
          </div>
        </Drawer>
      </header>

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
            Passagens
            <Plane />
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
          {loggedOut && (
            <button
              onClick={handleOpenSignIn}
              className="hover:text-red-600 duration-300"
            >
              Cadastre-se
            </button>
          )}
          {loggedOut && (
            <button
              className="flex gap-1 px-6 py-2 border-2 border-red-600 rounded-full hover:bg-red-600 duration-300"
              onClick={handleOpenLogin}
            >
              Entrar <User />
            </button>
          )}
          {loggedIn && (
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-lg flex gap-2">
                Olá,{' '}
                <NavLink to="conta">
                  <span className="flex items-center gap-3 cursor-pointer hover:text-red-600 duration-300 ">
                    {userName}
                  </span>
                </NavLink>
              </h1>
              <LogOut
                onClick={handleLogout}
                className="hover:text-red-600 duration-300 cursor-pointer"
              />
            </div>
          )}
        </div>
      </header>

      <Dialog
        size="xs"
        open={openSignIn}
        handler={handleOpenSignIn}
        className="bg-transparent h-screen md:h-auto shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <button
            variant="text"
            color="blue-gray"
            onClick={handleOpenSignIn}
            className="w-full flex justify-end top-6 right-6 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-5 w-5 hover:bg-gray-400 rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <form onSubmit={handleClick} noValidate>
            <CardBody className="flex flex-col gap-3">
              <Typography variant="h4" color="blue-gray">
                Cadastro
              </Typography>
              <Typography
                className="mb-2 font-normal"
                variant="paragraph"
                color="gray"
              >
                Insira seus dados para criar uma conta.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Nome
              </Typography>
              <Input
                label="Nome"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                disabled={loading}
              />
              <p className="text-xs">
                {nameError && <Error message={nameError} />}
              </p>

              <Typography className="-mb-2" variant="h6">
                Email
              </Typography>
              <Input
                label="Email"
                size="lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                disabled={loading}
              />
              <p className="text-xs">
                {emailError && <Error message={emailError} />}
              </p>

              <Typography className="-mb-2" variant="h6">
                Senha
              </Typography>
              <div className="relative">
                <Input
                  label="Senha"
                  size="lg"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={toggleShowPassword}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <p className="text-xs">
                {passwordError && <Error message={passwordError} />}
              </p>
              <div className="-ml-2.5 -mt-3">
                <Checkbox
                  label="Lembrar-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </div>
            </CardBody>
            <div className="px-6 -mt-5 pb-2">
              <Button type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastre-se'}
              </Button>
              <Typography variant="small" className="flex justify-center mt-3">
                Já tem uma conta?
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold cursor-pointer"
                  onClick={handleAlreadyAccount}
                >
                  Entrar
                </Typography>
              </Typography>
            </div>
          </form>
        </Card>
      </Dialog>

      <Dialog
        size="xs"
        open={openLogin}
        handler={handleOpenLogin}
        className="bg-transparent h-screen shadow-none md:mt-16"
      >
        <Card className="mx-auto w-full max-w-[24rem] flex">
          <button
            variant="text"
            color="blue-gray"
            onClick={handleOpenLogin}
            className="w-full flex justify-end top-6 right-6 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-5 w-5 hover:bg-gray-400 rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <form onSubmit={handleLogin} noValidate>
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
                Email
              </Typography>
              <Input
                type="email"
                label="Email"
                size="lg"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                disabled={loading}
              />
              <Typography className="-mb-2" variant="h6">
                Senha
              </Typography>
              <div className="relative">
                <Input
                  label="Senha"
                  size="lg"
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={toggleShowPassword}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <p className="text-xs">
                {loginError && <Error message={loginError} />}
              </p>
              <div className="-ml-2.5 -mt-3">
                <Checkbox
                  label="Lembrar-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                type="submit"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
              <Typography variant="small" className="flex justify-center mt-3">
                Não tem uma conta?
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold cursor-pointer"
                  onClick={handleDontHaveAccount}
                >
                  Cadastre-se
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
