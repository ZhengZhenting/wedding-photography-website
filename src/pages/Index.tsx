import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { weddings } from "@/data/weddings";
import { imageMap } from "@/data/imageMap";
import Layout from "@/components/Layout";
import WeddingCard from "@/components/WeddingCard";
import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={imageMap.hero}
            alt="Wedding photography"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl text-primary-foreground md:text-6xl lg:text-7xl"
          >
            {siteContent.brand}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-editorial mt-4 text-lg text-primary-foreground/80 md:text-xl"
          >
            {siteContent.tagline}
          </motion.p>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <FadeIn>
          <div className="text-center">
            <p className="text-label text-muted-foreground">Selected Work</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Recent Stories
            </h2>
            <div className="divider-elegant" />
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 md:gap-16">
          {weddings.slice(0, 4).map((wedding, i) => (
            <WeddingCard key={wedding.id} wedding={wedding} index={i} />
          ))}
        </div>

        <FadeIn>
          <div className="mt-20 text-center">
            <Link
              to="/portfolio"
              className="text-label border-b border-foreground pb-1 text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
            >
              View All Collections
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Tagline band */}
      <section className="bg-secondary px-6 py-20 text-center md:py-28">
        <FadeIn>
          <p className="text-editorial mx-auto max-w-2xl font-serif text-2xl text-foreground md:text-3xl">
            "Every love story is unique. I'm here to preserve the quiet beauty of yours."
          </p>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Index;
