import { useParams, Link } from "react-router-dom";
import { weddings } from "@/data/weddings";
import { imageMap } from "@/data/imageMap";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const WeddingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const wedding = weddings.find((w) => w.slug === slug);

  if (!wedding) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-foreground">Story not found</h1>
            <Link
              to="/portfolio"
              className="text-label mt-6 inline-block text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero cover */}
      <section className="relative flex h-[70vh] items-end overflow-hidden md:h-[80vh]">
        <img
          src={imageMap[wedding.coverImage]}
          alt={wedding.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="relative z-10 px-6 pb-12 md:px-12 md:pb-16">
          <FadeIn>
            <p className="text-label text-primary-foreground/70">{wedding.location}</p>
            <h1 className="mt-2 font-serif text-4xl text-primary-foreground md:text-6xl">
              {wedding.title}
            </h1>
            <p className="text-editorial mt-3 text-lg text-primary-foreground/80">
              {wedding.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
        <div className="space-y-8 md:space-y-12">
          {wedding.images.map((imgKey, i) => (
            <FadeIn key={i} delay={0.03}>
              <div className="flex justify-center">
                 <img
                  src={imageMap[imgKey]}
                  alt={`${wedding.title} — Image ${i + 1}`}
                  loading="lazy"
                  className="w-3/5 h-auto object-contain"
              />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-20 text-center">
            <Link
              to="/portfolio"
              className="text-label border-b border-foreground pb-1 text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
            >
              Back to All Stories
            </Link>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default WeddingDetail;
