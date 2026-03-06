import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, FileText, Video, Database, MapPin, 
  MessageCircle, Send, ChevronRight, Activity, Shield,
  TrendingUp, Target, Crosshair
} from 'lucide-react';
import { 
  ResponsiveContainer, BarChart, Bar
} from 'recharts';

const services = [
  {
    title: "Informe Individual",
    price: "45€",
    icon: <filetext classname="w-8 h-8 text-blue-600"/>,
    description: "Análisis detallado de un jugador con métricas clave y evaluación táctica."
  },
  {
    title: "CV Premium",
    price: "60€",
    icon: <activity classname="w-8 h-8 text-indigo-600"/>,
    description: "Diseño profesional de currículum deportivo destacando estadísticas y logros."
  },
  {
    title: "Videoanálisis Pack",
    price: "120€",
    icon: <video classname="w-8 h-8 text-violet-600"/>,
    description: "Cortes de video tácticos. Extras: Videocurrículum (+80€), Clips RRSS (+50€)."
  },
  {
    title: "Dashboard PowerBI",
    price: "250€",
    icon: <barchart3 classname="w-8 h-8 text-blue-500"/>,
    description: "Visualización interactiva con Web Scraping oficial de actas federativas."
  },
  {
    title: "Scout Presencial",
    price: "75€/partido",
    icon: <mappin classname="w-8 h-8 text-indigo-500"/>,
    description: "Cobertura en Andalucía Oriental, Murcia y Sur de la Comunidad Valenciana. Informes en vivo."
  },
  {
    title: "Consultoría Continua",
    price: "600€/mes",
    icon: <shield classname="w-8 h-8 text-violet-500"/>,
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
  <div classname="relative group-hover:scale-105 transition-transform duration-300">
    <div classname="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
    <svg width="42" height="42" viewbox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" classname="relative shadow-xl rounded-xl">
      <rect width="42" height="42" rx="12" fill="url(#logo-bg)"/>
      {/* Primer 'M' - Representa la base de datos/scouting */}
      <path d="M10 28V14L16 21L22 14V28" stroke="white" strokewidth="2.5" strokelinecap="round" strokelinejoin="round"/>
      {/* Segundo 'M' - Representa el análisis/crecimiento */}
      <path d="M19 28V14L25 21L31 14V28" stroke="rgba(255,255,255,0.4)" strokewidth="2.5" strokelinecap="round" strokelinejoin="round"/>
      {/* Punto de Talento / Objetivo */}
      <circle cx="31" cy="14" r="3" fill="#38BDF8" classname="animate-pulse"/>
      <defs>
        <lineargradient id="logo-bg" x1="0" y1="0" x2="42" y2="42" gradientunits="userSpaceOnUse">
          <stop stopcolor="#0F172A"/>
          <stop offset="1" stopcolor="#312E81"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const FIFACard = () => (
  <motion.div whilehover="{{" scale:="" 1.05,="" rotatey:="" 10="" }}="" classname="relative w-72 h-[420px] rounded-3xl p-4 flex flex-col items-center justify-between shadow-2xl overflow-hidden bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 border-2 border-yellow-300 mx-auto">
    <div classname="absolute top-0 left-0 w-full h-full bg-[url(&#39;https://www.transparenttextures.com/patterns/cubes.png&#39;)] opacity-20 mix-blend-overlay"></div>
    
    <div classname="relative z-10 flex w-full justify-between items-start px-2 pt-2">
      <div classname="flex flex-col items-center">
        <span classname="text-5xl font-black text-slate-900 tracking-tighter">88</span>
        <span classname="text-lg font-bold text-slate-800 -mt-1">MC</span>
      </div>
      <div classname="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
        <span classname="font-bold text-sm">ESP</span>
      </div>
    </div>
    
    <div classname="relative z-10 w-40 h-40 rounded-full border-4 border-white/50 overflow-hidden shadow-lg mb-2 bg-white">
      <img src="https://picsum.photos/seed/pedroluna/200/200" alt="Pedro Luna" classname="w-full h-full object-cover" referrerpolicy="no-referrer"/>
    </div>
    
    <div classname="relative z-10 text-center w-full">
      <h3 classname="text-3xl font-black text-slate-900 uppercase tracking-wider mb-1">Luna</h3>
      <div classname="h-px w-full bg-slate-900/20 my-2"></div>
      <div classname="grid grid-cols-2 gap-x-6 gap-y-1 text-sm font-bold text-slate-800 px-4">
        <div classname="flex justify-between"><span>82</span> <span classname="opacity-70">PAC</span></div>
        <div classname="flex justify-between"><span>89</span> <span classname="opacity-70">DRI</span></div>
        <div classname="flex justify-between"><span>78</span> <span classname="opacity-70">SHO</span></div>
        <div classname="flex justify-between"><span>65</span> <span classname="opacity-70">DEF</span></div>
        <div classname="flex justify-between"><span>91</span> <span classname="opacity-70">PAS</span></div>
        <div classname="flex justify-between"><span>72</span> <span classname="opacity-70">PHY</span></div>
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div classname="calendly-inline-widget w-full" data-url="https://calendly.com/mario00/reunion-mm-talent-sports" style="{{" minwidth:="" '320px',="" height:="" '700px'="" }}=""/>
  );
};

