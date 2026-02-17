
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
    subheadline: "Receitas incríveis para fazer em até 10 minutos. Feitas com amor para quem não quer sofrer para ter dia dia.",
    cta: "🔒 GARANTIR ACESSO POR R$ 19,90",
    socialProof: {
      rating: "4.9/5",
      reviews: "2.847 avaliações",
      testimonial: "Transformou minhas manhãs!",
      author: "Julia, RJ"
    }
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
    title: "Sua Manhã Completa",
    categories: [
      {
        name: "Energia",
        count: "50 Receitas",
        examples: ["Sucos Detox", "Smoothies", "Cremosidade Fit", "Vitaminas"]
      },
      {
        name: "Proteínas",
        count: "50 Receitas",
        examples: ["Omeletes Diferenciados", "Ovos Benedict", "Mexidos Proteicos", "Frittatas"]
      },
      {
        name: "Carboidratos do Bem",
        count: "50 Receitas",
        examples: ["Panquecas de Aveia", "Tapiocas Recheadas", "Pães de Frigideira", "Waffles Fit"]
      },
      {
        name: "Praticidade",
        count: "50 Receitas",
        examples: ["Iogurtes Caseiros", "Overnight Oats", "Granola Artesanal", "Bowls de Frutas"]
      }
    ]
  },
  bonuses: [
    {
      title: "Guia de Substituições Eficientes",
      description: "Aprenda a substituir glúten, lactose, ovo e crie variações vegetarianas deliciosas sem perder o sabor.",
      price: "R$ 17",
      isFree: true,
      image: bonusSubstituicao
    },
    {
      title: "Calculadora de Calorias",
      description: "Descubra seu café da manhã ideal e acompanhe sua evolução com precisão na palma da sua mão.",
      price: "R$ 12",
      isFree: true,
      image: bonusCalculadora
    },
    {
      title: "Grupo VIP 30 Dias",
      description: "Suporte e motivação diária. Você não está sozinha: tire dúvidas e compartilhe resultados com a comunidade.",
      price: "R$ 21",
      isFree: true,
      image: bonusComunidade
    },
    {
      title: "Guia de Salvamento de Receitas",
      description: "O manual definitivo para salvar qualquer prato que saiu do controle e evitar desperdícios.",
      price: "R$ 24",
      isFree: true,
      image: bonusSalvamento
    },
    {
      title: "Plano Progressivo de 30 Dias",
      description: "Um cronograma semanal completo para guiar sua transformação e garantir resultados reais.",
      price: "R$ 23",
      isFree: true,
      image: bonusPlano
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
    totalValue: "R$ 144",
    priceInstallments: "2x de R$ 10,95 sem juros",
    priceCash: "R$ 19,90",
    dailyCost: "Economia de R$ 77,10 (79% OFF)",
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
          <p>E mais: 88% das pessoas que usaram este sistema reportaram mais disposição e energia logo na primeira semana.</p>
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
            <li><strong className="text-gray-900">Semana 3-4:</strong> Mudança clara no corpo e na disposição</li>
          </ul>
          <p>Lembre-se: uma manhã produtiva começa com a alimentação certa. Com o sistema certo, os resultados vêm.</p>
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
            <li>Acesso ao e-book Receitas de Café da Manhã (PDF)</li>
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
      question: "Quanto tempo tenho pra usar as receitas?",
      answer: (
        <>
          <p className="mb-4">O acesso é <strong className="text-gray-900">vitalício</strong>.</p>
          <p>Uma vez que você adquire o sistema, ele é seu para sempre. Pode baixar, imprimir e acessar quando quiser, sem mensalidades ou taxas extras.</p>
        </>
      )
    },
    {
      question: "Funciona para toda a família?",
      answer: (
        <>
          <p className="mb-4"><strong className="text-gray-900">SIM.</strong></p>
          <p className="mb-4">As receitas são pensadas para agradar a todos, desde as crianças até os adultos.</p>
          <p>Você não precisará cozinhar pratos diferentes. É comida de verdade, saborosa e nutritiva que todos vão amar.</p>
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
