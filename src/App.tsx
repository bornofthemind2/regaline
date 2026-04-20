import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  Triangle, 
  Hexagon, 
  CheckCircle,
  Flame,
  Droplets,
  Star,
  MapPin,
  Menu,
  X,
  ChevronRight,
  PhoneCall,
  Leaf,
  Trees,
  Square,
  Compass
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-300 selection:bg-illuminati-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative w-12 h-12 text-illuminati-gold flex items-center justify-center">
                <Triangle size={36} className="absolute stroke-1 transition-transform duration-700 group-hover:rotate-180" />
                <Eye size={16} className="relative z-10 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white heading-serif">REGALLINE</h1>
                <p className="text-[9px] uppercase font-bold text-illuminati-gold tracking-[0.3em] font-sans">Solutions</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('principles')} className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-400 hover:text-illuminati-gold transition-colors">The Order</button>
              <button onClick={() => scrollToSection('services')} className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-400 hover:text-illuminati-gold transition-colors">Crafts</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-400 hover:text-illuminati-gold transition-colors">Initiates</button>
              <div className="ml-4 flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="relative overflow-hidden group bg-transparent text-illuminati-gold px-6 py-2 border border-illuminati-gold/50 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:text-void transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <span className="relative z-10">Summon Us</span>
                  <div className="absolute inset-0 h-full w-full bg-illuminati-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4 text-illuminati-gold">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:text-white p-2 transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} className="stroke-1" /> : <Menu size={28} className="stroke-1" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-obsidian border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6 flex flex-col">
                <button onClick={() => scrollToSection('principles')} className="text-left text-sm tracking-[0.2em] uppercase text-stone-300 py-2">The Order</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-sm tracking-[0.2em] uppercase text-stone-300 py-2">Crafts</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-sm tracking-[0.2em] uppercase text-stone-300 py-2">Initiates</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-illuminati-gold text-void w-full py-4 uppercase tracking-[0.2em] font-bold text-xs mt-6"
                >
                  Summon Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-void">
        <HeroSection onSchedule={() => scrollToSection('contact')} />
        <PrinciplesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Eye size={400} className="stroke-1 text-illuminati-gold" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Triangle size={20} className="text-illuminati-gold stroke-1" />
              <div>
                <h3 className="text-lg font-bold tracking-[0.2em] text-white heading-serif">REGALLINE</h3>
              </div>
            </div>
            <p className="text-stone-500 text-xs tracking-wide max-w-xs leading-loose uppercase">
              Architecting perfection for Alexandria's elite. The hidden hand guiding the dimensions of your commercial and residential estates.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6 heading-serif text-illuminati-gold uppercase tracking-[0.2em]">The Coordinates</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase text-stone-400">
              <li className="flex items-center gap-4">
                <PhoneCall size={14} className="text-illuminati-gold" />
                <span>202 425 8308</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={14} className="text-illuminati-gold" />
                <span>Alexandria Sanctuary, VA</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-6 heading-serif text-illuminati-gold uppercase tracking-[0.2em]">Hidden Decrees</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase text-stone-500">
              <li><button className="hover:text-illuminati-gold transition-colors">The Emerald Path</button></li>
              <li><button className="hover:text-illuminati-gold transition-colors">Pact of Secrecy</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center text-[10px] tracking-[0.3em] uppercase text-stone-600 relative z-10">
          © {new Date().getFullYear()} REGALLINE SOLUTIONS. NOVUS ORDO SECLORUM.
        </div>
      </footer>
    </div>
  );
}

// --- Sections ---

