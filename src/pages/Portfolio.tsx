import { weddings } from "@/data/weddings";
import Layout from "@/components/Layout";
import WeddingCard from "@/components/WeddingCard";
import FadeIn from "@/components/FadeIn";

const Portfolio = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <FadeIn>
          <div className="text-center">
            <p className="text-label text-muted-foreground">Portfolio</p>
            <h1 className="mt-3 font-serif text-3xl text-foreground md:text-5xl">
              Wedding Collections
            </h1>
            <div className="divider-elegant" />
            <p className="text-editorial mx-auto mt-4 max-w-lg text-muted-foreground">
              Each wedding is a chapter — a story of love told through light, emotion, and connection.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 md:gap-16">
          {weddings.map((wedding, i) => (
            <WeddingCard key={wedding.id} wedding={wedding} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
