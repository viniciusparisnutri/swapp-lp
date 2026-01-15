import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Repeat, 
  Sparkles, 
  CheckCircle2, 
  Camera, 
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Heart,
  Send,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import heroPersonImage from "@assets/stock_images/happy_woman_holding__68eabf2a.jpg";
import swappLogo from "@assets/Design sem nome (12).png";
import footerLogo from "@assets/Design sem nome (12).png";
import mockupLogo from "@assets/Design sem nome (13).png";

import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

import generatedBg from "@assets/generated_images/minimalist_abstract_healthy_nutrition_background.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function SwappLogo({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) {
  const sizeClass = size === "large" ? "h-48 w-48" : "h-40 w-40";
  return (
    <img src={swappLogo} alt="Swapp" className={`${sizeClass} aspect-square object-contain ${className}`} />
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <SwappLogo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-[#6B7280] hover:text-[#10B981] transition-colors">Funcionalidades</a>
          <a href="#pricing" className="text-sm font-medium text-[#6B7280] hover:text-[#10B981] transition-colors">Preços</a>
          <Link href="/blog">
            <span className="text-sm font-medium text-[#6B7280] hover:text-[#10B981] transition-colors cursor-pointer">Blog</span>
          </Link>
          <a href="#faq" className="text-sm font-medium text-[#6B7280] hover:text-[#10B981] transition-colors">FAQ</a>
        </div>
        <a
          href="#cta"
          data-testid="nav-cta-button"
          className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_4px_12px_rgba(37,211,102,0.3)]"
        >
          <MessageCircle className="w-4 h-4" />
          Começar agora
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestionChips = [
    "Quantas calorias tem um pão francês?",
    "Troca saudável para refrigerante",
    "O que comer antes de treinar?"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        "Quantas calorias tem um pão francês?": "Um pão francês tem aproximadamente 140 calorias. Se você come dois no café, são 280 calorias — equivalente a uma barrinha de cereal e meia banana 🍌",
        "Troca saudável para refrigerante": "Que tal água com gás e limão? Zero calorias e refrescante! Ou suco de maracujá natural com pouco açúcar — mais vitaminas e menos química 🍋",
        "O que comer antes de treinar?": "Para treino de 1-2h antes: banana com pasta de amendoim ou iogurte com granola. Energia rápida sem peso no estômago! 💪"
      };
      
      const response = responses[text] || "Ótima pergunta! Me conta mais sobre o que você quer saber sobre alimentação 😊";
      
      setMessages(prev => [...prev, { role: "assistant", text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={generatedBg} alt="" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
      </div>
      <div className="absolute inset-0 gradient-hero opacity-10 z-0" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#34D399]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-[#ECFCCB] text-[#1B1B1B] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide">Novo</span>
              <span className="flex items-center gap-2 text-[#6B7280] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Nutrição inteligente via WhatsApp
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#10B981] flex items-center justify-center text-[10px] font-bold text-white">
                  +1k
                </div>
              </div>
              <p className="text-sm text-[#6B7280] font-medium">
                <span className="text-[#111827] font-bold">+100 usuários ativos</span> hoje
              </p>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 tracking-tight leading-[1.1]">
              Coma melhor sem<br />
              <span className="text-[#10B981]">complicar sua vida</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed mb-8">
              Transforme mensagens, fotos e perguntas do dia a dia em insights sobre calorias, 
              trocas inteligentes e orientação prática. Sem apps, planilhas ou culpa.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#cta"
              data-testid="hero-cta-button"
              className="group bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-95 transition-all shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_25px_50px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Começar no WhatsApp
            </a>
            <a
              href="#features"
              className="bg-white/10 backdrop-blur-md text-[#111827] px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#10B981] hover:text-[#10B981] transition-all"
            >
              Como funciona
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#10B981]/20 to-[#34D399]/20 rounded-[2rem] blur-2xl" />
              <img 
                src={heroPersonImage} 
                alt="Pessoa usando Swapp no celular" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
              
              <motion.div 
                className="absolute -left-4 md:-left-8 bottom-1/4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-[#F3F4F6] rounded-[2rem] p-2 shadow-2xl w-[180px] md:w-[220px]">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="bg-[#F9FAFB] px-4 py-2 flex items-center gap-2 border-b border-[#E5E7EB]">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center overflow-hidden">
                        <img src={mockupLogo} alt="Swapp" className="w-4 h-4 object-contain brightness-0" />
                      </div>
                      <span className="text-xs font-semibold">Swapp</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-[#F3F4F6] text-[#374151] px-3 py-2 rounded-xl rounded-br-sm text-xs ml-auto max-w-[80%]">
                        Quantas calorias tem um pão?
                      </div>
                      <div className="bg-[#10B981] text-white px-3 py-2 rounded-xl rounded-bl-sm text-xs">
                        ~140 calorias 🍞
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center overflow-hidden">
                <img src={mockupLogo} alt="Swapp" className="w-6 h-6 object-contain brightness-0" />
              </div>
              <div>
                <p className="font-semibold text-[#111827]">Swapp</p>
                <p className="text-xs text-[#10B981]">Online agora</p>
              </div>
            </div>

            <div className="min-h-[200px] mb-6 space-y-4">
              {messages.length === 0 && (
                <motion.div 
                  className="bg-[#10B981] text-white px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Oi! 👋 Sou seu assistente de nutrição. Pergunte qualquer coisa sobre alimentação ou mande uma foto do seu prato!
                </motion.div>
              )}
              
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  className={`px-4 py-3 rounded-2xl max-w-[85%] ${
                    msg.role === "user" 
                      ? "bg-[#F3F4F6] text-[#1F2937] ml-auto rounded-br-sm" 
                      : "bg-[#10B981] text-white rounded-bl-sm"
                  }`}
                  initial={{ opacity: 0, y: 10, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  className="bg-[#10B981] text-white px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%] flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  data-testid={`chip-suggestion-${idx}`}
                  className="bg-[#F3F4F6] text-[#374151] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#10B981] hover:text-white hover:-translate-y-1 active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Pergunte qualquer coisa sobre alimentação..."
                  data-testid="chat-input"
                  className="w-full px-5 py-4 rounded-xl border-2 border-[#E5E7EB] focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10 outline-none transition-all text-[#1F2937] placeholder:text-[#9CA3AF]"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#9CA3AF] hover:text-[#10B981] transition-colors"
                  data-testid="camera-button"
                >
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => handleSend(inputValue)}
                data-testid="send-button"
                className="bg-[#10B981] text-white p-4 rounded-xl hover:bg-[#059669] transition-colors shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Camera,
      title: "Foto do prato",
      benefit: "Descubra calorias instantaneamente",
      description: "Mande uma foto e o Swapp identifica os alimentos e estima as calorias para você em segundos. Funciona com pratos caseiros, restaurantes e lanches.",
      chatMessages: [
        { role: "assistant", text: "📸 Envie uma foto do seu prato e eu te conto quantas calorias tem!" },
        { role: "user", text: "Foto do meu almoço 🍽️" },
        { role: "assistant", text: "Analisando... Vejo arroz, feijão, frango grelhado e salada. Total estimado: 450 kcal. Ótima escolha equilibrada! ✅" }
      ]
    },
    {
      icon: Repeat,
      title: "Trocas inteligentes",
      benefit: "Sabor com menos calorias",
      description: "Quer continuar comendo o que gosta? Sugerimos alternativas mais saudáveis e menos calóricas que mantêm o prazer de comer.",
      chatMessages: [
        { role: "user", text: "Quero tomar um refrigerante, o que eu faço?" },
        { role: "assistant", text: "Que tal água com gás, gelo e uma rodela de limão? 🍋 Mesma refrescância, zero calorias e sem corantes artificiais!" },
        { role: "user", text: "Boa! E se eu quiser algo doce?" },
        { role: "assistant", text: "Tente um chocolate 70% ou uma tâmara. Satisfaz o desejo por doce com mais nutrientes! 🍫" }
      ]
    },
    {
      icon: Sparkles,
      title: "Respostas personalizadas",
      benefit: "Orientação sob medida",
      description: "Nada de tabelas genéricas. O Swapp entende suas dúvidas e responde como um nutricionista amigo direto no chat.",
      chatMessages: [
        { role: "user", text: "O que comer antes do treino de hoje?" },
        { role: "assistant", text: "Como seu treino é de força, recomendo uma banana com aveia 30 min antes. Energia rápida e sustentada! 💪" }
      ]
    },
    {
      icon: MessageCircle,
      title: "Direto no WhatsApp",
      benefit: "Sem aplicativos novos",
      description: "Não gaste memória do celular com apps pesados. O Swapp funciona onde você já passa a maior parte do tempo.",
      chatMessages: [
        { role: "assistant", text: "Oi! 👋 Sou o Swapp. Não precisa baixar nada, estou sempre aqui no seu WhatsApp para ajudar!" }
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            Nutrição que cabe na sua rotina
          </h2>
          <p className="text-lg text-[#6B7280]">
            Clique nas opções para ver como o Swapp simplifica suas escolhas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${
                  idx === activeFeature 
                    ? "bg-white border-[#10B981] shadow-xl" 
                    : "bg-transparent border-transparent grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${idx === activeFeature ? "bg-[#10B981] text-white" : "bg-gray-100 text-gray-400"}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${idx === activeFeature ? "text-[#111827]" : "text-[#6B7280]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium mb-2 ${idx === activeFeature ? "text-[#10B981]" : "text-gray-400"}`}>
                      {feature.benefit}
                    </p>
                    {idx === activeFeature && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[#6B7280] leading-relaxed text-sm"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7 flex justify-center relative">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-full blur-3xl -z-10" />
              
              <div className="bg-[#111827] rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-[#1f2937]">
                <div className="bg-[#f0f2f5] rounded-[2.5rem] overflow-hidden aspect-[9/19] flex flex-col relative">
                  <div className="h-10 bg-white flex items-center justify-between px-8 pt-2">
                    <span className="text-[10px] font-bold">9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="w-3.5 h-2 border border-black/20 rounded-sm relative after:absolute after:w-0.5 after:h-1 after:bg-black/20 after:-right-1 after:top-0.5" />
                    </div>
                  </div>

                  <div className="bg-[#075e54] text-white px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                      <img src={mockupLogo} alt="Swapp" className="w-8 h-8 object-contain brightness-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Swapp</h4>
                      <p className="text-[10px] opacity-80">visto por último hoje às 09:41</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#e5ddd5] relative">
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://i.pinimg.com/originals/85/70/f6/8570f6333cf2363737c33737c33737c3.png')" }} />
                    
                    {features[activeFeature].chatMessages.map((msg, idx) => (
                      <motion.div
                        key={`${activeFeature}-${idx}`}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className={`relative px-4 py-2.5 rounded-xl text-sm max-w-[85%] shadow-sm ${
                          msg.role === "user"
                            ? "bg-[#dcf8c6] text-[#1F2937] ml-auto rounded-tr-none"
                            : "bg-white text-[#1F2937] rounded-tl-none"
                        }`}
                      >
                        {msg.text}
                        <span className="block text-[9px] text-gray-400 text-right mt-1">09:41</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Inicie a conversa",
      description: "Clique no botão e comece a conversar com o Swapp no WhatsApp. Sem cadastro ou download."
    },
    {
      number: "02",
      title: "Pergunte ou mande foto",
      description: "Dúvida sobre calorias? Quer uma sugestão de troca? Fotografou seu almoço? Vale tudo."
    },
    {
      number: "03",
      title: "Receba orientação na hora",
      description: "Em segundos, você tem uma resposta clara, prática e personalizada para sua pergunta."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            Simples assim
          </h2>
          <p className="text-lg text-[#6B7280]">
            Três passos para transformar sua relação com a comida.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative"
              data-testid={`step-${idx}`}
            >
              <span className="text-7xl font-bold text-[#10B981]/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="relative pt-12">
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2">
                  <ArrowRight className="w-6 h-6 text-[#D1D5DB]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Trust() {
  const semSwappSteps = [
    "Procurar tabela nutricional do alimento",
    "Calcular gramas de proteína, carbo, gordura",
    "Achar alimento equivalente",
    "Recalcular tudo de novo",
    "Conferir se bateu com o plano",
    "Torcer pra não ter errado"
  ];

  const depoimentos = [
    {
      nome: "Carla",
      idade: 29,
      resultado: "-6kg em 3 meses",
      tipo: "Problema de Adesão",
      foto: "https://i.pravatar.cc/300?img=47",
      texto: "Eu sempre abandonava a dieta na primeira semana porque tinha alimentos que eu não gostava. Com o Swapp, troquei tudo e continuei no plano. Já são 3 meses seguindo!"
    },
    {
      nome: "Rafael",
      idade: 35,
      resultado: "Ganho de massa muscular",
      tipo: "Autonomia",
      foto: "https://i.pravatar.cc/300?img=33",
      texto: "Antes eu travava quando não tinha o ingrediente. Agora eu abro o Swapp, troco em 30 segundos e sigo o dia. Meu nutricionista fica impressionado com minha adesão."
    },
    {
      nome: "Juliana",
      idade: 41,
      resultado: "Emagrecimento",
      tipo: "Vida Real",
      foto: "https://i.pravatar.cc/300?img=45",
      texto: "Viajo muito a trabalho. O Swapp me salva TODA SEMANA. Monto refeições de hotel, restaurante, aeroporto... sempre dentro das minhas 1.600 kcal."
    },
    {
      nome: "Dr. Marcos Vieira",
      idade: null,
      resultado: "Nutricionista Clínico",
      tipo: "Nutricionista",
      foto: "https://i.pravatar.cc/300?img=51",
      texto: "Meus pacientes finalmente seguem o plano! Eles trocam alimentos, mas eu vejo que as macros estão batendo. Menos desistência, mais resultados."
    }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={generatedBg} alt="" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
      </div>
      <div className="absolute inset-0 gradient-hero opacity-10 z-0" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#34D399]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        {/* Título Principal */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-[#111827]">
            A MATEMÁTICA QUE O APP FAZ<br />
            <span className="text-[#10B981]">(E Você Não Precisa)</span>
          </h2>
        </motion.div>

        {/* Comparação Sem/Com Swapp */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Sem o Swapp */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#E5E7EB] shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#111827]">Sem o Swapp:</h3>
            <ul className="space-y-3 mb-6">
              {semSwappSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#4B5563]">
                  <span className="text-[#EF4444] mt-1">✗</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-2">
                <span className="font-semibold text-[#111827]">Tempo:</span> 15-30 minutos (se você souber fazer)
              </p>
              <p className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#111827]">Acurácia:</span> Questionável
              </p>
            </div>
          </motion.div>

          {/* Com o Swapp */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/10 rounded-2xl p-8 border border-[#10B981]/30 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#111827]">Com o Swapp:</h3>
            <div className="bg-[#10B981]/10 rounded-xl p-6 mb-6 border border-[#10B981]/20">
              <p className="text-lg text-[#111827] mb-2 font-semibold">"Posso trocar X por Y?"</p>
              <p className="text-[#10B981] text-sm font-medium">Resposta em 10 segundos</p>
            </div>
            <div className="pt-6 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-2">
                <span className="font-semibold text-[#111827]">Tempo:</span> 10 segundos
              </p>
              <p className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#10B981]">Acurácia:</span> 100%
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Seção de Depoimentos */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[#111827]">
            🗣️ PROVA SOCIAL
          </h2>
          <p className="text-lg text-[#6B7280] mb-2">(Depoimentos)</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {depoimentos.map((depoimento, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E5E7EB] shadow-lg hover:border-[#10B981]/50 hover:shadow-xl transition-all h-full">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        <img
                          src={depoimento.foto}
                          alt={depoimento.nome}
                          className="w-20 h-20 rounded-full object-cover border-4 border-[#10B981]/20 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#10B981] rounded-full border-4 border-white"></div>
                      </div>
                      <div className="mb-2">
                        <p className="text-sm text-[#10B981] font-semibold">
                          Depoimento {idx + 1} - {depoimento.tipo}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#4B5563] leading-relaxed mb-6 italic text-center">
                      "{depoimento.texto}"
                    </p>
                    <div className="pt-4 border-t border-[#E5E7EB] text-center">
                      <p className="text-[#111827] font-semibold mb-1">
                        — {depoimento.nome}{depoimento.idade ? `, ${depoimento.idade} anos` : ""}
                      </p>
                      <p className="text-[#10B981] text-sm font-medium">
                        {depoimento.resultado}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === idx
                    ? "bg-[#10B981] w-8"
                    : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      description: "Ideal para começar.",
      features: [
        "5 consultas por mês",
        "Análise de fotos básica",
        "Respostas em segundos",
        "Acesso via WhatsApp"
      ],
      buttonText: "Começar agora",
      highlight: false
    },
    {
      name: "Pro",
      price: "R$ 19,90",
      period: "/mês",
      description: "Para quem quer resultados.",
      features: [
        "Consultas ilimitadas",
        "Análise de fotos avançada",
        "Dicas de trocas saudáveis",
        "Histórico de refeições",
        "Suporte priorizado"
      ],
      buttonText: "Assinar Pro",
      highlight: true
    },
    {
      name: "Família",
      price: "R$ 49,90",
      period: "/mês",
      description: "Saúde para toda a casa.",
      features: [
        "Até 4 perfis integrados",
        "Consultas ilimitadas",
        "Análise de fotos avançada",
        "Relatórios comparativos",
        "Suporte VIP"
      ],
      buttonText: "Assinar Família",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-[#6B7280]">
            Escolha a melhor opção para transformar sua alimentação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight 
                  ? "border-[#10B981] shadow-xl ring-4 ring-[#10B981]/5" 
                  : "border-[#E5E7EB]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#111827] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#111827]">{plan.price}</span>
                  {plan.period && <span className="text-[#6B7280]">{plan.period}</span>}
                </div>
                <p className="text-[#6B7280] mt-2 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-[#4B5563] text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-[#10B981] text-white hover:bg-[#059669] shadow-lg shadow-[#10B981]/20"
                    : "bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Preciso baixar algum aplicativo?",
      answer: "Não! O Swapp funciona inteiramente dentro do seu WhatsApp. É só clicar no link e começar a conversar."
    },
    {
      question: "Como funciona a análise de fotos?",
      answer: "Basta tirar uma foto do seu prato e enviar no chat. Nossa IA identifica os alimentos e porções para estimar as calorias e nutrientes."
    },
    {
      question: "O Swapp substitui um nutricionista?",
      answer: "O Swapp é um assistente inteligente para o dia a dia. Para dietas específicas ou condições médicas, sempre recomendamos o acompanhamento de um profissional de saúde."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Respeitamos sua privacidade. Suas conversas são criptografadas e não compartilhamos suas informações com terceiros."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
            Dúvidas frequentes
          </h2>
          <p className="text-lg text-[#6B7280]">
            Tudo o que você precisa saber sobre o Swapp.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E7EB] shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#111827] mb-3">{faq.question}</h3>
              <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0F2F24]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent)]" />
      
      <div className="max-w-4xl mx-auto px-5 md:px-10 relative text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para <span className="text-[#10B981]">comer melhor?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Comece agora mesmo. É só clicar e mandar sua primeira mensagem. 
            Sem cadastro, sem cartão, sem compromisso.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://wa.me/5511999999999?text=Oi%20Swapp!"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-button"
              className="group relative inline-flex items-center gap-3 bg-[#10B981] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#059669] hover:scale-[1.05] transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle className="w-6 h-6" />
              Começar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="flex items-center gap-2 text-sm text-white/50">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Resposta instantânea no seu celular
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F2F24] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6 pb-6">
        <div className="grid md:grid-cols-12 gap-8 mb-6 items-start">
          <div className="md:col-span-6 flex flex-col">
            <div className="mb-4 flex items-center" style={{ minHeight: '1.25rem' }}>
              <img src={footerLogo} alt="Swapp" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Transformando a nutrição através de conversas simples no WhatsApp. 
              Inteligência artificial a serviço da sua saúde.
            </p>
          </div>
          
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-bold mb-4 text-sm">Navegação</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#features" className="hover:text-[#10B981] transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-[#10B981] transition-colors">Preços</a></li>
              <li><Link href="/blog"><span className="hover:text-[#10B981] transition-colors cursor-pointer">Blog</span></Link></li>
              <li><a href="#faq" className="hover:text-[#10B981] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-bold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-[#10B981] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#10B981] transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-[#10B981] transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 pb-3">
          <p className="text-white/40 text-xs">
            © 2026 Swapp. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 opacity-40">
            <span className="text-[10px] font-bold tracking-widest uppercase">Brazil • AI Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Trust />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
