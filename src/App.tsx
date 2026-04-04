import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BarChart3, FileText, Video, Database, MapPin,
  MessageCircle, Send, ChevronRight, Activity, Shield,
  TrendingUp, Target, Crosshair, ExternalLink
} from 'lucide-react';
import {
  ResponsiveContainer, BarChart, Bar
} from 'recharts';

// ─── CONFIG ────────────────────────────────────────────────────────────────
const CONFIG = {
  whatsapp: '34626849473',
  calendly: 'https://calendly.com/mario00/reunion-mm-talent-sports',
  email: 'mariomtnzscout@gmail.com',
};
// ───────────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Informe Individual",
    price: "45€",
    icon: <FileText className="w-8 h-8 text-[#d4a853]" />,
    description: "Análisis detallado de un jugador con métricas clave y evaluación táctica."
  },
  {
    title: "CV Premium",
    price: "60€",
    icon: <Activity className="w-8 h-8 text-[#d4a853]" />,
    description: "Diseño profesional de currículum deportivo destacando estadísticas y logros."
  },
  {
    title: "Videoanálisis Pack",
    price: "120€",
    icon: <Video className="w-8 h-8 text-[#7c3aed]" />,
    description: "Cortes de video tácticos. Extras: Videocurrículum (+80€), Clips RRSS (+50€)."
  },
  {
    title: "Dashboard PowerBI",
    price: "250€",
    icon: <BarChart3 className="w-8 h-8 text-[#d4a853]" />,
    description: "Visualización interactiva con Web Scraping oficial de actas federativas."
  },
  {
    title: "Scout Presencial",
    price: "75€/partido",
    icon: <MapPin className="w-8 h-8 text-[#d4a853]" />,
    description: "Cobertura en Andalucía Oeste, Murcia y Sur de Valencia. Informes en vivo."
  },
  {
    title: "Consultoría Continua",
    price: "600€/mes",
    icon: <Shield className="w-8 h-8 text-[#7c3aed]" />,
    description: "Servicio integral: scouting, análisis de rivales y consultoría de datos continua."
  }
];

const premiumPackages = [
  {
    title: "Pack Jugador Pro",
    price: "195€",
    originalPrice: "225€",
    description: "El kit completo para destacar en el mercado de fichajes.",
    features: ["Informe Individual Detallado", "CV Deportivo Premium", "Videoanálisis Táctico"],
    color: "indigo"
  },
  {
    title: "Pack Agencia / Club",
    price: "A consultar",
    originalPrice: "",
    description: "Control total sobre el rendimiento y captación de talento.",
    features: ["Dashboard PowerBI Personalizado", "Scouting Presencial Mensual", "Consultoría Continua"],
    color: "violet"
  }
];

const BrandLogo = () => (
  <div className="group-hover:scale-105 transition-transform duration-300">
    <img src="/logo-volea-icon.png" alt="Volea" height={56} style={{ height: '56px', width: 'auto' }} />
  </div>
);

const FIFACard = () => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 10 }}
    className="relative w-72 h-[420px] rounded-3xl p-4 flex flex-col items-center justify-between shadow-2xl overflow-hidden bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 border-2 border-yellow-300 mx-auto"
  >
    <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
    ></div>

    <div className="relative z-10 flex w-full justify-between items-start px-2 pt-2">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-black text-slate-900 tracking-tighter">88</span>
        <span className="text-lg font-bold text-slate-800 -mt-1">MC</span>
      </div>
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
        <span className="font-bold text-sm">ESP</span>
      </div>
    </div>

    <div className="relative z-10 w-40 h-40 rounded-full border-4 border-white/50 overflow-hidden shadow-lg mb-2 bg-white">
      <img src="https://picsum.photos/seed/pedroluna/200/200" alt="Pedro Luna" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>

    <div className="relative z-10 text-center w-full">
      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-wider mb-1">Luna</h3>
      <div className="h-px w-full bg-slate-900/20 my-2"></div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm font-bold text-slate-800 px-4">
        <div className="flex justify-between"><span>82</span> <span className="opacity-70">PAC</span></div>
        <div className="flex justify-between"><span>89</span> <span className="opacity-70">DRI</span></div>
        <div className="flex justify-between"><span>78</span> <span className="opacity-70">SHO</span></div>
        <div className="flex justify-between"><span>65</span> <span className="opacity-70">DEF</span></div>
        <div className="flex justify-between"><span>91</span> <span className="opacity-70">PAS</span></div>
        <div className="flex justify-between"><span>72</span> <span className="opacity-70">PHY</span></div>
      </div>
    </div>
  </motion.div>
);

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={CONFIG.calendly}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

type FormState = 'idle' | 'sending' | 'success' | 'error';

