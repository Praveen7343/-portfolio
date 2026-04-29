/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Box, 
  Code2, 
  Settings, 
  PieChart, 
  Sparkles, 
  ScanFace, 
  Command,
  ArrowRight,
  Share2,
  Rocket,
  Headphones,
  Cpu,
  ShoppingBag,
  UserCheck,
  Bot,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRightLeft,
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  ArrowUpRight,
  Briefcase,
  Terminal
} from "lucide-react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
  >
    {children}
  </a>
);

const Block3D = ({ icon: Icon, delay = 0, className = "" }: { icon: any; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -10 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      rotateX: 0, 
      rotateY: -12,
      y: [0, -10, 0] 
    }}
    transition={{ 
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }
    }}
    whileHover={{ scale: 1.1, rotateY: 0, y: -15 }}
    className={`group relative w-32 h-32 md:w-36 md:h-36 bg-white rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center border border-white/50 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100/50 rounded-[2.5rem]" />
    <Icon className="w-10 h-10 md:w-12 md:h-12 text-indigo-400 group-hover:text-indigo-600 transition-colors relative z-10" strokeWidth={1} />
  </motion.div>
);

const processes = [
  {
    number: 1,
    icon: Share2,
    title: "Workflow Assessment",
    description: "I begin by examining your existing technical requirements to identify where modern web architectures can deliver the greatest performance impact.",
    delay: 0.1
  },
  {
    number: 2,
    icon: Rocket,
    title: "Deploy with Confidence",
    description: "My development process ensures custom-built web systems built around your specific goals, ensuring safe, reliable, and scalable deployment.",
    delay: 0.2
  },
  {
    number: 3,
    icon: Headphones,
    title: "Ongoing Support",
    description: "After launch, I provide dedicated support to refine and optimize your web systems, keeping your digital experience performing at its absolute best.",
    delay: 0.3
  }
];

const reviews = [
  {
    name: "Sophia martin",
    role: "Martin agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    review: "The custom web applications designed by this developer are incredibly user-centric. Everything we need is here: speed, responsiveness, and amazing support. Highly recommend!",
    icon: Twitter
  },
  {
    name: "Ryan harper",
    role: "Harper education",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    review: "Working with this developer has been a game-changer for our online campus. Their performant web solutions and clean code help us deliver education to more students daily.",
    icon: Linkedin
  },
  {
    name: "Mia emirt",
    role: "emirt agency",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    review: "The perfect partner for digital innovation. They simplified our full-stack workflows and gave our marketing team the tools to achieve more with less technical debt.",
    icon: Instagram
  },
  {
    name: "Emily johnson",
    role: "Johnson marketing",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    review: "We've seen massive improvements since launching our new frontend. It's lightning-fast, visually stunning, and integrates perfectly with our backend APIs.",
    icon: Facebook
  }
];

const ProcessCard = ({ number, title, description, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group bg-gradient-to-br from-[#F7F5FF] to-[#F0EEFF] border border-[#E8E4FF] rounded-[2rem] p-8 md:p-10 flex flex-col items-start text-left hover:bg-white/80 transition-all hover:shadow-xl hover:shadow-indigo-500/8"
  >
    <div className="absolute top-6 right-8 w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
      {number}
    </div>
    
    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50 mb-8 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-indigo-500" strokeWidth={1.5} />
    </div>

    <h3 className="text-2xl font-semibold text-slate-800 mb-4 tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 leading-relaxed text-sm mb-10 pr-4">
      {description}
    </p>

    <div className="mt-auto px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:bg-indigo-50 group-hover:text-indigo-500 group-hover:border-indigo-100 transition-all">
      Step {number}
    </div>
  </motion.div>
);

const projects = [
  {
    id: 1,
    year: "2025",
    title: "E-Commerce Platform",
    description: "Built a high-performance e-commerce engine with real-time inventory sync and seamless checkout experiences for global brands.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200",
    icon: ShoppingBag
  },
  {
    id: 2,
    year: "2024",
    title: "Facial Attendance System",
    description: "Developed an AI-powered attendance solution using biometrics for organizational security and automated tracking efficiency.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    icon: UserCheck
  },
  {
    id: 3,
    year: "2023",
    title: "AI Personal Assistant",
    description: "Engineered a custom LLM-integrated assistant to automate schedule management and daily productivity tasks.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    icon: Bot
  }
];

const ReviewCard = ({ name, role, image, review, icon: Icon }: any) => (
  <div className="w-[350px] md:w-[450px] shrink-0 bg-white border border-slate-100/50 rounded-[3rem] p-8 md:p-10 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all mx-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-2xl object-cover shadow-sm bg-slate-100" />
        <div>
          <h4 className="font-bold text-slate-800 text-lg tracking-tight">{name}</h4>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{role}</p>
        </div>
      </div>
      <div className="w-10 h-10 rounded-xl bg-slate-50/50 border border-slate-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-indigo-500" strokeWidth={1.5} />
      </div>
    </div>
    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
      "{review}"
    </p>
  </div>
);

const ComparisonItem = ({ text, type }: { text: string; type: 'pro' | 'con' }) => (
  <div className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0 group">
    <div className={`p-1 rounded-full transition-transform group-hover:scale-110 ${type === 'pro' ? 'bg-indigo-50' : 'bg-slate-50'}`}>
      {type === 'pro' ? (
        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
      ) : (
        <XCircle className="w-4 h-4 text-slate-400" />
      )}
    </div>
    <span className={`text-sm font-semibold tracking-tight ${type === 'pro' ? 'text-slate-700' : 'text-slate-400'}`}>{text}</span>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-600 transition-colors group"
      >
        <span className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-inherit transition-colors pr-8">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-indigo-600 border-indigo-600 text-white rotate-180' : 'text-slate-400 bg-white'}`}>
          <ChevronDown className="w-5 h-5" strokeWidth={2} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-indigo-100">
      {/* Background blobs - matching template's soft lavender-white */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#EAE8F8]/60 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F0E8F8]/50 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#F8EEF4]/40 rounded-full blur-[100px] -z-10" />

      {/* Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 rounded-full py-2 px-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
        >
          <div className="flex items-center gap-8 pl-2">
            <div className="w-10 h-10 bg-[#5D4EBC] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
              <Box className="text-white w-6 h-6" />
            </div>
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#reviews">Reviews</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#why-us">About Me</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
            </div>
          </div>
          <button className="group flex items-center gap-2 bg-[#412E99] text-white pl-1.5 pr-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-[#342480] transition-all">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform">
              <ScanFace className="w-4 h-4 text-white" />
            </div>
            Book A Free Call Now
          </button>
        </motion.nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-48 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-5xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-display font-medium text-[#1E1B4B] leading-[1.1] tracking-tight mb-8"
              id="hero-title"
            >
              well come to my portfolio
              <br />
              <span className="text-slate-800">I am a devloper</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-12 font-medium"
              id="hero-description"
            >
              I am frontend developer and i will provide a wonder full websites for my clients
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative inline-block mb-24"
            >
              <div className="absolute inset-0 bg-indigo-200 blur-2xl opacity-20 -z-10 rounded-full" />
              <button className="group flex items-center gap-3 bg-[#412E99] text-white pl-4 pr-10 py-3.5 rounded-full text-lg font-semibold shadow-2xl shadow-indigo-200 hover:bg-[#342480] transition-all" id="hero-cta-btn">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:rotate-12 transition-transform">
                  <ScanFace className="w-5 h-5 text-white" />
                </div>
                Book A Free Call Now
              </button>
            </motion.div>
          </div>

          {/* Icon Cubes Section - Staircase/Pyramid like template */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto h-[420px] flex items-end justify-center pb-8"
            id="hero-cubes"
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              {/* Top center cube (raised) */}
              <div className="flex justify-center mb-2">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-[2rem] flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(145deg, #e8e6f8 0%, #d8d4f2 100%)",
                    boxShadow: "12px 12px 30px rgba(93,78,188,0.15), -4px -4px 15px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.6)",
                    transform: "rotateX(10deg) rotateY(-8deg)"
                  }}
                >
                  <Code2 className="w-12 h-12 md:w-14 md:h-14 text-[#5D4EBC]/60" strokeWidth={1.2} />
                </motion.div>
              </div>
              {/* Bottom row - 3 cubes */}
              <div className="flex gap-3 md:gap-4">
                {[
                  { icon: Settings, delay: 0.3 },
                  { icon: Sparkles, delay: 0.6 },
                  { icon: PieChart, delay: 0.9 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] flex items-center justify-center"
                    style={{
                      background: "linear-gradient(145deg, #eeecfa 0%, #dcd8f4 100%)",
                      boxShadow: "10px 10px 25px rgba(93,78,188,0.12), -4px -4px 12px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.6)",
                      transform: "rotateX(10deg) rotateY(-8deg)"
                    }}
                  >
                    <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#5D4EBC]/50" strokeWidth={1.2} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-indigo-300/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Process Section */}
        <section id="process" className="mt-40 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-100 -z-10 hidden md:block" />
            <h2 className="bg-transparent inline-block px-10 text-4xl md:text-6xl font-display font-medium text-slate-800 mb-6">
              Process Is Performance
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed bg-white/10 backdrop-blur-sm rounded-3xl p-4">
              Strategic, code-driven steps built to grow your digital presence faster, smarter, and stronger with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((proc) => (
              <ProcessCard 
                key={proc.number}
                number={proc.number}
                icon={proc.icon}
                title={proc.title}
                description={proc.description}
                delay={proc.delay}
              />
            ))}
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" className="mt-40 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/5">
              <p className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] mb-4">Portfolio</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-800 mb-6 leading-tight text-left">
                Our Latest Projects
              </h2>
              <p className="text-slate-500 mb-8 max-w-md text-left text-sm">
                I turn bold ideas into automated web solutions carefully crafted to scale and deliver measurable results.
              </p>

              <div className="space-y-1.5">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveProject(project)}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl transition-all ${
                      activeProject.id === project.id 
                      ? "bg-slate-50 border border-slate-100" 
                      : "hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        activeProject.id === project.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                      }`}>
                        <project.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-lg font-medium transition-colors ${
                        activeProject.id === project.id ? "text-slate-900" : "text-slate-400"
                      }`}>
                        {project.title}
                      </span>
                    </div>
                    <span className="text-slate-300 font-mono text-[10px] group-hover:text-slate-400 transition-colors">
                      {project.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-3/5 relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative overflow-hidden rounded-[2rem] bg-slate-900 aspect-[16/10] shadow-xl shadow-indigo-100/30"
                >
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-[1.5rem] text-white"
                    >
                      <h3 className="text-xl font-semibold mb-2">{activeProject.title}</h3>
                      <p className="text-slate-300 text-xs leading-relaxed mb-4">
                        {activeProject.description}
                      </p>
                      <button className="flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all group/btn">
                        View Project Case Study
                        <ArrowRight className="w-4 h-4 text-indigo-400 group-hover/btn:text-white" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Infinite Scrolling Logo Ticker */}
          <div className="mt-32 relative py-12 border-t border-slate-50 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-16 px-8 items-center">
                  {["Opal", "Dune", "Asterisk", "Oasis", "Cooks", "Echo", "Vertex", "Lumina"].map((name) => (
                    <div key={name} className="flex items-center gap-3 group cursor-default grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Cpu className="w-5 h-5 group-hover:text-indigo-600" strokeWidth={1.5} />
                      <span className="font-display font-medium text-2xl tracking-tighter text-slate-800">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mt-40 mb-20 relative py-20 overflow-hidden">
          {/* Section Gradient Background (Mesh effect) */}
          <div className="absolute inset-0 -z-10 bg-[#FAF9FF] opacity-50" />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

          <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 transition-transform hover:scale-105">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Customers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-800 mb-6 tracking-tight">
              Our customers love us
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              Real feedback from teams and individuals who rely on my web development skills to power their business with high-performing digital experiences.
            </p>
          </div>

          <div className="relative pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9FF] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9FF] to-transparent z-10" />
            
            <motion.div 
              className="flex pointer-events-auto"
              animate={{ x: [0, -1400] }}
              transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                  {reviews.map((rev, idx) => (
                    <ReviewCard key={`${i}-${idx}`} {...rev} />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100"
              ].map((src, i) => (
                <img key={i} src={src} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="User avatar" />
              ))}
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Over <span className="text-slate-900">15,725+</span> people gave us review
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="mt-40 max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6 group hover:scale-105 transition-transform">
              <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600">Comparison</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-800 mb-6">
              Why Choose Us
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              I help businesses harness the power of modern web technologies to work smarter, scale faster, and innovate boldly using custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* My Brand (Lander OS style) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#EEF0FF] to-[#E8EAFF] border border-[#D8DCFF] rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-indigo-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50" />
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                  <Box className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Praveen</h3>
              </div>
              <div className="space-y-1">
                <ComparisonItem type="pro" text="Fast development with clean architectures" />
                <ComparisonItem type="pro" text="Built to grow and adapt with your traffic" />
                <ComparisonItem type="pro" text="Real-time, performant user interfaces" />
                <ComparisonItem type="pro" text="Optimized code, reducing technical debt" />
                <ComparisonItem type="pro" text="Expert support + Strategic guidance" />
              </div>
            </motion.div>

            {/* Others */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF0F5] to-[#FFE8F0] border border-[#FFD8E8] rounded-[3rem] p-10 md:p-12"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
                  <Settings className="text-slate-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-400 tracking-tight">Others</h3>
              </div>
              <div className="space-y-1">
                <ComparisonItem type="con" text="Slower execution and manual setup" />
                <ComparisonItem type="con" text="Requires constant rewrites as you scale" />
                <ComparisonItem type="con" text="Limited or delayed frontend responsiveness" />
                <ComparisonItem type="con" text="Higher maintenance costs, less automation" />
                <ComparisonItem type="con" text="Generic support or no guidance at all" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Section (Career/Jobs) */}
        <section id="future" className="mt-40 mb-20 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-100 -z-10 hidden md:block" />
            <h2 className="bg-white inline-block px-10 text-3xl md:text-5xl font-display font-medium text-slate-800 mb-6 tracking-tight">
              Making future easy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Image Box */}
            <div className="h-[300px] rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Box */}
            <div className="h-[300px] rounded-[2rem] bg-gradient-to-br from-[#EAE6F8] via-[#E8E0F5] to-[#F4E0F0] flex flex-col items-center justify-center p-8 text-center border border-[#DDD8F5]">
              <p className="text-xl md:text-2xl font-bold text-indigo-900 mb-6 leading-tight max-w-sm">
                " We Know your problems. We know your target audience and how you can grow rapidly with the help of automation "
              </p>
              <p className="text-slate-600 font-medium text-sm">
                Web Developer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Job Card 1 */}
            <div className="bg-[#FBFAFF] rounded-[2rem] p-8 border border-slate-100 relative group hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50">
                    <Briefcase className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">Product designer</h3>
                </div>
                <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
                looking for a product designer who really cares about the user experience and a team player who shapes our product
              </p>
              <div className="flex gap-2">
                <span className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-500 text-xs font-bold">2+ years exp</span>
                <span className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-500 text-xs font-bold">Remote</span>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-[#FBFAFF] rounded-[2rem] p-8 border border-slate-100 relative group hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50">
                    <Terminal className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">Back end developer</h3>
                </div>
                <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
                looking for a back-end developer who have knowledge on dealing with complex codebase and who can communicate as a team
              </p>
              <div className="flex gap-2">
                <span className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-500 text-xs font-bold">5+ years exp</span>
                <span className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-500 text-xs font-bold">Remote/ On-site</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#412E99] text-white px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 hover:bg-[#342480] transition-all">
              <Users className="w-4 h-4" />
              Check All Job Openings
            </button>
            <button className="bg-[#5D53AD] text-white px-10 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-[#4D4594] transition-all">
              Contact Sales Now
            </button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="mt-40 max-w-5xl mx-auto px-6 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden bg-gradient-to-br from-[#E8E6F8] via-[#EEE8F8] to-[#F8E8F0] border border-white/60"
          >
            {/* Cloud blobs matching template */}
            <div className="absolute top-[-5%] left-[-5%] w-72 h-56 bg-white/50 rounded-[60%] blur-2xl -z-10" />
            <div className="absolute bottom-[-10%] right-[-5%] w-80 h-72 bg-[#F0C0D8]/40 rounded-[50%] blur-[80px] -z-10" />
            <div className="absolute top-[40%] left-[20%] w-48 h-40 bg-white/30 rounded-[50%] blur-2xl -z-10" />

            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-800 mb-8 tracking-tight">
              What you still waiting!!
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium mb-12">
              Ready to unlock the full potential of high-performance web applications? Let's build modern solutions that save time, cut technical debt, and accelerate your business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-slate-600">100% Secure Code</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-xs font-bold text-slate-600">15k+ Satisfied Users</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-[#5D4EBC] text-white pl-3.5 pr-8 py-3 rounded-full text-lg font-semibold shadow-xl shadow-indigo-200 hover:bg-[#4D3EA3] transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:rotate-12 transition-transform">
                <ScanFace className="w-5 h-5 text-white" />
              </div>
              Book A Free Call Now
            </motion.button>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#F0EFFF] py-20 border-t border-[#DDD9FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Box className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-medium text-slate-800 tracking-tighter">Praveen</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Github, href: "https://github.com/Praveen7343" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/praveen-kumar-9b2349384/" },
                { Icon: Instagram, href: "https://www.instagram.com/mrr_praveen_kumar__a" }
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Menu</h4>
              <ul className="space-y-4">
                <li><a href="#process" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Process</a></li>
                <li><a href="#projects" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Portfolio</a></li>
                <li><a href="#reviews" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#why-us" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Comparison</a></li>
                <li><a href="#future" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium text-slate-400">© 2026 Praveen. All rights reserved.</p>
            <div className="flex gap-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Made by <span className="text-slate-900">Praveen</span></p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Built in <span className="text-slate-900">laptop</span></p>
            </div>
          </div>
        </div>
      </footer>

      {/* Decor */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-12 h-1 bg-pink-400 rounded-full opacity-50" />
    </div>
  );
}
