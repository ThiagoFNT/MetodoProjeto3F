import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Check,
  Target,
  ShieldCheck,
  Flame,
  Leaf,
  Utensils,
  Coffee,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Gift
} from 'lucide-react';

import { COPY } from '../constants';
import { Button, Card, Section, SectionHeading } from './UI';

const CHECKOUT_URL = "https://checkout.payt.com.br/1bf14669c84cfca7fdfb516b8301de00";

// --- Components ---

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }} // Apple ease with enhanced duration
    className={className}
  >
    {children}
  </motion.div>
);

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative h-full rounded-[24px] border border-white/60 bg-white shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,113,227,0.08), transparent 40%)`,
        }}
      />
      <div className="relative h-full p-8 flex flex-col">
        {children}
      </div>
    </div>
  );
};

const StickyCTA = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
  >
    <div className="bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-white/20 p-3 rounded-full shadow-2xl flex items-center justify-between pl-6">
      <span className="font-semibold text-gray-900 text-sm">Comece agora</span>
      <Button variant="secondary" size="sm" onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
        Comprar
      </Button>
    </div>
  </motion.div>
);

const Countdown = ({ className = "" }: { className?: string }) => {
  const INITIAL_TIME = 15 * 60; // 15 minutes
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? INITIAL_TIME : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return (
      <div className="flex gap-4 md:gap-6 text-[#2D3748] font-bold">
        <div className="flex flex-col items-center">
          <div className="bg-white/80 backdrop-blur-sm px-4 md:px-6 py-3 rounded-2xl ring-1 ring-gray-200 shadow-sm min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-mono">{h.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 mt-2 font-semibold">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/80 backdrop-blur-sm px-4 md:px-6 py-3 rounded-2xl ring-1 ring-gray-200 shadow-sm min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-mono">{m.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 mt-2 font-semibold">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#F97316]/10 px-4 md:px-6 py-3 rounded-2xl ring-1 ring-[#F97316]/30 shadow-sm min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-mono text-[#F97316]">{s.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#F97316] mt-2 font-semibold">Segundos</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      <div className="flex items-center gap-2 text-[#C2410C] font-black uppercase tracking-[0.25em] text-xs">
        <span className="animate-pulse">⚠️ Promoção termina em:</span>
      </div>
      {formatTime(timeLeft)}
    </div>
  );
};

// --- Sections ---

const Hero = ({ isUnlocked }: { isUnlocked: boolean }) => {
  return (
    <section className="relative flex flex-col pt-24 pb-20 items-center bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        <FadeIn>
          <h1 className="text-4xl md:text-[64px] font-bold tracking-tight text-[#2D3748] mb-6 max-w-4xl leading-[1.15]">
            {COPY.hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl font-medium text-[#718096] mb-10 max-w-2xl leading-relaxed">
            {COPY.hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mb-10">
          <div className="flex items-center gap-1.5 justify-center py-2 px-4 bg-amber-50 rounded-full border border-amber-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#F59E0B]">4.9/5</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-sm font-medium text-gray-500">{COPY.hero.socialProof.reviews}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full max-w-2xl bg-[#FFF7ED] p-8 md:p-12 rounded-[40px] border-2 border-[#F97316] shadow-xl relative mb-12 group">
          <div className="flex flex-col items-center">
            <p className="text-xs md:text-sm font-black text-[#F97316] uppercase tracking-[0.2em] mb-8 bg-white px-4 py-1.5 rounded-full border border-[#F97316]/20 shadow-sm">
              Oferta Exclusiva por Tempo Limitado
            </p>

            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
              De R$ 97 por apenas:
            </p>

            <div className="flex flex-col items-center mb-10">
              <span className="text-7xl md:text-9xl font-black text-[#2D3748] tracking-tighter">
                R$ 19,90
              </span>
              <p className="text-emerald-600 font-bold text-lg md:text-xl mt-3 flex items-center gap-2 bg-emerald-50 px-5 py-2 rounded-full border border-emerald-100 shadow-sm transition-transform hover:scale-105">
                <Check size={20} /> ou 2x de R$ 10,95 sem juros
              </p>
              <div className="mt-4 bg-[#10B981] text-white px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-emerald-500/20 animate-bounce">
                {COPY.pricing.savingsLabel}
              </div>
            </div>

            <Countdown className="mb-10" />

            <div className="flex flex-col items-center gap-4 w-full max-w-sm">
              <p className="text-[13px] font-black text-red-600 uppercase tracking-widest text-center leading-relaxed">
                ⚠️ Depois disso, o preço volta para R$ 97<br />
                Não perca esta oportunidade única!
              </p>

              <div className="w-full space-y-2">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-wider text-[#F97316]">
                  <span>Restam apenas 43 vagas</span>
                  <span>80% Preenchido</span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden border border-gray-100 shadow-inner p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#F97316] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <AnimatePresence>
          {isUnlocked && (
            <FadeIn delay={0.3} className="w-full max-w-xl">
              <div className="flex flex-col items-center gap-8">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-20 w-full rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-xl font-bold shadow-2xl shadow-emerald-500/30 transform hover:scale-[1.02] transition-all"
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {COPY.hero.cta}
                </Button>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-bold text-[#64748B] uppercase tracking-wider">
                  <span className="flex items-center gap-2.5"><Check size={18} className="text-[#10B981] stroke-[3]" /> Acesso Imediato</span>
                  <span className="flex items-center gap-2.5"><Check size={18} className="text-[#10B981] stroke-[3]" /> Garantia 7 Dias</span>
                  <span className="flex items-center gap-2.5"><Check size={18} className="text-[#10B981] stroke-[3]" /> Pagamento Seguro</span>
                </div>
              </div>
            </FadeIn>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};



const PainPoints = () => {
  return (
    <Section background="gray">
      <SectionHeading subtitle="Identifique os sinais.">
        Por que é difícil manter a dieta?
      </SectionHeading>

      <div className="grid md:grid-cols-3 gap-6">
        {COPY.problems.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <Card className="h-full flex flex-col justify-between" hoverEffect>
              <div>
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4 text-red-500">
                  <Target size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-[#86868B] leading-relaxed mb-8 font-medium text-lg">{item.problem}</p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-[15px] font-semibold text-[#0071E3] flex items-center gap-2">
                  <Check size={16} /> {item.solution}
                </p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const Mechanism = () => {
  const letters = ['A', 'P', 'P'];

  return (
    <Section id="mechanism" className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-emerald-50/50 blur-3xl rounded-full opacity-60 pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
        {/* Image Side */}
        <div className="w-full md:w-1/2 order-2 md:order-1 relative">
          <FadeIn>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
                alt="Preparando alimentos saudáveis"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3 animate-fade-in-up">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Leaf size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Método</p>
                  <p className="text-sm font-bold text-gray-900">100% Natural</p>
                </div>
              </div>
            </div>
            {/* Decorative elements behind image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl -z-10" />
          </FadeIn>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={12} className="fill-current" />
              Metodologia Exclusiva
            </div>
            <h2 className="text-4xl md:text-[56px] font-semibold text-[#1D1D1F] mb-6 tracking-tight leading-[1.1]">
              {COPY.mechanism.title}
            </h2>
            <p className="text-xl text-[#86868B] mb-12 font-medium leading-relaxed">
              {COPY.mechanism.description}
              <br />
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider block mt-4">Incluso: Versões sem glúten e sem lactose</span>
            </p>
          </FadeIn>

          <div className="space-y-4">
            {COPY.mechanism.points.map((point, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="group flex items-center gap-6 p-5 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 cursor-default">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] text-[#1D1D1F] flex items-center justify-center text-2xl font-bold shadow-sm ring-1 ring-black/5 group-hover:from-[#0071E3] group-hover:to-[#42A5F5] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]">
                    {letters[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1 group-hover:text-[#0071E3] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-[#86868B] leading-relaxed text-[16px]">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProductShowcase = () => {
  const icons = [Coffee, Utensils, Leaf, Flame];

  // Apple-style configuration for each card type
  const categoryConfig = [
    {
      bgGradient: "from-orange-50 to-amber-50",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      accentColor: "text-orange-600",
      shadowColor: "hover:shadow-orange-500/10"
    },
    {
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-500",
      iconColor: "text-white",
      accentColor: "text-emerald-600",
      shadowColor: "hover:shadow-emerald-500/10"
    },
    {
      bgGradient: "from-blue-50 to-sky-50",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      accentColor: "text-blue-600",
      shadowColor: "hover:shadow-blue-500/10"
    },
    {
      bgGradient: "from-rose-50 to-pink-50",
      iconBg: "bg-rose-500",
      iconColor: "text-white",
      accentColor: "text-rose-600",
      shadowColor: "hover:shadow-rose-500/10"
    },
  ];

  return (
    <Section background="gray">
      <FadeIn>
        <SectionHeading subtitle="Variedade e sabor em cada refeição.">
          <span className="relative inline-block">
            {COPY.modules.title}
            <Sparkles className="absolute -top-6 -right-8 text-[#FFB92D] w-6 h-6 animate-pulse" />
          </span>
        </SectionHeading>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
        {COPY.modules.categories.map((cat, idx) => {
          const Icon = icons[idx % icons.length];
          const config = categoryConfig[idx % categoryConfig.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`relative overflow-hidden rounded-[32px] bg-white border border-gray-100 shadow-sm ${config.shadowColor} transition-all duration-500 group`}
            >
              {/* Dynamic Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Decorative Big Icon in Corner */}
              <div className={`absolute -bottom-8 -right-8 ${config.accentColor} opacity-[0.07] transform rotate-12 scale-150 pointer-events-none group-hover:scale-[1.6] group-hover:rotate-6 transition-transform duration-700 ease-out`}>
                <Icon size={180} />
              </div>

              <div className="relative p-10 z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-5">
                    {/* Icon Box */}
                    <div className={`w-16 h-16 rounded-2xl ${config.iconBg} ${config.iconColor} shadow-lg shadow-black/5 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-500`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">{cat.name}</h3>
                      <p className={`text-sm font-semibold ${config.accentColor} uppercase tracking-wide opacity-80`}>
                        Delicioso & Prático
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide border border-black/5 shadow-sm">
                    {cat.count}
                  </span>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-sm flex-grow">
                  <ul className="space-y-4">
                    {cat.examples.map((ex, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-center gap-4 text-[#1D1D1F] font-medium group/item"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform ${config.accentColor}`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-lg opacity-90 group-hover/item:opacity-100 transition-opacity">{ex}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

