import { Newspaper } from 'lucide-react';
import { Input } from './Form/Input';
import { Button } from './Form/ButtonForm';
import { Link } from 'react-router-dom';
import { Error } from './Helper/Error';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

export function Novidades() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleClick(event) {
    event.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError('O nome é obrigatório.');
      toast.error('Preencha com seu nome.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('O email é obrigatório.');
      toast.error('Preencha com seu email.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('O email está inválido.');
      toast.error('Preencha um email válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      toast.success('Newsletter assinado com sucesso !');
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="mx-4">
          <h2 className="flex gap-2 font-bold text-blue-gray-800 text-2xl md:text-3xl items-center">
            <Newspaper />
            Novidades?
          </h2>
          <p className="text-sm text-blue-gray-400 font-bold">
            Acompanhe os melhores descontos.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6 shadow-lg rounded-lg border mx-4">
          <h1 className="font-bold text-lg">
            Assine nossa newsletter e receba as ofertas da DevTrip
          </h1>
          <form className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            {nameError && <Error message={nameError} />}
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            {emailError && <Error message={emailError} />}
            <Button onClick={handleClick}>ASSINAR</Button>
            <Toaster richColors position="top-center" />
          </form>
          <p className="text-xs">
            Concordo em receber comunicações, ofertas e compartilhar meus dados
            pessoais com a CVC e empresas parceiras. Para mais informações,
            consulte as{' '}
            <Link
              className="underline text-blue-600"
              to="/politicas-de-privacidade"
            >
              políticas de privacidade
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
