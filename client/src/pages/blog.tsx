import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Clock, ArrowRight, Search } from "lucide-react";
import swappLogo from "@assets/Design sem nome (12).png";
import footerLogo from "@assets/Design sem nome (12).png";

const blogPosts = [
  {
    id: "1",
    slug: "como-contar-calorias-sem-stress",
    title: "Como contar calorias sem stress",
    excerpt: "Descubra uma forma prática e leve de acompanhar sua alimentação sem transformar isso em obsessão.",
    category: "Dicas",
    readTime: "5 min",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "2",
    slug: "trocas-inteligentes-cafe-da-manha",
    title: "5 trocas inteligentes para o café da manhã",
    excerpt: "Comece o dia com mais energia fazendo escolhas simples que fazem toda a diferença.",
    category: "Receitas",
    readTime: "4 min",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "3",
    slug: "mitos-sobre-carboidratos",
    title: "Mitos sobre carboidratos que você precisa parar de acreditar",
    excerpt: "Carboidrato é vilão? Vamos desvendar essa história e entender o papel real dos carboidratos na sua alimentação.",
    category: "Educação",
    readTime: "7 min",
    date: "05 Jan 2026",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "4",
    slug: "alimentacao-pre-treino",
    title: "O que comer antes e depois do treino",
    excerpt: "Maximize seus resultados com as escolhas certas de alimentação para cada momento do seu treino.",
    category: "Fitness",
    readTime: "6 min",
    date: "02 Jan 2026",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "5",
    slug: "como-ler-rotulos",
    title: "Guia definitivo: como ler rótulos de alimentos",
    excerpt: "Aprenda a decifrar as informações nutricionais e fazer escolhas mais conscientes no supermercado.",
    category: "Educação",
    readTime: "8 min",
    date: "28 Dez 2025",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "6",
    slug: "snacks-saudaveis",
    title: "10 snacks saudáveis para matar a fome",
    excerpt: "Opções práticas e deliciosas para aqueles momentos entre refeições sem prejudicar seus objetivos.",
    category: "Receitas",
    readTime: "4 min",
    date: "25 Dez 2025",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2uj56?w=800&auto=format&fit=crop&q=60"
  }
];

const categories = ["Todos", "Dicas", "Receitas", "Educação", "Fitness"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Link href="/">
            <img src={swappLogo} alt="Swapp" className="h-32 w-32 aspect-square object-contain cursor-pointer" />
          </Link>
          <Link href="/">
            <span className="text-[#6B7280] hover:text-[#10B981] transition-colors flex items-center gap-2 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight">
              Blog Swapp
            </h1>
            <p className="text-lg text-[#6B7280]">
              Dicas, receitas e conhecimento para você comer melhor todos os dias.
            </p>
          </motion.div>

          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
                <div className="aspect-[21/9] overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block bg-[#10B981] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/80 text-lg max-w-2xl mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#10B981] text-white"
                      : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="blog-search"
                className="w-full md:w-[300px] pl-12 pr-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/10 outline-none transition-all"
              />
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredPosts.slice(1).map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-[#10B981] bg-[#F0FDF4] px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#10B981] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <span className="text-[#10B981] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B7280] text-lg">
                Nenhum artigo encontrado. Tente outra busca ou categoria.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center pt-5 pb-5">
          <img src={footerLogo} alt="Swapp" className="h-16 w-auto mx-auto mb-2 brightness-0 invert" />
          <p className="text-[#9CA3AF] text-sm">
            © 2026 Swapp. Nutrição inteligente no seu WhatsApp.
          </p>
        </div>
      </footer>
    </div>
  );
}
