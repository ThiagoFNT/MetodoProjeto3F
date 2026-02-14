
import React from 'react';
import { FAQItem, BonusItem, Testimonial } from './types';

// Using external image URLs provided
const bonusSubstituicao = "https://698bdb7424e527939449aabf.imgix.net/bonus-substituicao.jpg.jpg?fit=fill&auto=format";
const bonusSalvamento = "https://698bdb7424e527939449aabf.imgix.net/bonus-salvamento.jpg.jpg?fit=fill&auto=format";
const bonusCalculadora = "https://698bdb7424e527939449aabf.imgix.net/bonus-calculadora.jpg.jpg?fit=fill&auto=format";
const bonusPlano = "https://698bdb7424e527939449aabf.imgix.net/bonus-plano.jpg.jpg?fit=fill&auto=format";
const bonusComunidade = "https://698bdb7424e527939449aabf.imgix.net/bonus-comunidade.jpg.jpg?fit=fill&auto=format";

export const COPY = {
  hero: {
    headline: "Delicioso. Saudável. Simples.",
    subheadline: "200 receitas prontas para facilitar sua rotina, economizar tempo e trazer mais variedade para sua alimentação diária.",
    cta: "Começar Agora",
  },
  problems: [
    {
      title: "Medo de Errar",
      problem: "Você não sabe cozinhar e tem medo de errar ou desperdiçar ingredientes.",
      solution: "Receitas simples e impossíveis de estragar + Guia 'Salvando Receitas'."
    },
    {
      title: "Dúvida nas Calorias",
      problem: "Você não tem certeza se está comendo as calorias certas para ter resultados.",
      solution: "Informações nutricionais completas + Calculadora personalizada."
    },
    {
      title: "Falta de Apoio",
      problem: "Você se sente sozinha e sem apoio para manter a constância na dieta.",
      solution: "Comunidade exclusiva por 90 dias + Plano progressivo de 30 dias."
    }
  ],
  mechanism: {
    title: "Sistema A.P.P.",
    description: "Uma abordagem progressiva que ataca as raízes do problema, não apenas os sintomas.",
    points: [
      {
        title: "Acompanhamento",
        desc: "Um plano guiado de 30 dias."
      },
      {
        title: "Personalização",
        desc: "Adaptável para suas restrições alimentares."
      },
      {
        title: "Pertencimento",
        desc: "Conexão real com pessoas reais."
      }
    ]
  },
  modules: {
    title: "O Que Está Incluído",
    categories: [
      {
        name: "Café da Manhã",
        count: "50 Receitas",
        examples: ["Panquecas fit", "Omeletes", "Mingau proteico", "Smoothies"]
      },
      {
        name: "Almoço",
        count: "50 Receitas",
        examples: ["Marmitas práticas", "Saladas", "Grelhados", "Sopas"]
      },
      {
        name: "Lanche",
        count: "50 Receitas",
        examples: ["Snacks", "Bolos saudáveis", "Biscoitos", "Iogurtes"]
      },
      {
        name: "Jantar",
        count: "50 Receitas",
        examples: ["Pratos leves", "Receitas família", "Clássicos fit", "Caldos"]
      }
    ]
  },
  bonuses: [
    {
      title: "Guia de Substituição Inteligente",
      description: "Aprenda a substituir farinha de trigo, leite e ovos. O segredo para adaptar receitas sem perder o sabor.",
      price: "R$47",
      isFree: true,
      image: bonusSubstituicao
    },
    {
      title: "Guia de Salvamento de Receitas",
      description: "Resolução de Problemas Culinários. O manual definitivo para salvar qualquer prato que saiu do controle.",
      price: "R$27",
      isFree: true,
      image: bonusSalvamento
    },
    {
      title: "Calculadora de Calorias Personalizada",
      description: "Defina sua meta e acompanhe sua evolução com gráficos precisos. O controle total na palma da sua mão.",
      price: "R$37",
      isFree: true,
      image: bonusCalculadora
    },
    {
      title: "Plano Progressivo de 30 Dias",
      description: "Tenho um caminho claro. Um cronograma semanal passando por Fundação, Crescimento, Expansão e Realização.",
      price: "R$67",
      isFree: true,
      image: bonusPlano
    },
    {
      title: "Comunidade Exclusiva",
      description: "Bônus de 90 Dias. Você não está sozinho: tire dúvidas, compartilhe resultados e mantenha a motivação em alta.",
      price: "R$97",
      isFree: true,
      image: bonusComunidade
    }
  ] as BonusItem[],
  testimonials: [
    {
      name: "Fernanda Oliveira",
      role: "Perdeu 8kg em 4 semanas",
      text: "Eu achava que comer saudável era sem graça. Esse sistema mudou minha mente. As receitas são incríveis e nem parece dieta.",
      image: "https://698bdb7424e527939449aabf.imgix.net/A_brazilian_woman_202602111914%20(1).jpeg?fit=fill&auto=format",
      rating: 5
    },
    {
      name: "Julia Silva",
      role: "Perdeu 12kg em 2 meses",
      text: "A praticidade das marmitas salvou minha rotina de trabalho. Chego em casa e já tenho tudo pronto e delicioso.",
      image: "https://698bdb7424e527939449aabf.imgix.net/A_brazilian_woman_202602111914.jpeg?fit=fill&auto=format",
      rating: 5
    },
    {
      name: "Patrícia Lima",
      role: "Perdeu 5kg em 20 dias",
      text: "O guia de substituição foi o diferencial para mim. Consigo adaptar tudo para o que tenho na geladeira. Recomendo demais!",
      image: "https://698bdb7424e527939449aabf.imgix.net/Brazilian_woman_between_202602111914.jpeg?fit=fill&auto=format",
      rating: 4
    }
  ] as Testimonial[],
  pricing: {
    totalValue: "R$322",
    priceInstallments: "12x de R$2,06",
    priceCash: "R$19,90",
    dailyCost: "Menos de R$0,10 por receita.",
    cta: "Comprar Agora"
  },
  faq: [
    {
      question: "Mas eu não sei cozinhar. Vou conseguir fazer essas receitas?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> Foi exatamente para você que criamos este sistema.</p>
          <p className="mb-2">As receitas são divididas por nível de dificuldade:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong className="text-gray-900">Iniciantes:</strong> Apenas 3-4 ingredientes, 10-15 minutos, impossível errar</li>
            <li><strong className="text-gray-900">Intermediárias:</strong> Um pouco mais de técnica, mas ainda muito simples</li>
            <li><strong className="text-gray-900">Avançadas:</strong> Para quando você já ganhou confiança</li>
          </ul>
          <p>E tem mais: o Guia "Salvando Receitas" te ensina o que fazer quando algo der errado. Você nunca estará sozinha.</p>
        </>
      )
    },
    {
      question: "Não tenho tempo para cozinhar. Essas receitas são realmente rápidas?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> A maioria das receitas leva de 10 a 15 minutos.</p>
          <p>O tempo foi testado por pessoas reais, com rotina ocupada, na vida real.</p>
          <p>Não é tempo de influenciador que tem 3 horas para filmar. É tempo real.</p>
        </>
      )
    },
    {
      question: "Comida saudável é cara. Vou conseguir pagar pelos ingredientes?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> Cada receita mostra o custo por porção.</p>
          <p className="mb-2">Você vai ver que é possível comer bem gastando de R$2,50 a R$8,00 por refeição.</p>
          <p>Muitas pessoas economizam até R$350/mês comparado com o que gastavam antes.</p>
        </>
      )
    },
    {
      question: "Tenho restrições alimentares (glúten, lactose, etc.). Tem receitas para mim?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> O Guia de Substituições Inteligentes foi criado exatamente para você.</p>
          <p className="mb-2">Cada receita tem alternativas testadas para:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Sem glúten</li>
            <li>Sem lactose</li>
            <li>Sem ovo</li>
            <li>Vegetariana</li>
            <li>Vegana</li>
          </ul>
          <p>Você nunca mais fica de fora.</p>
        </>
      )
    },
    {
      question: "Já tentei várias dietas e nada funcionou. Por que esta seria diferente?",
      answer: (
        <>
          <p className="mb-4">Porque não é uma dieta. <strong className="text-gray-900">É um sistema.</strong></p>
          <p className="mb-4">Dietas te dizem O QUE comer. Sistemas te ensinam COMO fazer, te dão suporte quando você erra, e te conectam com pessoas na mesma jornada.</p>
          <p className="mb-4">É a diferença entre receber um peixe e aprender a pescar.</p>
          <p>E mais: 88% das pessoas que usaram este sistema reportaram perda de peso nas primeiras 4 semanas.</p>
        </>
      )
    },
    {
      question: "E se eu não gostar? Posso pedir reembolso?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> Sem perguntas, sem burocracia.</p>
          <p className="mb-4">Você tem <strong className="text-gray-900">7 dias completos</strong> para testar tudo.</p>
          <p className="mb-4">Se não gostar, envie um e-mail e devolvemos 100% do seu dinheiro.</p>
          <p>Simples assim.</p>
        </>
      )
    },
    {
      question: "Quanto tempo vou levar para ver resultados?",
      answer: (
        <>
          <p className="mb-4">Isso varia de pessoa para pessoa. Mas a maioria das pessoas reporta:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong className="text-gray-900">Semana 1-2:</strong> Mais energia, menos inchaço</li>
            <li><strong className="text-gray-900">Semana 3-4:</strong> Primeira perda de peso visível (2-3kg)</li>
            <li><strong className="text-gray-900">Mês 2-3:</strong> Mudança clara no corpo e na autoconfiança</li>
          </ul>
          <p>Lembre-se: emagrecimento saudável é um processo. Não é mágica. Mas com o sistema certo, os resultados vêm.</p>
        </>
      )
    },
    {
      question: "Como vou receber o produto?",
      answer: (
        <>
          <p className="mb-4">Imediatamente após a compra.</p>
          <p className="mb-2">Você recebe:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Acesso ao e-book digital (PDF)</li>
            <li>Link para download de todos os bônus</li>
            <li>Convite para a comunidade exclusiva no WhatsApp</li>
          </ul>
          <p className="mb-2">Tudo no seu e-mail, em até 5 minutos.</p>
          <p>Pode acessar no celular, tablet, computador ou imprimir.</p>
        </>
      )
    },
    {
      question: "A comunidade é realmente ativa? Vou ter suporte?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong> A comunidade tem centenas de pessoas ativas todos os dias.</p>
          <p className="mb-2">Você pode:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tirar dúvidas sobre receitas</li>
            <li>Compartilhar seus resultados</li>
            <li>Pedir adaptações</li>
            <li>Receber motivação</li>
            <li>Trocar experiências</li>
          </ul>
          <p>E tem mais: o acesso é por 90 dias completos.</p>
        </>
      )
    },
    {
      question: "Preciso de equipamentos especiais?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">NÃO.</strong></p>
          <p className="mb-2">As receitas foram pensadas para quem tem uma cozinha básica:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Fogão comum</li>
            <li>Panelas normais</li>
            <li>Utensílios básicos</li>
          </ul>
          <p>Nada de Air Fryer obrigatória, liquidificador profissional ou coisas caras. Se você tem uma cozinha, você consegue fazer.</p>
        </>
      )
    },
    {
      question: "Posso fazer as receitas para a minha família?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong></p>
          <p className="mb-4">As receitas são deliciosas e aprovadas por famílias reais.</p>
          <p className="mb-4">Você não precisa fazer "comida de dieta" para você e "comida normal" para a família.</p>
          <p>Todo mundo come junto. Todo mundo fica satisfeito.</p>
        </>
      )
    },
    {
      question: "Quanto tempo tenho para começar depois da compra?",
      answer: (
        <>
          <p className="mb-4">Quanto tempo você quiser.</p>
          <p className="mb-4">O acesso é vitalício (exceto a comunidade, que é por 90 dias).</p>
          <p className="mb-4">Mas nossa recomendação?</p>
          <p className="font-semibold text-gray-900">Comece hoje mesmo.</p>
          <p>Quanto antes começar, mais rápido verá resultados.</p>
        </>
      )
    }
  ] as FAQItem[]
};
