import React from 'react';
import { Novidades } from '../Novidades';
import { Faq } from '../Faq';

export function InfoHome() {
  return (
    <div className="max-w-[1200px] my-0 mx-auto grid grid-cols-1 rounded gap-10 min-h-[200px] md:grid-cols-2">
      <Novidades />
      <Faq />
    </div>
  );
}
