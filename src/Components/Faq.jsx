import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { ShieldQuestion } from 'lucide-react';

export function Faq() {
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-4">
        <h2 className="flex gap-2 font-bold text-blue-gray-800 text-2xl md:text-3xl items-center">
          <ShieldQuestion />
          Perguntas frequentes
        </h2>
        <p className="text-sm text-blue-gray-400 font-bold">
          Acesse as respostas mais comuns sobre o DevTrip.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-6 px-6 py-9 shadow-lg rounded-lg border mx-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Como posso encontrar as melhores ofertas de viagem?
          </AccordionTrigger>
          <AccordionContent>
            Nós oferecemos uma seleção cuidadosa das melhores promoções de
            viagem disponíveis. Você pode usar nossas ferramentas de busca e
            filtros para encontrar pacotes que se encaixem no seu orçamento e
            preferências. Inscreva-se na nossa newsletter para receber
            notificações de ofertas exclusivas diretamente no seu e-mail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Quais são as políticas de cancelamento e reembolso?
          </AccordionTrigger>
          <AccordionContent>
            As políticas de cancelamento e reembolso variam de acordo com o
            pacote de viagem e o fornecedor. Recomendamos que você leia
            atentamente os termos e condições antes de finalizar a compra. Em
            caso de dúvidas, nossa equipe de atendimento ao cliente está
            disponível para ajudá-lo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Vocês oferecem suporte para planejamento de viagens?
          </AccordionTrigger>
          <AccordionContent>
            Sim, nossa equipe de especialistas em viagem está à disposição para
            ajudá-lo a planejar a viagem dos seus sonhos. Entre em contato
            conosco com seus detalhes e preferências, e criaremos um itinerário
            personalizado para você. lorem
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Quais documentos são necessários para viajar?
          </AccordionTrigger>
          <AccordionContent>
            Os documentos necessários variam de acordo com o destino.
            Geralmente, você precisará de um passaporte válido, visto (se
            aplicável) e comprovante de vacinação (se necessário). Recomendamos
            que verifique os requisitos específicos do seu destino antes de
            viajar. Nossa equipe também pode fornecer orientação sobre os
            documentos exigidos para a sua viagem.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