export default function App() {
  return (
    <div classname="min-h-screen mesh-bg font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* Navbar */}
      <nav classname="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/20">
        <div classname="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" classname="flex items-center gap-3 group">
            <brandlogo/>
            <div classname="flex flex-col leading-none">
              <span classname="text-2xl font-black tracking-tighter text-slate-900">
                MM TALENT <span classname="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">SPORT</span>
              </span>
              <span classname="text-[0.65rem] tracking-[0.2em] text-slate-500 font-bold uppercase mt-1">
                Scouting & Analytics
              </span>
            </div>
          </a>
          <div classname="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#portfolio" classname="hover:text-indigo-600 transition-colors">Análisis</a>
            <a href="#servicios" classname="hover:text-indigo-600 transition-colors">Servicios</a>
            <a href="#powerbi" classname="hover:text-indigo-600 transition-colors">PowerBI</a>
            <a href="#contacto" classname="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-600 transition-colors">Contactar</a>
          </div>
        </div>
      </nav>

      <main classname="pt-32 pb-24">
        {/* Hero Section */}
        <section classname="max-w-7xl mx-auto px-6 mb-32">
          <motion.div initial="{{" opacity:="" 0,="" y:="" 30="" }}="" animate="{{" opacity:="" 1,="" y:="" 0="" }}="" transition="{{" duration:="" 0.8="" }}="" classname="max-w-4xl">
            <motion.h1 whilehover="{{" scale:="" 1.02="" }}="" transition="{{" type:="" "spring",="" stiffness:="" 300="" }}="" classname="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 cursor-default">
              SCOUTING & <br/>
              <span classname="text-gradient">ANÁLISIS DE ÉLITE.</span>
            </motion.h1>
            <p classname="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
              Identificamos, analizamos y potenciamos el talento deportivo para llevar tu rendimiento al siguiente nivel.
            </p>
            <div classname="flex flex-wrap gap-4">
              <motion.a whilehover="{{" scale:="" 1.05="" }}="" whiletap="{{" scale:="" 0.95="" }}="" href="#servicios" classname="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                Ver Servicios <chevronright classname="w-5 h-5"/>
              </motion.a>
              <motion.a whilehover="{{" scale:="" 1.05="" }}="" whiletap="{{" scale:="" 0.95="" }}="" href="#portfolio" classname="glass-panel px-8 py-4 rounded-full font-bold text-lg text-slate-800 hover:bg-white/80 transition-all flex items-center gap-2">
                Galería de Análisis
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" classname="max-w-7xl mx-auto px-6 mb-32">
          <div classname="mb-16">
            <h2 classname="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Galería de Análisis</h2>
            <p classname="text-xl text-slate-600">Ejemplos de nuestros informes y visualizaciones premium.</p>
          </div>

          <div classname="grid md:grid-cols-2 gap-8">
            {/* Informes */}
            <motion.div initial="{{" opacity:="" 0,="" x:="" -30="" }}="" whileinview="{{" opacity:="" 1,="" x:="" 0="" }}="" viewport="{{" once:="" true="" }}="" whilehover="{{" scale:="" 1.02="" }}="" transition="{{" duration:="" 0.3="" }}="" classname="glass-panel rounded-3xl p-8 flex flex-col cursor-pointer">
              <div classname="flex justify-between items-start mb-8">
                <div>
                  <h3 classname="text-2xl font-black text-slate-900 mb-1">Informes</h3>
                  <p classname="text-slate-500 font-medium">Análisis de Rendimiento y Scouting</p>
                </div>
                <div classname="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                  Scouting
                </div>
              </div>
              
              <div classname="flex-1 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex items-center justify-center">
                <img src="https://storage.googleapis.com/aistudio-user-assets/informe-kees-smit.jpg" alt="Ejemplo de Informe" classname="w-full h-full object-cover" onerror="{(e)" ==""> {
                    e.currentTarget.src = "https://placehold.co/800x450/e2e8f0/475569?text=Imagen+del+Informe+Kees+Smit";
                  }}
                />
              </div>
            </motion.div>

            {/* Pedro Luna CV */}
            <motion.div initial="{{" opacity:="" 0,="" x:="" 30="" }}="" whileinview="{{" opacity:="" 1,="" x:="" 0="" }}="" viewport="{{" once:="" true="" }}="" classname="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
              <div classname="w-full flex justify-between items-start mb-8">
                <div>
                  <h3 classname="text-2xl font-black text-slate-900 mb-1">CV Deportivo Pedro Luna</h3>
                  <p classname="text-slate-500 font-medium">Diseño Premium Gamificado</p>
                </div>
                <div classname="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">
                  Premium
                </div>
              </div>
              
              <fifacard/>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicios" classname="max-w-7xl mx-auto px-6 mb-32">
          <div classname="mb-16 text-center">
            <h2 classname="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Nuestros Servicios</h2>
            <p classname="text-xl text-slate-600 max-w-2xl mx-auto">Soluciones adaptadas a jugadores, agencias y clubes que buscan una ventaja competitiva real.</p>
          </div>

          <div classname="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key="{index}" initial="{{" opacity:="" 0,="" y:="" 20="" }}="" whileinview="{{" opacity:="" 1,="" y:="" 0="" }}="" whilehover="{{" y:="" -10,="" scale:="" 1.02="" }}="" viewport="{{" once:="" true="" }}="" transition="{{" delay:="" index="" *="" 0.1,="" duration:="" 0.3="" }}="" classname="service-glass rounded-3xl p-8 group cursor-pointer">
                <div classname="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-white transition-all">
                  {service.icon}
                </div>
                <h3 classname="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <div classname="text-2xl font-black text-indigo-600 mb-4">{service.price}</div>
                <p classname="text-slate-600 font-medium leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Paquetes Premium */}
        <section id="paquetes" classname="max-w-7xl mx-auto px-6 mb-32">
          <div classname="mb-16 text-center">
            <h2 classname="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Paquetes Premium</h2>
            <p classname="text-xl text-slate-600 max-w-2xl mx-auto">Combina nuestros servicios para obtener una solución integral con condiciones exclusivas.</p>
          </div>
          <div classname="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {premiumPackages.map((pkg, index) => (
              <motion.div key="{index}" initial="{{" opacity:="" 0,="" scale:="" 0.95="" }}="" whileinview="{{" opacity:="" 1,="" scale:="" 1="" }}="" whilehover="{{" y:="" -10="" }}="" viewport="{{" once:="" true="" }}="" transition="{{" duration:="" 0.4="" }}="" classname="premium-glass rounded-[2.5rem] p-10 relative overflow-hidden group">
                <div classname="{`absolute" top-0="" right-0="" w-48="" h-48="" bg-${pkg.color}-500="" 10="" rounded-full="" blur-3xl="" -mr-10="" -mt-10="" transition-transform="" group-hover:scale-150`}=""></div>
                <h3 classname="text-3xl font-black text-slate-900 mb-2 relative z-10">{pkg.title}</h3>
                <p classname="text-slate-600 font-medium mb-6 relative z-10">{pkg.description}</p>
                <div classname="flex items-baseline gap-3 mb-8 relative z-10">
                  <span classname="text-5xl font-black text-indigo-600 tracking-tighter">{pkg.price}</span>
                  {pkg.originalPrice && <span classname="text-xl text-slate-400 line-through font-bold">{pkg.originalPrice}</span>}
                </div>
                <ul classname="space-y-4 mb-10 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <li key="{i}" classname="flex items-center gap-3 text-slate-700 font-semibold">
                      <div classname="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <target classname="w-4 h-4"/>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" classname="block w-full text-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-colors shadow-lg relative z-10">
                  Solicitar Paquete
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PowerBI Section */}
        <section id="powerbi" classname="max-w-7xl mx-auto px-6 mb-32">
          <motion.div initial="{{" opacity:="" 0,="" y:="" 30="" }}="" whileinview="{{" opacity:="" 1,="" y:="" 0="" }}="" viewport="{{" once:="" true="" }}="" classname="glass-panel-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div classname="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
            
            <div classname="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div classname="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-500/30">
                  <database classname="w-4 h-4"/> Web Scraping Oficial
                </div>
                <h2 classname="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Dashboards PowerBI desde División de Honor
                </h2>
                <p classname="text-slate-300 text-lg mb-8 leading-relaxed">
                  Extraemos datos directamente de las actas federativas oficiales mediante técnicas avanzadas de Web Scraping. 
                  Ideal para clubes de 1ª RFEF, 2ª RFEF, 3ª RFEF y División de Honor. Compara el rendimiento de tu equipo o jugadores frente a toda la liga con visualizaciones interactivas y precisas.
                </p>
                <ul classname="space-y-4 mb-8">
                  <li classname="flex items-center gap-3 text-slate-200 font-medium">
                    <div classname="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><crosshair classname="w-4 h-4"/></div>
                    Datos 100% oficiales y verificados.
                  </li>
                  <li classname="flex items-center gap-3 text-slate-200 font-medium">
                    <div classname="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><trendingup classname="w-4 h-4"/></div>
                    Comparativas de rendimiento por posición.
                  </li>
                  <li classname="flex items-center gap-3 text-slate-200 font-medium">
                    <div classname="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><barchart3 classname="w-4 h-4"/></div>
                    Filtros interactivos y exportación de informes.
                  </li>
                </ul>
              </div>
              
              <div classname="relative">
                <div classname="aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <div classname="h-8 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                    <div classname="w-3 h-3 rounded-full bg-red-500"></div>
                    <div classname="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div classname="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div classname="flex-1 p-4 flex gap-4">
                    <div classname="w-1/3 flex flex-col gap-4">
                      <div classname="h-24 bg-blue-600/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                        <barchart3 classname="w-8 h-8 text-blue-400 opacity-50"/>
                      </div>
                      <div classname="flex-1 bg-slate-700/50 rounded-xl border border-slate-600"></div>
                    </div>
                    <div classname="flex-1 flex flex-col gap-4">
                      <div classname="flex-1 bg-slate-700/50 rounded-xl border border-slate-600 p-4">
                        <responsivecontainer width="100%" height="100%">
                          <barchart data="{[" {="" name:="" 'j1',="" val:="" 40="" },="" {="" name:="" 'j2',="" val:="" 30="" },="" {="" name:="" 'j3',="" val:="" 60="" },="" {="" name:="" 'j4',="" val:="" 45="" },="" {="" name:="" 'j5',="" val:="" 70="" },="" {="" name:="" 'j6',="" val:="" 85="" }="" ]}="">
                            <bar datakey="val" fill="#3b82f6" radius="{[4," 4,="" 0,="" 0]}=""/>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div classname="h-32 bg-indigo-600/20 rounded-xl border border-indigo-500/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contacto" classname="max-w-3xl mx-auto px-6 text-center">
          <h2 classname="text-4xl font-black text-slate-900 tracking-tight mb-4">¿Listo para dar el salto?</h2>
          <p classname="text-xl text-slate-600 mb-8">Contacta con nosotros y descubre cómo los datos pueden transformar tu carrera deportiva.</p>
          
          <form classname="glass-panel p-8 rounded-3xl flex flex-col gap-4 text-left mb-16">
            <div classname="grid md:grid-cols-2 gap-4">
              <div>
                <label classname="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                <input type="text" classname="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-indigo-300 hover:shadow-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" placeholder="Tu nombre"/>
              </div>
              <div>
                <label classname="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input type="email" classname="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-indigo-300 hover:shadow-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" placeholder="tu@email.com"/>
              </div>
            </div>
            <div>
              <label classname="block text-sm font-bold text-slate-700 mb-2">Servicio de interés</label>
              <select classname="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-indigo-300 hover:shadow-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300">
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
              <label classname="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
              <textarea rows="{4}" classname="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 hover:bg-white/80 hover:border-indigo-300 hover:shadow-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
            </div>
            <button type="button" classname="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 mt-4 flex items-center justify-center gap-2">
              Enviar Mensaje <send classname="w-5 h-5"/>
            </button>
          </form>

          {/* Calendly Section */}
          <div classname="pt-16 border-t border-slate-200/50">
            <h3 classname="text-3xl font-black text-slate-900 tracking-tight mb-4">¿Prefieres hablar directamente?</h3>
            <p classname="text-lg text-slate-600 mb-8">Reserva una videollamada de 15 minutos para analizar tu caso sin compromiso.</p>
            
            <div classname="glass-panel rounded-3xl overflow-hidden w-full shadow-xl relative bg-white/50">
              <calendlywidget/>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" classname="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center">
        <messagecircle classname="w-8 h-8"/>
      </a>

      {/* Footer */}
      <footer classname="border-t border-slate-200/50 py-12 text-center text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} MM Talent Sport. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
