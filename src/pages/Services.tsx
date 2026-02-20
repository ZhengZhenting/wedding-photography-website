import { serviceTiers } from "@/data/services";
import Layout from "@/components/Layout";
import ServiceTierCard from "@/components/ServiceTierCard";
import FadeIn from "@/components/FadeIn";

const Services = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <FadeIn>
          <div className="text-center">
            <p className="text-label text-muted-foreground">Services</p>
            <h1 className="mt-3 font-serif text-3xl text-foreground md:text-5xl">
              Investment
            </h1>
            <div className="divider-elegant" />
            <p className="text-editorial mx-auto mt-4 max-w-lg text-muted-foreground">
              Three thoughtfully crafted collections, each designed to honour your story at every scale.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <ServiceTierCard
              key={tier.id}
              tier={tier}
              index={i}
              featured={tier.id === "legacy"}
            />
          ))}
        </div>

        <FadeIn>
          <div className="mt-20 text-center">
            <p className="text-editorial mx-auto max-w-md text-muted-foreground">
              Every wedding is different. If you'd like a bespoke package, I'd love to hear from you.
            </p>
            <a
              href="mailto:hello@aurelielaurent.com?subject=Custom Package Inquiry"
              className="text-label mt-6 inline-block border-b border-foreground pb-1 text-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Services;
