import React, { useState } from 'react';
import { 
    // Iconos combinados de ambos archivos
    PiggyBank, ArrowRight, BookX, Wrench, Crosshair, Handshake, Gamepad2, QrCode, 
    Puzzle, Users, Store, CheckCircle, Twitter, Linkedin, Facebook, BarChart, 
    Target, DollarSign, HandCoins, User, UserRound, Volume2, Accessibility,
    FileText, LifeBuoy, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- IMÁGENES IMPORTADAS DEL CÓDIGO 1 (respetadas según la instrucción) ---
import confianza from './assets/images/confianza.png';
import cerdito from './assets/images/cerdito.png';
import takenos from './assets/images/takenos.webp';
import jci_tunari from './assets/images/jci.png';
import digital_services from './assets/images/Digital services.jpg';


// --- INICIO DE COMPONENTES ---

const Nav = () => {
  // Se añade "Auspiciadores" al menú de navegación
  const navLinks = ["Problema", "Solución", "Educación", "Ventajas", "Equipo", "Auspiciadores", "Mercado"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-background/80 backdrop-blur-lg border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <PiggyBank className="text-brand-primary" size={32} />
          <span className="text-2xl font-bold text-brand-text">Mayki</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>
        <a href="#unete" className="hidden md:inline-block bg-brand-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-80 transition-transform duration-300 hover:scale-105">
          Únete ahora
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center bg-brand-background pt-20">
    <div className="container mx-auto px-6 z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text leading-tight mb-4">
            ¿Sabe usted cuántos negocios en Bolivia quiebran por falta de conocimiento en <span className="text-brand-primary">finanzas básicas?</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
            Es hora de tomar el control. Mayki te da las herramientas para que administres tu dinero y fomentes el ahorro de formas seguras y divertidas.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#unete" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-opacity-80 transition-transform duration-300 hover:scale-105 shadow-lg shadow-brand-primary/30">
              Controla tu futuro
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img 
            src={confianza} 
            alt="Confianza en la comunidad" 
            className="rounded-3xl shadow-2xl mx-auto w-full max-w-md animate-float object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const customerProblems = [
    { icon: BookX, title: "Baja Educación Financiera", description: "Baja de conocimientos prácticos para administrar el dinero de forma efectiva." },
    { icon: Wrench, title: "Carencia de Herramientas", description: "Inexistencia de soluciones digitales adaptadas a las necesidades reales de los emprendimientos." },
    { icon: Crosshair, title: "Decisiones Inciertas", description: "Dificultad para tomar decisiones económicas acertadas que impulsen el crecimiento del negocio." },
];

const Problem = () => (
  <section id="problema" className="py-20 bg-brand-surface">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">El Desafío de los Microemprendimientos</h2>
        <p className="text-brand-text-secondary mt-4 max-w-3xl mx-auto">En microemprendimientos se observa una falta de conocimiento en la administración del dinero, lo que se traduce en baja capacidad de ahorro y escasa educación financiera práctica.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {customerProblems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 text-center"
          >
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <problem.icon className="text-brand-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-brand-text mb-2">{problem.title}</h3>
            <p className="text-brand-text-secondary">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const solutions = [
  { icon: Handshake, title: "Microcréditos P2P Digital", description: "Accede a préstamos de tu comunidad basados en la confianza, sin burocracia." },
  { icon: Gamepad2, title: "Educación Financiera Interactiva", description: "Aprende a manejar tus finanzas jugando, con recompensas y simulaciones divertidas." },
  { icon: QrCode, title: "Pagos de Servicios y Accesibilidad", description: "Realiza pagos de forma simple y rápida, con herramientas diseñadas para todos." },
];

const Solution = () => (
  <section id="solución" className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Mayki: La Solución en tus Manos</h2>
        <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Enseñamos a administrar el dinero y fomentamos el ahorro de formas seguras y divertidas.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-brand-surface p-8 rounded-2xl border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <solution.icon className="text-brand-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-brand-text mb-2">{solution.title}</h3>
            <p className="text-brand-text-secondary">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
    <section id="educación" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img src={cerdito} alt="Financial Education" className="rounded-2xl shadow-lg" />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">Aprende, juega y crece con Waskar</h2>
            <p className="text-brand-text-secondary mb-8">La educación financiera no tiene por qué ser aburrida. Con nuestro módulo interactivo y nuestro juego, manejar tu dinero es fácil y divertido.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-accent/20 rounded-full"><Volume2 className="text-brand-accent" /></div>
                <div>
                  <h4 className="font-semibold text-brand-text">Contenido Inclusivo</h4>
                  <p className="text-brand-text-secondary text-sm">Audios y videos en quechua y español, con botones grandes y guías de voz para que nadie se quede atrás.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-accent/20 rounded-full"><PiggyBank className="text-brand-accent" /></div>
                <div>
                  <h4 className="font-semibold text-brand-text">Conoce a Waskar</h4>
                  <p className="text-brand-text-secondary text-sm">Tu mascota financiera. ¡Toma buenas decisiones para mantener su traje de millonario y gana monedas para canjear en la app!</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-accent/20 rounded-full"><Accessibility className="text-brand-accent" /></div>
                <div>
                  <h4 className="font-semibold text-brand-text">Accesibilidad Total</h4>
                  <p className="text-brand-text-secondary text-sm">Diseñada para todos, incluyendo personas con discapacidad visual. La app te guía con voz en cada paso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

const advantages = [
  "Educación + práctica real con monedas virtuales.",
  "Red P2P con reputación y confianza entre usuarios.",
  "Aprendizaje divertido, guiado por Waskar, con recompensas y simulaciones.",
  "Transforma la teoría en decisiones financieras aplicables en la vida real."
];

const CompetitiveAdvantage = () => (
  <section id="ventajas" className="py-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">Nuestra Ventaja Competitiva</h2>
					<p className="text-sm md:text-base text-brand-text-secondary mb-8 max-w-xl mx-auto md:mx-0">
            Controla tu plata, controla tu vida.
          </p>
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-brand-text-secondary text-lg">{advantage}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Equipo colaborando" className="rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </div>
  </section>
);

const teamMembers = [
  { name: "Rodrigo Pacheco", role: "Co-fundador", Icon: User },
  { name: "Alison Gomez", role: "Co-fundadora", Icon: UserRound },
  { name: "Santiago Guzman", role: "Co-fundador", Icon: User },
  { name: "Jhonatan Cáceres", role: "Co-fundador", Icon: User },
];

const Team = () => (
  <section id="equipo" className="py-20 bg-brand-surface">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Nuestro Equipo</h2>
        <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">Apasionados por la tecnología y la inclusión financiera, unidos para crear un impacto real en Bolivia.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map(member => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-primary/50 flex items-center justify-center bg-gray-100">
              <member.Icon className="text-brand-primary/80" size={64} strokeWidth={1.5} />
            </div>
            <h4 className="font-semibold text-brand-text text-lg">{member.name}</h4>
            <p className="text-brand-text-secondary">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- SECCIÓN DE AUSPICIADORES DEL CÓDIGO 1 (AÑADIDA SEGÚN INSTRUCCIÓN) ---
const sponsors = [
    { name: "JCI Tunari", logoUrl: jci_tunari },
    { name: "Takenos", logoUrl: takenos },
    { name: "Digital Service", logoUrl: digital_services },
  ];
  
  const Sponsors = () => (
    <section id="auspiciadores" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Quienes Confían en Nosotros</h2>
          <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">
            Estamos orgullosos de colaborar con organizaciones que comparten nuestra visión de un futuro financiero más inclusivo.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10"
        >
          {sponsors.map(sponsor => (
            <a href="#" key={sponsor.name} className="block" title={sponsor.name}>
              <img 
                src={sponsor.logoUrl} 
                alt={sponsor.name} 
                className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );

const marketStats = [
    { icon: Store, value: "59k - 63k", label: "Microempresas en Cochabamba" },
    { icon: BarChart, value: "80%", label: "Ya usan soluciones digitales (~45k personas)" },
    { icon: Target, value: "1% (500)", label: "Nuestro objetivo inicial de usuarios/negocios" },
];

const Market = () => (
  <section id="mercado" className="py-20 bg-brand-surface">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Un Mercado Listo para la Innovación</h2>
        <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">
          Existe una gran oportunidad en Cochabamba para digitalizar y potenciar la economía local.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {marketStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 text-center"
          >
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <stat.icon className="text-brand-primary" size={32} />
            </div>
            <p className="text-3xl font-bold text-brand-text">{stat.value}</p>
            <p className="text-brand-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Download = () => (
  <section id="unete" className="py-20">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-brand-primary to-green-500 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Controla tu dinero, controla tu vida.</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Descarga Mayki y únete a miles de bolivianos que están construyendo una economía más justa y comunitaria desde su celular.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#" className="bg-white text-brand-primary font-bold py-4 px-8 rounded-xl w-full sm:w-auto hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-3">
            <svg width="102px" height="244px" viewBox="0 -189.93 539.856 539.856" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="scale(4.00216 4.0011)"> <path fill="#FFF" d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z"></path> <path fill="#A6A6A6" d="M130.198 39.989H4.729A4.73 4.73 0 0 1 0 35.268V4.726A4.733 4.733 0 0 1 4.729 0h125.468a4.735 4.735 0 0 1 4.729 4.726v30.542c.002 2.604-2.123 4.721-4.728 4.721z"></path> <path d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z"></path> <path fill="#FFF" d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.554 2.355 3.287 4.016 3.226 1.625-.066 2.232-1.035 4.193-1.035 1.943 0 2.513 1.035 4.207.996 1.744-.027 2.842-1.56 3.89-3.127 1.255-1.779 1.759-3.533 1.779-3.623-.04-.014-3.386-1.292-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z"></path> <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-23.235" y1="97.431" x2="-23.235" y2="61.386" gradientTransform="matrix(4.0022 0 0 4.0011 191.95 -349.736)"> <stop offset="0" stop-color="#1a1a1a" stop-opacity=".1"></stop> <stop offset=".123" stop-color="#212121" stop-opacity=".151"></stop> <stop offset=".308" stop-color="#353535" stop-opacity=".227"></stop> <stop offset=".532" stop-color="#575757" stop-opacity=".318"></stop> <stop offset=".783" stop-color="#858585" stop-opacity=".421"></stop> <stop offset="1" stop-color="#b3b3b3" stop-opacity=".51"></stop> </linearGradient> <path fill="url(#a)" d="M130.198 0H62.993l26.323 39.989h40.882a4.733 4.733 0 0 0 4.729-4.724V4.726A4.734 4.734 0 0 0 130.198 0z"></path> <g fill="#FFF"> <path d="M53.665 31.504h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.43l4.285-13.308h2.646l4.304 13.308zm-3.89-5.549L48.65 22.48c-.119-.355-.343-1.191-.671-2.507h-.04c-.132.566-.343 1.402-.632 2.507l-1.106 3.475h3.574zM64.663 26.588c0 1.632-.443 2.922-1.33 3.869-.794.843-1.781 1.264-2.958 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.711-1.146 1.79-1.719 3.238-1.719 1.132 0 2.077.447 2.833 1.342.755.897 1.134 2.075 1.134 3.536zm-2.172.078c0-.934-.21-1.704-.632-2.311-.461-.631-1.08-.947-1.856-.947-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373a2.784 2.784 0 0 0-.099.649v1.601c0 .697.214 1.286.642 1.768.428.48.984.721 1.668.721.803 0 1.428-.311 1.875-.928.448-.619.672-1.435.672-2.449zM75.7 26.588c0 1.632-.443 2.922-1.33 3.869-.795.843-1.781 1.264-2.959 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.71-1.146 1.789-1.719 3.238-1.719 1.131 0 2.076.447 2.834 1.342.754.897 1.134 2.075 1.134 3.536zm-2.173.078c0-.934-.211-1.704-.633-2.311-.461-.631-1.078-.947-1.854-.947-.526 0-1.004.176-1.433.523-.428.35-.707.807-.838 1.373-.065.264-.1.479-.1.649v1.601c0 .697.215 1.286.641 1.768.428.479.984.721 1.67.721.804 0 1.429-.311 1.875-.928.448-.619.672-1.435.672-2.449zM88.04 27.771c0 1.133-.396 2.054-1.183 2.765-.866.776-2.075 1.165-3.625 1.165-1.432 0-2.58-.276-3.446-.829l.493-1.777c.935.554 1.962.83 3.08.83.804 0 1.429-.182 1.875-.543.447-.362.673-.846.673-1.45 0-.541-.187-.994-.554-1.363-.369-.368-.979-.711-1.836-1.026-2.33-.869-3.496-2.14-3.496-3.812 0-1.092.412-1.986 1.234-2.685.822-.698 1.912-1.047 3.268-1.047 1.211 0 2.22.211 3.021.632l-.535 1.738c-.754-.408-1.605-.612-2.557-.612-.752 0-1.342.185-1.764.553-.355.329-.535.73-.535 1.206 0 .525.205.961.613 1.303.354.315 1 .658 1.934 1.026 1.146.462 1.988 1 2.527 1.618.543.618.813 1.389.813 2.308zM95.107 23.508h-2.35v4.659c0 1.185.414 1.776 1.244 1.776.381 0 .697-.032.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.771-.473-.514-.711-1.375-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.604zM105.689 26.627c0 1.475-.422 2.686-1.264 3.633-.881.975-2.053 1.461-3.514 1.461-1.41 0-2.531-.467-3.367-1.4-.836-.935-1.254-2.113-1.254-3.534 0-1.487.432-2.705 1.293-3.652.863-.948 2.025-1.422 3.486-1.422 1.408 0 2.539.468 3.395 1.402.818.906 1.225 2.076 1.225 3.512zm-2.21.049c0-.879-.19-1.633-.571-2.264-.447-.762-1.087-1.143-1.916-1.143-.854 0-1.509.381-1.955 1.143-.382.631-.572 1.398-.572 2.304 0 .88.19 1.636.572 2.265.461.762 1.104 1.143 1.937 1.143.815 0 1.454-.389 1.916-1.162.392-.646.589-1.405.589-2.286zM112.622 23.783a3.71 3.71 0 0 0-.672-.059c-.75 0-1.33.282-1.738.85-.354.5-.532 1.132-.532 1.895v5.035h-2.132V24.93a67.43 67.43 0 0 0-.062-3.021h1.857l.078 1.836h.059c.226-.631.58-1.14 1.066-1.521a2.578 2.578 0 0 1 1.541-.514c.197 0 .375.014.533.039l.002 2.034zM122.157 26.252a5 5 0 0 1-.078.967h-6.396c.024.948.334 1.674.928 2.174.539.446 1.236.67 2.092.67.947 0 1.811-.15 2.588-.453l.334 1.479c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.312-.848-.875-1.273-2.051-1.273-3.524 0-1.446.395-2.651 1.186-3.612.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.813.846 1.821.846 3.018zm-2.033-.553c.015-.633-.125-1.178-.414-1.639-.369-.594-.937-.89-1.698-.89-.697 0-1.265.289-1.697.869-.355.461-.566 1.015-.631 1.658l4.44.002z"></path> </g> <g fill="#FFF"> <path d="M45.211 13.491c-.593 0-1.106-.029-1.533-.078V6.979a11.606 11.606 0 0 1 1.805-.136c2.445 0 3.571 1.203 3.571 3.164 0 2.262-1.33 3.484-3.843 3.484zm.358-5.823c-.33 0-.611.02-.844.068v4.891c.126.02.368.029.708.029 1.602 0 2.514-.912 2.514-2.62 0-1.523-.825-2.368-2.378-2.368zM52.563 13.54c-1.378 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.349-2.494 1.358 0 2.271.98 2.271 2.417 0 1.474-.941 2.503-2.349 2.503zm.04-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.495 1.679 1.232 1.679s1.232-.757 1.232-1.699c0-.96-.485-1.678-1.222-1.678zM62.77 8.717l-1.475 4.716h-.961l-.611-2.048a15.53 15.53 0 0 1-.379-1.523h-.02c-.077.514-.223 1.029-.378 1.523l-.65 2.048h-.971l-1.388-4.716h1.077l.534 2.242c.126.534.232 1.038.32 1.514h.02c.077-.397.203-.893.388-1.504l.67-2.251h.854l.641 2.203c.155.534.281 1.058.379 1.553h.028c.068-.485.175-1 .32-1.553l.573-2.203 1.029-.001zM68.2 13.433h-1.048v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.048.534-1.048 1.155v2.805h-1.048v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.282-.504.854-.824 1.495-.824.99 0 1.64.757 1.64 1.989l-.001 2.824zM71.09 13.433h-1.049v-6.88h1.049v6.88zM74.911 13.54c-1.377 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.941 2.503-2.348 2.503zm.039-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.496 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.001-.96-.483-1.678-1.221-1.678zM81.391 13.433l-.076-.543h-.028c-.32.437-.787.65-1.379.65-.845 0-1.445-.592-1.445-1.388 0-1.164 1.009-1.766 2.756-1.766v-.087c0-.621-.329-.932-.979-.932-.465 0-.873.117-1.232.35l-.213-.689c.436-.272.98-.408 1.619-.408 1.232 0 1.854.65 1.854 1.951v1.737c0 .476.021.845.068 1.126l-.945-.001zm-.144-2.349c-1.164 0-1.748.282-1.748.951 0 .495.301.737.719.737.533 0 1.029-.407 1.029-.96v-.728zM87.357 13.433l-.049-.757h-.029c-.301.572-.807.864-1.514.864-1.137 0-1.979-1-1.979-2.407 0-1.475.873-2.514 2.065-2.514.631 0 1.078.213 1.33.641h.021V6.553h1.049v5.609c0 .456.011.883.039 1.271h-.933zm-.155-2.775c0-.66-.437-1.223-1.104-1.223-.777 0-1.252.689-1.252 1.659 0 .951.493 1.602 1.231 1.602.659 0 1.125-.573 1.125-1.252v-.786zM94.902 13.54c-1.377 0-2.27-1.029-2.27-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.94 2.503-2.349 2.503zm.039-4.154c-.756 0-1.241.708-1.241 1.698 0 .971.495 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.002-.96-.483-1.678-1.222-1.678zM102.887 13.433h-1.049v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.047.534-1.047 1.155v2.805h-1.049v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.281-.504.854-.825 1.494-.825.99 0 1.641.757 1.641 1.989v2.825zM109.938 9.503h-1.153v2.29c0 .583.202.874.61.874.185 0 .34-.02.465-.049l.029.796c-.203.078-.475.117-.813.117-.826 0-1.32-.456-1.32-1.65V9.503h-.688v-.786h.688v-.864l1.029-.311v1.174h1.153v.787zM115.486 13.433h-1.047v-2.688c0-.844-.319-1.271-.951-1.271-.543 0-1.049.369-1.049 1.116v2.843h-1.047v-6.88h1.047v2.833h.021c.33-.514.808-.767 1.418-.767.998 0 1.608.776 1.608 2.009v2.805zM121.17 11.327h-3.145c.02.893.611 1.397 1.486 1.397.465 0 .893-.078 1.271-.223l.163.728c-.446.194-.971.291-1.582.291-1.475 0-2.348-.932-2.348-2.377 0-1.446.894-2.533 2.23-2.533 1.205 0 1.961.893 1.961 2.242a2.02 2.02 0 0 1-.036.475zm-.961-.747c0-.728-.367-1.242-1.037-1.242-.602 0-1.078.524-1.146 1.242h2.183z"></path> </g> </g> </g></svg>
            <span>App Store</span>
          </a>
          <a href="#" className="bg-slate-800 text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3">
            <svg width="102px" height="256px" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.76"></g><g id="SVGRepo_iconCarrier"> <path d="M629.816 562.299C541.126 473.91 530.44 493.685 632.812 410.289C742.674 488.691 763.349 464.421 629.816 562.299Z" fill="white"></path> <path d="M531.639 463.122C256.782 200.251 271.963 188.066 592.163 384.121C595.06 387.117 606.645 389.614 601.352 394.708C577.981 417.279 555.309 439.951 531.639 463.122Z" fill="white"></path> <path d="M338.578 701.226C398.004 635.209 463.722 573.985 525.345 509.666C530.239 504.672 532.136 504.572 536.83 509.366C558.603 531.438 580.376 553.611 602.149 575.783C536.431 633.71 436.656 681.351 346.868 703.124C343.172 702.225 340.875 701.725 338.578 701.226Z" fill="white"></path> <path d="M310.314 691.039C298.529 701.226 289.141 663.274 291.638 656.881C288.542 629.016 259.877 202.35 317.106 289.441C373.935 347.069 431.163 404.197 488.192 461.626C492.587 469.815 513.56 478.504 505.97 488.093C439.253 554.21 372.736 620.827 310.314 691.039Z" fill="white"></path> <path d="M592.163 384.121C271.963 188.066 256.782 200.251 531.639 463.123C555.309 439.952 577.881 417.28 601.351 394.708C606.645 389.515 595.059 387.018 592.163 384.121ZM602.15 575.782C580.378 553.709 558.605 531.437 536.832 509.365C532.138 504.571 530.24 504.771 525.346 509.664C463.723 573.984 398.006 635.208 338.58 701.225C340.877 701.724 343.174 702.224 346.869 703.023C436.657 681.35 536.432 633.61 602.15 575.782ZM632.812 410.289C530.44 493.684 541.127 473.909 629.816 562.299C763.349 464.421 742.675 488.691 632.812 410.289ZM317.107 289.44C259.878 202.349 288.542 628.915 291.639 656.88C289.242 663.272 298.63 701.225 310.315 691.038C372.737 620.825 439.154 554.209 505.971 488.191C513.561 478.503 492.587 469.914 488.193 461.724C431.164 404.296 373.936 347.068 317.107 289.44ZM593.062 873.31C214.335 904.371 55.234 834.458 88.7921 425.769C89.9906 245.095 135.034 90.1888 344.472 87.2924C773.436 57.7294 905.671 114.658 870.016 572.386C856.732 756.756 794.11 872.211 593.062 873.31Z" fill="#000000"></path> </g></svg>
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-surface py-10 border-t border-gray-200">
    <div className="container mx-auto px-6 text-center text-brand-text-secondary">
      <div className="flex justify-center items-center gap-2 mb-4">
        <PiggyBank className="text-brand-primary" size={24} />
        <span className="text-xl font-bold text-brand-text">Mayki</span>
      </div>
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-brand-primary"><Twitter /></a>
        <a href="#" className="hover:text-brand-primary"><Facebook /></a>
        <a href="#" className="hover:text-brand-primary"><Linkedin /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mayki. Todos los derechos reservados. Construyendo comunidad en Bolivia.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Education />
        <CompetitiveAdvantage />
        <Team />
        <Sponsors />
        <Market />
        <Download />
      </main>
      <Footer />
    </>
  )
}