function HeroSection({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section id="home" className="relative bg-void overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          alt="Luxury outdoor landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/50 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 w-full flex flex-col items-center text-center mt-12">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-illuminati-gold blur-[100px] opacity-10 rounded-full" />
          <Hexagon size={64} className="text-illuminati-gold stroke-1 relative z-10" />
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-illuminati-gold border border-illuminati-gold/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
            <MapPin size={10} />
            <span>Serving Alexandria, VA</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 heading-serif leading-tight text-white px-4">
            Mastery over your <br/>
            <span className="text-illuminati-gold italic">terrain.</span>
          </h1>
          <p className="text-sm md:text-base text-stone-400 mb-12 max-w-xl font-light leading-loose tracking-widest uppercase">
            The hidden hand of landscape architecture. Hardscaping, environmental solutions, and elite lifestyle features controlled entirely by geometry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <button 
              onClick={onSchedule}
              className="bg-illuminati-gold text-void px-10 py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
            >
              Initiate Request <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  const principles = [
    { icon: <Square size={32} />, title: "Hardscaping", desc: "Decks, fences, retaining walls, driveways, and patios constructed with cosmic precision." },
    { icon: <Leaf size={32} />, title: "Environmental", desc: "Drainage systems and sustainable, edible gardens that respect the natural order of elements." },
    { icon: <Flame size={32} />, title: "Lifestyle Features", desc: "Outdoor kitchens, esoteric yard ponds, fireplaces, and lighting that illuminate the dark." },
    { icon: <Trees size={32} />, title: "Specialty Turf", desc: "Synthetic lawns, putting greens, and flawless play spaces defying worldly decay." }
  ];

  return (
    <section id="principles" className="py-32 bg-obsidian border-y border-white/5 relative overflow-hidden">
      {/* Background esoteric elements */}
      <div className="absolute top-0 right-0 p-32 opacity-[0.02] pointer-events-none mix-blend-screen">
        <Eye size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-illuminati-gold" />
          </div>
          <h2 className="text-[10px] font-bold tracking-[0.3em] text-illuminati-gold uppercase mb-6">Our Dimensions</h2>
          <h3 className="text-3xl md:text-4xl heading-serif text-white uppercase tracking-widest">The Inner Order</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-void p-10 border border-white/5 hover:border-illuminati-gold/30 hover:bg-white/[0.02] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-illuminati-gold/5 blur-[50px] transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="text-illuminati-gold mb-8 stroke-1 relative z-10">
                {p.icon}
              </div>
              <h4 className="text-lg text-white mb-4 heading-serif uppercase tracking-widest">{p.title}</h4>
              <p className="text-stone-500 leading-loose text-xs tracking-wider">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Structures", desc: "Decks, Fences, Arbors, Pergolas, and Gazebos measured to the golden ratio." },
    { title: "Paving", desc: "Driveways, Walkways, Patios, and Steps that form pathways of power." },
    { title: "Water & Fire", desc: "Ponds, Waterfalls, Outdoor Kitchens, and Fireplaces summoning the primeval elements." },
    { title: "Landscaping", desc: "Flora and terrain curation, cultivating precise, natural order within your bounds." },
    { title: "Specialty", desc: "Sustainable Gardens, Synthetic Turf, and Drainage Solutions restoring balance." },
    { title: "Removal & Purge", desc: "Absolute extraction of trash, waste, and furniture. Erasing traces without a sound." }
  ];

  return (
    <section id="services" className="py-32 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="sticky top-40 text-center lg:text-left">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-illuminati-gold uppercase mb-6">Our Crafts</h2>
            <h3 className="text-3xl lg:text-4xl heading-serif text-white mb-8 tracking-widest uppercase">The Grand Architect's Work</h3>
            <p className="text-stone-500 mb-12 leading-loose text-sm tracking-wide">
              We manipulate earth, water, and fire to forge commercial and residential outdoor sanctuaries in Alexandria. Professional output, cloaked in silence.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-illuminati-gold/30">
              <div className="h-px bg-current flex-1" />
              <Hexagon size={16} />
              <div className="h-px bg-current flex-1" />
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group p-8 border border-white/5 bg-obsidian hover:border-illuminati-gold/40 transition-all duration-500 relative"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-illuminati-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h4 className="text-sm font-bold text-illuminati-gold mb-4 uppercase tracking-[0.1em]">{s.title}</h4>
                <p className="text-stone-400 text-xs leading-loose tracking-wider">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "S. M.", area: "Sector Alpha / Old Town Alexandria", rating: 5, text: "They arrived in silence, erected the pergolas perfectly, and transformed the terrain. An outstanding outdoor kitchen." },
    { name: "J. R.", area: "Coordinate Delta / Del Ray", rating: 5, text: "I requested the synthetic turf and drainage solution. By dawn, the grounds were fully restored to order." },
    { name: "A. V.", area: "Echo Grid / Eisenhower", rating: 5, text: "Complex ponds and fire features sculpted without a word. Pure structural mastery for our commercial estate." },
  ];

  return (
    <section id="testimonials" className="py-32 bg-obsidian border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.3em] text-illuminati-gold uppercase mb-6">Encrypted Logs</h2>
          <h3 className="text-3xl heading-serif text-white tracking-widest uppercase">Whispers From The Elite</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="bg-void border border-white/5 p-10 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-700 text-illuminati-gold">
                <Compass size={120} strokeWidth={1} />
              </div>

              <div className="flex gap-1 text-illuminati-gold mb-8">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone-400 leading-loose italic mb-10 text-xs tracking-wider relative z-10">"{r.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 relative z-10">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 text-illuminati-gold flex items-center justify-center font-bold heading-serif text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs tracking-widest uppercase">{r.name}</h4>
                  <p className="text-[10px] text-stone-500 tracking-widest uppercase mt-1">{r.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hardscaping / Paving',
    date: '',
    details: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'Hardscaping / Paving', date: '', details: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-obsidian border border-white/5 flex flex-col md:flex-row relative">
          
          <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
            <div>
              <div className="mb-12">
                <Triangle size={24} className="text-illuminati-gold stroke-1 mb-8" />
                <h3 className="text-2xl md:text-3xl heading-serif text-white tracking-widest uppercase mb-6">Initiate Contact</h3>
                <p className="text-stone-400 text-sm leading-loose tracking-wide">
                  Transmit your coordinates. An emissary of RegalLine will review the dossier and schedule the exterior transformation of your commercial or residential estate.
                </p>
              </div>
              
              <div className="space-y-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-6">
                  <div className="text-illuminati-gold">
                    <PhoneCall size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Direct Line</h5>
                    <p className="text-stone-300 tracking-widest text-sm">202 425 8308</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12 lg:p-20 bg-void/50">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="w-16 h-16 border border-illuminati-gold text-illuminati-gold rounded-full flex items-center justify-center mb-8 bg-illuminati-gold/5"
                >
                  <CheckCircle size={24} />
                </motion.div>
                <h4 className="text-xl heading-serif text-white tracking-widest uppercase mb-4">Transmission Complete</h4>
                <p className="text-stone-400 text-sm leading-loose tracking-wide mb-8">
                  Your coordinates have been logged. Await further instructions.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs tracking-[0.2em] font-bold text-illuminati-gold uppercase hover:text-white transition-colors"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Target Identify (Name)</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-void border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-illuminati-gold/50 transition-colors placeholder:text-stone-700"
                    placeholder="Enter designation"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Signal Point (Phone)</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-void border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-illuminati-gold/50 transition-colors placeholder:text-stone-700"
                      placeholder="000.000.0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Date of Operation</label>
                    <input 
                      type="date" 
                      className="w-full bg-void border border-white/10 px-4 py-3 text-stone-300 text-sm outline-none focus:border-illuminati-gold/50 transition-colors [color-scheme:dark]"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Ritual Type (Service)</label>
                  <select 
                    className="w-full bg-void border border-white/10 px-4 py-3 text-stone-300 text-sm outline-none focus:border-illuminati-gold/50 transition-colors"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Structures (Decks, Pergolas, Arbors)</option>
                    <option>Paving (Driveways, Patios)</option>
                    <option>Water & Fire (Ponds, Kitchens, Fireplaces)</option>
                    <option>Landscaping (Flora & Terrain)</option>
                    <option>Specialty Turf & Environmental Solutions</option>
                    <option>Removal (Trash, Waste, Furniture)</option>
                    <option>Full Estate Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Dossier Details</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-void border border-white/10 px-4 py-3 text-stone-300 text-sm outline-none focus:border-illuminati-gold/50 transition-colors placeholder:text-stone-700 resize-none"
                    placeholder="Provide exact measurements and requirements..."
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 border border-illuminati-gold bg-transparent text-illuminati-gold text-xs tracking-[0.2em] uppercase font-bold hover:bg-illuminati-gold hover:text-black transition-all disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Submit Dossier'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
