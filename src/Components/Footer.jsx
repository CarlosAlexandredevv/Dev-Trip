import React from 'react';

export function Footer() {
  return (
    <footer className="flex justify-center text-white bg-primary mt-8 p-4 gap-2">
      <h1>Desenvolvido por</h1>
      <a
        href="https://github.com/CarlosAlexandredevv"
        className="underline hover:text-red-400 duration-300"
        target="_blank"
      >
        CarlosAlexandredevv
      </a>
    </footer>
  );
}
