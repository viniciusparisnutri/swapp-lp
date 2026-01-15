import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Share2, MessageCircle } from "lucide-react";
import swappLogo from "@assets/Design sem nome (12).png";
import footerLogo from "@assets/Design sem nome (12).png";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}> = {
  "como-contar-calorias-sem-stress": {
    title: "Como contar calorias sem stress",
    excerpt: "Descubra uma forma prática e leve de acompanhar sua alimentação sem transformar isso em obsessão.",
    category: "Dicas",
    readTime: "5 min",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop&q=80",
    content: `
Contar calorias não precisa ser um pesadelo. Na verdade, quando feito da forma certa, pode ser uma ferramenta libertadora que te dá mais controle sobre suas escolhas.

## O problema da obsessão

Muitas pessoas abandonam a contagem de calorias porque transformam isso em uma obsessão. Pesam cada grama, calculam cada mordida, e acabam desenvolvendo uma relação negativa com a comida.

**Não precisa ser assim.**

## A abordagem Swapp

Com o Swapp, você pode simplesmente mandar uma foto do seu prato e receber uma estimativa. Sem balança, sem calculadora, sem stress.

### Dicas práticas:

1. **Foque nas grandes refeições** — Café, almoço e jantar. Não se preocupe com cada petisco.

2. **Use estimativas** — Não precisa ser exato. Uma diferença de 50 calorias não vai mudar seu resultado.

3. **Aprenda padrões** — Com o tempo, você vai desenvolver uma noção natural do valor calórico dos alimentos.

4. **Seja gentil consigo** — Um dia acima das calorias não é o fim do mundo. É sobre consistência, não perfeição.

## Comece simples

Mande uma mensagem para o Swapp perguntando sobre suas refeições favoritas. Em poucos dias, você vai ter uma boa noção de como está sua alimentação — sem precisar de planilhas complexas.

Lembre-se: o objetivo é comer melhor, não viver estressado com números.
    `
  },
  "trocas-inteligentes-cafe-da-manha": {
    title: "5 trocas inteligentes para o café da manhã",
    excerpt: "Comece o dia com mais energia fazendo escolhas simples que fazem toda a diferença.",
    category: "Receitas",
    readTime: "4 min",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&auto=format&fit=crop&q=80",
    content: `
O café da manhã é a primeira oportunidade do dia para fazer escolhas inteligentes. Aqui estão 5 trocas simples que podem fazer uma grande diferença.

## 1. Pão francês → Pão integral

O pão francês tem ~140 calorias e pouca fibra. O pão integral tem calorias similares, mas muito mais fibra e nutrientes.

**Diferença:** Mais saciedade e energia sustentada.

## 2. Margarina → Pasta de amendoim

Troque a margarina por uma colher de pasta de amendoim natural. Você ganha proteínas e gorduras boas.

**Diferença:** Mais nutrientes e menos gordura trans.

## 3. Suco de caixinha → Fruta inteira

Um copo de suco de laranja de caixinha tem ~120 calorias e muito açúcar. Uma laranja tem ~60 calorias e fibras.

**Diferença:** Menos açúcar, mais fibras, mais saciedade.

## 4. Café com açúcar → Café com canela

Se você usa 2 colheres de açúcar, são 60 calorias extras. A canela dá sabor sem calorias.

**Diferença:** Menos calorias vazias, mais sabor.

## 5. Cereal açucarado → Granola caseira ou aveia

Cereais industrializados são cheios de açúcar. Aveia ou granola caseira são opções muito melhores.

**Diferença:** Mais fibras, menos açúcar, mais energia.

---

Quer mais sugestões personalizadas? É só perguntar ao Swapp! 🥣
    `
  },
  "mitos-sobre-carboidratos": {
    title: "Mitos sobre carboidratos que você precisa parar de acreditar",
    excerpt: "Carboidrato é vilão? Vamos desvendar essa história e entender o papel real dos carboidratos.",
    category: "Educação",
    readTime: "7 min",
    date: "05 Jan 2026",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
    content: `
Carboidratos se tornaram os vilões da alimentação nos últimos anos. Mas será que eles merecem essa fama?

## Mito 1: "Carboidrato engorda"

**Realidade:** Nenhum alimento isolado engorda. O que causa ganho de peso é consumir mais calorias do que você gasta — independente de ser carboidrato, proteína ou gordura.

## Mito 2: "À noite, carboidrato vira gordura"

**Realidade:** Seu corpo não tem um relógio que decide transformar carboidrato em gordura depois das 18h. O que importa é o total do dia.

## Mito 3: "Cortar carboidrato é a melhor forma de emagrecer"

**Realidade:** Dietas low carb funcionam porque reduzem calorias totais. Mas não são mágicas — e podem ser difíceis de manter.

## Mito 4: "Todo carboidrato é igual"

**Realidade:** Existe uma diferença enorme entre:
- Carboidratos simples (açúcar, doces, refrigerante)
- Carboidratos complexos (arroz integral, batata doce, aveia)

## A verdade sobre carboidratos

Carboidratos são a principal fonte de energia do corpo. Seu cérebro precisa deles para funcionar. Atletas dependem deles para performance.

**O segredo:** Escolha carboidratos de qualidade e na quantidade certa para seus objetivos.

---

Dúvidas sobre suas escolhas de carboidratos? Pergunte ao Swapp! 🍞
    `
  }
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts[params.slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#111827] mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <span className="text-[#10B981] hover:underline cursor-pointer">Voltar ao blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Link href="/">
            <img src={swappLogo} alt="Swapp" className="h-32 w-32 aspect-square object-contain cursor-pointer" />
          </Link>
          <Link href="/blog">
            <span className="text-[#6B7280] hover:text-[#10B981] transition-colors flex items-center gap-2 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium text-[#10B981] bg-[#F0FDF4] px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-[#9CA3AF] flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="text-sm text-[#9CA3AF]">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold text-[#111827] mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-semibold text-[#111827] mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={idx} className="font-semibold text-[#111827] my-4">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={idx} className="text-[#4B5563] ml-6 my-2">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                  return <li key={idx} className="text-[#4B5563] ml-6 my-2 list-decimal">{paragraph.replace(/^\d\. /, '')}</li>;
                }
                if (paragraph === '---') {
                  return <hr key={idx} className="my-8 border-[#E5E7EB]" />;
                }
                if (paragraph.trim()) {
                  return <p key={idx} className="text-[#4B5563] leading-relaxed my-4">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-[#E5E7EB]"
          >
            <div className="bg-gradient-to-br from-[#F0FDF4] to-[#ECFCCB] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#111827] mb-3">
                Tem dúvidas sobre nutrição?
              </h3>
              <p className="text-[#6B7280] mb-6">
                Pergunte ao Swapp! Respostas rápidas e personalizadas no seu WhatsApp.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Oi%20Swapp!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-8">
            <Link href="/blog">
              <span className="text-[#6B7280] hover:text-[#10B981] transition-colors flex items-center gap-2 cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao blog
              </span>
            </Link>
            <button className="text-[#6B7280] hover:text-[#10B981] transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
        </article>
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
