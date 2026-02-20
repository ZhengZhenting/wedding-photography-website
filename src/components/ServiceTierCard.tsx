import { ServiceTier } from "@/data/services";
import FadeIn from "./FadeIn";

interface ServiceTierCardProps {
  tier: ServiceTier;
  index: number;
  featured?: boolean;
}

const ServiceTierCard = ({ tier, index, featured = false }: ServiceTierCardProps) => {
  return (
    <FadeIn delay={index * 0.15}>
      <div
        className={`flex h-full flex-col border p-8 text-center md:p-10 ${
          featured
            ? "border-foreground bg-foreground text-primary-foreground"
            : "border-border bg-background"
        }`}
      >
        <p className={`text-label ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
          {tier.tagline}
        </p>
        <h3 className="mt-4 font-serif text-2xl md:text-3xl">{tier.name}</h3>
        <p className="mt-4 font-serif text-3xl md:text-4xl">{tier.price}</p>
        <div
          className={`mx-auto my-6 h-px w-12 ${
            featured ? "bg-primary-foreground/20" : "bg-border"
          }`}
        />
        <ul className="flex-1 space-y-3">
          {tier.features.map((feature, i) => (
            <li
              key={i}
              className={`text-sm ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
            >
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={`mailto:hello@aurelielaurent.com?subject=Inquiry — ${tier.name} Package`}
          className={`mt-8 inline-block border px-8 py-3 text-label transition-colors duration-300 ${
            featured
              ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              : "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
          }`}
        >
          Inquire
        </a>
      </div>
    </FadeIn>
  );
};

export default ServiceTierCard;