const Bonuses = () => {
  return (
    <Section id="bonuses" background="white">
      <SectionHeading subtitle="Para complementar sua jornada.">
        <span className="inline-flex items-center gap-2">
          Bônus Exclusivos
          <Gift className="text-pink-500 animate-bounce" size={28} />
        </span>
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {COPY.bonuses.map((bonus, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="h-full">
            <div className="group relative h-full flex flex-col bg-[#F5F5F7] rounded-[32px] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                {bonus.image && (
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors duration-500" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex flex-col items-end border border-white/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">De {bonus.price} por</span>
                  <span className="text-[11px] font-bold text-white bg-emerald-500 px-2 py-0.5 rounded-lg tracking-wide shadow-sm">GRÁTIS</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3 leading-tight group-hover:text-[#0071E3] transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-[#86868B] text-[15px] leading-relaxed mb-6 flex-grow">
                  {bonus.description}
                </p>
                <div className="pt-6 border-t border-gray-200/50 flex items-center text-sm font-medium text-emerald-600">
                  <Check size={16} className="mr-2" />
                  Incluso no pacote
                </div>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* 6th Card - Summary */}
        <FadeIn delay={0.5} className="h-full">
          <div className="relative h-full flex flex-col justify-center items-center bg-[#1D1D1F] rounded-[32px] p-8 text-center overflow-hidden shadow-2xl group border border-gray-800">
            {/* Background FX */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 text-white">
                <Gift size={32} />
              </div>

              <h3 className="text-xl font-medium text-gray-400 mb-2">Valor Total dos Bônus</h3>
              <div className="text-5xl font-bold text-white mb-2 tracking-tight line-through decoration-red-500/80">
                R$ 97
              </div>
              <div className="text-emerald-400 font-bold text-lg bg-emerald-500/10 px-4 py-1 rounded-full mb-8 border border-emerald-500/20">
                100% GRÁTIS
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                Ao garantir seu acesso hoje.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

const SocialProof = () => {
  return (
    <Section background="gray">
      <SectionHeading subtitle="Histórias reais.">
        Resultados que Inspiram
      </SectionHeading>
      <div className="grid md:grid-cols-3 gap-6">
        {COPY.testimonials.map((t, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <Card className="h-full flex flex-col justify-between" hoverEffect>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < (t.rating || 5) ? "fill-[#FFB92D] text-[#FFB92D]" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-[#1D1D1F] text-lg font-medium leading-relaxed mb-6">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {t.image && (
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                )}
                <div>
                  <h4 className="font-semibold text-[#1D1D1F] text-sm">{t.name}</h4>
                  <p className="text-[#86868B] text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full inline-block mt-0.5">{t.role}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
};

const Offer = () => {
  return (
    <Section id="offer" className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Visual Polish: Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tight leading-[1.1]">Comece agora.</h2>
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.2em] mb-12 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-400/30" /> Método Projeto 3F
            </p>

            <p className="text-xl md:text-2xl text-[#A0AEC0] mb-12 leading-relaxed font-medium">
              Tudo o que você precisa para transformar sua alimentação em um único pacote completo e imediato.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="space-y-5 mb-12">
              {[
                "Receitas de Café da Manhã (PDF)",
                "Guia de Substituições Eficientes",
                "Calculadora de Calorias Automática",
                "Grupo VIP de Suporte 30 Dias",
                "Guia de Salvamento Nutricional",
                "Plano Prático de 30 Dias"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Check size={14} className="text-white stroke-[3]" />
                  </div>
                  <span className="text-[#CBD5E0] font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.3}>
            <div className="bg-[#1E293B]/80 backdrop-blur-xl rounded-[48px] p-8 md:p-14 text-center border border-white/10 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

              <div className="mb-12">
                <Countdown className="transform scale-90 md:scale-100" />
              </div>

              <div className="flex flex-col items-center mb-10">
                <div className="flex flex-col items-center gap-1 mb-6">
                  <span className="text-xl text-[#64748B] line-through font-bold">De {COPY.pricing.totalValue}</span>
                  <div className="bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-amber-400/20">
                    Oferta Exclusiva Hoje
                  </div>
                </div>

                <div className="flex flex-col items-center mb-6">
                  <span className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
                    {COPY.pricing.priceCash}
                  </span>
                  <p className="text-emerald-400 text-2xl font-black mt-2 tracking-tight">
                    {COPY.pricing.priceInstallments}
                  </p>
                  <p className="text-[#94A3B8] text-sm font-bold mt-4 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                    {COPY.pricing.dailyCost}
                  </p>
                </div>

                <div className="w-full max-w-xs space-y-3 mb-10">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                    <span>Restam apenas 43 vagas</span>
                    <span>80% Preenchido</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="secondary"
                size="lg"
                fullWidth
                className="h-20 text-xl font-black rounded-full bg-[#10B981] hover:bg-[#059669] text-white border-none shadow-[0_10px_30px_rgba(16,185,129,0.3)] mb-8 transition-all hover:scale-[1.03] active:scale-95 group"
                onClick={() => window.open(CHECKOUT_URL, '_blank')}
              >
                <div className="flex items-center justify-center gap-3">
                  <ShieldCheck size={24} className="group-hover:animate-pulse" />
                  {COPY.pricing.cta}
                </div>
              </Button>

              <div className="flex items-center justify-center gap-3 text-sm text-[#94A3B8] font-bold">
                <div className="flex -space-x-2 mr-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1E293B] bg-gray-600 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span>437 pessoas compraram nas últimas 24h</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const Guarantee = () => {
  return (
    <Section background="white">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <img
              src="https://698bdb7424e527939449aabf.imgix.net/OIP.webp?fit=fill&auto=format"
              alt="Garantia de 7 dias"
              className="w-24 h-auto mb-6 object-contain"
            />
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl md:text-2xl text-[#86868B] font-medium">
              Zero Risco Para Você.
            </p>
          </div>

          <div className="bg-[#F5F5F7] rounded-[32px] p-8 md:p-12 border border-gray-100">
            <p className="text-xl font-medium text-[#1D1D1F] mb-8 text-center">
              Nós confiamos tanto neste sistema que assumimos todo o risco.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-[#1D1D1F] mb-4 uppercase tracking-wide">Funciona assim:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1 min-w-[20px]"><Check size={20} className="text-green-500" /></div>
                    <span className="text-[#424245] font-medium">Você adquire hoje.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 min-w-[20px]"><Check size={20} className="text-green-500" /></div>
                    <span className="text-[#424245] font-medium">Recebe acesso imediato a tudo: receitas, 5 bônus e comunidade.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 min-w-[20px]"><Check size={20} className="text-green-500" /></div>
                    <span className="text-[#424245] font-medium">Você testa por <strong>7 dias completos</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-[#1D1D1F] font-medium mb-4">
                  Se por QUALQUER motivo você não estiver satisfeita...
                </p>
                <p className="text-[#86868B] text-sm leading-relaxed mb-6">
                  Basta enviar UM e-mail para nosso suporte. Nós devolvemos 100% do seu investimento.
                  Sem perguntas. Sem burocracia. Sem letras miúdas.
                </p>
                <div className="p-3 bg-green-50 rounded-xl text-center">
                  <span className="text-green-700 font-semibold text-sm">Seu dinheiro de volta. Simples assim.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section background="gray">
      <SectionHeading subtitle="Perguntas Frequentes">Dúvidas?</SectionHeading>
      <div className="max-w-2xl mx-auto">
        {COPY.faq.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.05}>
            <div className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left bg-white rounded-2xl p-6 md:p-8 shadow-sm flex items-center justify-between focus:outline-none transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-[#1D1D1F]">{item.question}</span>
                <ChevronDown
                  className={`text-[#86868B] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-white mx-2 rounded-b-2xl"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-[#86868B] text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-white text-[#86868B] py-16 text-center text-sm border-t border-gray-100">
    <div className="max-w-[1080px] mx-auto px-6">
      <p className="mb-6 font-semibold">&copy; {new Date().getFullYear()} Receitas de Café da Manhã</p>
      <div className="max-w-xl mx-auto">
        <p className="text-xs leading-relaxed text-[#D2D2D7]">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
          Os resultados podem variar de pessoa para pessoa.
          Consulte sempre um profissional de saúde antes de iniciar qualquer dieta.
        </p>
      </div>
    </div>
  </footer>
);

export const LandingPage = () => {
  const [isUnlocked] = useState(true);

  return (
    <div className="font-sans antialiased bg-white selection:bg-blue-100 selection:text-blue-900">
      <Hero isUnlocked={isUnlocked} />

      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <PainPoints />
            <Mechanism />
            <ProductShowcase />
            <Bonuses />
            <SocialProof />
            <Offer />
            <Guarantee />
            <FAQ />
            <Footer />
            <StickyCTA />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};