function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Informe Individual', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setFormState('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          servicio: form.service,
          mensaje: form.message,
          _subject: `Nuevo contacto Volea Talent Sport - ${form.service}`,
        }),
      });
      if (res.ok) {
        setFormState('success');
        setForm({ name: '', email: '', service: 'Informe Individual', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen mesh-bg font-sans selection:bg-[#d4a853]/20 selection:text-slate-900">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <BrandLogo />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                VOLEA TALENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#7c3aed]">SPORT</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-slate-500 font-bold uppercase mt-1">
                TALENT SPORT
              </span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#portfolio" className="hover:text-[#d4a853] transition-colors">Análisis</a>
            <a href="#servicios" className="hover:text-[#d4a853] transition-colors">Servicios</a>
            <a href="#powerbi" className="hover:text-[#d4a853] transition-colors">PowerBI</a>
            <Link to="/ecosistema" className="hover:text-[#d4a853] transition-colors">Plataforma</Link>
            <a href="#contacto" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-[#d4a853] hover:text-slate-900 transition-colors">Contactar</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 cursor-default"
            >
              SCOUTING & <br />
              <span className="text-gradient">ANÁLISIS DE ÉLITE.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
              Identificamos, analizamos y potenciamos el talento deportivo para llevar tu rendimiento al siguiente nivel.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicios"
                className="bg-[#d4a853] text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b8923e] transition-all shadow-lg shadow-[#d4a853]/30 flex items-center gap-2"
              >
                Ver Servicios <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel px-8 py-4 rounded-full font-bold text-lg text-slate-800 hover:bg-white/80 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Plataformas CTA */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel-dark rounded-[3rem] p-16 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/10 via-transparent to-[#7c3aed]/10 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                NUESTRAS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#7c3aed]">PLATAFORMAS.</span>
              </h2>
              <p className="text-xl text-slate-300 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                Herramientas profesionales para el fútbol base y el scouting de élite.
              </p>
              <Link
                to="/ecosistema"
                className="inline-flex items-center gap-2 bg-[#d4a853] text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b8923e] transition-all shadow-lg shadow-black/40"
              >
                Explorar plataformas <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Galería de Análisis</h2>
            <p className="text-xl text-slate-600">Ejemplos de nuestros informes y visualizaciones premium.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Informes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-3xl p-8 flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Informes</h3>
                  <p className="text-slate-500 font-medium">Análisis de Rendimiento y Scouting</p>
                </div>
                <div className="bg-[#7c3aed]/10 text-[#7c3aed] px-3 py-1 rounded-full text-sm font-bold">
                  Scouting
                </div>
              </div>
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/marius-afk-code/mm-talent-sport/main/informe-kees-smit.png"
                  alt="Ejemplo de Informe"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Pedro Luna CV */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"
            >
              <div className="w-full flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">CV Deportivo Personalizado</h3>
                  <p className="text-slate-500 font-medium">Diseño Premium Gamificado</p>
                </div>
                <div className="bg-[#d4a853]/15 text-[#b8923e] px-3 py-1 rounded-full text-sm font-bold">
                  Premium
                </div>
              </div>
              <FIFACard />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicios" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Soluciones adaptadas a jugadores, agencias y clubes que buscan una ventaja competitiva real.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="service-glass rounded-3xl p-8 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <div className="text-2xl font-black text-[#d4a853] mb-4">{service.price}</div>
                <p className="text-slate-600 font-medium leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Paquetes Premium */}
        <section id="paquetes" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Paquetes Premium</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Combina nuestros servicios para obtener una solución integral con condiciones exclusivas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {premiumPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="premium-glass rounded-[2.5rem] p-10 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 ${pkg.color === 'indigo' ? 'bg-[#d4a853]/10' : 'bg-[#7c3aed]/10'}`}></div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 relative z-10">{pkg.title}</h3>
                <p className="text-slate-600 font-medium mb-6 relative z-10">{pkg.description}</p>
                <div className="flex items-baseline gap-3 mb-8 relative z-10">
                  <span className="text-5xl font-black text-[#d4a853] tracking-tighter">{pkg.price}</span>
                  {pkg.originalPrice && <span className="text-xl text-slate-400 line-through font-bold">{pkg.originalPrice}</span>}
                </div>
                <ul className="space-y-4 mb-10 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                      <div className="w-6 h-6 rounded-full bg-[#d4a853]/15 flex items-center justify-center text-[#d4a853] shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="block w-full text-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#d4a853] hover:text-slate-900 transition-colors shadow-lg relative z-10">
                  Solicitar Paquete
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PowerBI Section */}
        <section id="powerbi" className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-500/30">
                  <Database className="w-4 h-4" /> Web Scraping Oficial
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Dashboards PowerBI desde División de Honor
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Extraemos datos directamente de las actas federativas oficiales mediante técnicas avanzadas de Web Scraping.
                  Ideal para clubes de 1ª RFEF, 2ª RFEF, 3ª RFEF y División de Honor.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Crosshair className="w-4 h-4" /></div>
                    Datos 100% oficiales y verificados.
                  </li>
                  <li className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><TrendingUp className="w-4 h-4" /></div>
                    Comparativas de rendimiento por posición.
                  </li>
                  <li className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><BarChart3 className="w-4 h-4" /></div>
                    Filtros interactivos y exportación de informes.
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-8 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 p-4 flex gap-4">
                    <div className="w-1/3 flex flex-col gap-4">
                      <div className="h-24 bg-blue-600/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-blue-400 opacity-50" />
                      </div>
                      <div className="flex-1 bg-slate-700/50 rounded-xl border border-slate-600"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex-1 bg-slate-700/50 rounded-xl border border-slate-600 p-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={[
                            { name: 'J1', val: 40 }, { name: 'J2', val: 30 }, { name: 'J3', val: 60 },
                            { name: 'J4', val: 45 }, { name: 'J5', val: 70 }, { name: 'J6', val: 85 }
                          ]}>
                            <Bar dataKey="val" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="h-32 bg-[#d4a853]/10 rounded-xl border border-[#d4a853]/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">¿Listo para dar el salto?</h2>
          <p className="text-xl text-slate-600 mb-8">Contacta y descubre cómo los datos pueden transformar tu carrera deportiva.</p>

          <div className="glass-panel p-8 rounded-3xl flex flex-col gap-4 text-left mb-16">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-[#d4a853]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a853] transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-[#d4a853]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a853] transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de interés</label>
              <select
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-[#d4a853]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a853] transition-all duration-300"
              >
                <option>Informe Individual</option>
                <option>CV Premium</option>
                <option>Videoanálisis Pack</option>
                <option>Dashboard PowerBI</option>
                <option>Scout Presencial</option>
                <option>Consultoría Continua</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-[#d4a853]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a853] transition-all duration-300"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            {formState === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl font-semibold">
                ✅ ¡Mensaje enviado! Te responderé en menos de 24 horas.
              </div>
            )}
            {formState === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl font-semibold">
                ❌ Error al enviar. Por favor, escríbeme directamente a {CONFIG.email}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={formState === 'sending'}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4a853] hover:text-slate-900 hover:shadow-lg hover:shadow-[#d4a853]/30 hover:-translate-y-1 transition-all duration-300 mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === 'sending' ? 'Enviando...' : (<>Enviar Mensaje <Send className="w-5 h-5" /></>)}
            </button>
          </div>

          {/* Calendly */}
          <div className="pt-16 border-t border-slate-200/50">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">¿Prefieres hablar directamente?</h3>
            <p className="text-lg text-slate-600 mb-8">Reserva una videollamada de 15 minutos para analizar tu caso sin compromiso.</p>
            <div className="glass-panel rounded-3xl overflow-hidden w-full shadow-xl relative bg-white/50">
              <CalendlyWidget />
            </div>
          </div>
        </section>

      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 py-12 text-center text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Volea Talent Sport. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function EcosistemaPage() {
  return (
    <div className="min-h-screen mesh-bg font-sans selection:bg-[#d4a853]/20 selection:text-slate-900">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <BrandLogo />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                VOLEA TALENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#7c3aed]">SPORT</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-slate-500 font-bold uppercase mt-1">
                TALENT SPORT
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <Link to="/#portfolio" className="hover:text-[#d4a853] transition-colors">Análisis</Link>
            <Link to="/#servicios" className="hover:text-[#d4a853] transition-colors">Servicios</Link>
            <Link to="/#powerbi" className="hover:text-[#d4a853] transition-colors">PowerBI</Link>
            <Link to="/ecosistema" className="text-[#d4a853] transition-colors">Plataforma</Link>
            <Link to="/#contacto" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-[#d4a853] hover:text-slate-900 transition-colors">Contactar</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
              NUESTRAS <br />
              <span className="text-gradient">PLATAFORMAS.</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              Herramientas profesionales para el fútbol base y el scouting de élite.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Volea Scouting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="service-glass rounded-3xl p-10 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                  <Target className="w-7 h-7 text-[#7c3aed]" />
                </div>
                <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full border border-green-200">
                  Activo
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">Volea Scouting</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Plataforma profesional de scouting de fútbol. Gestiona jugadores, registra partidos y genera informes profesionales.
                </p>
              </div>
              <a
                href="https://voleascouting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 bg-[#7c3aed] text-white px-6 py-3.5 rounded-2xl font-bold text-base hover:bg-[#6d28d9] transition-all shadow-lg shadow-[#7c3aed]/20"
              >
                Acceder <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Volea Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="service-glass rounded-3xl p-10 flex flex-col gap-6 opacity-80"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-7 h-7 text-[#22d3ee]" />
                </div>
                <span className="bg-orange-100 text-orange-700 text-sm font-bold px-3 py-1 rounded-full border border-orange-200">
                  En desarrollo
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">Volea Training</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Planificación de entrenamientos asistida por IA para entrenadores de fútbol base.
                </p>
              </div>
              <button
                disabled
                className="mt-auto flex items-center justify-center gap-2 bg-slate-200 text-slate-400 px-6 py-3.5 rounded-2xl font-bold text-base cursor-not-allowed"
              >
                Próximamente
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 py-12 text-center text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Volea Talent Sport. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ecosistema" element={<EcosistemaPage />} />
    </Routes>
  );
}
