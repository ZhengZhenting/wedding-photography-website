import { ServiceTier } from "@/data/services";
import FadeIn from "./FadeIn";

interface ServiceTierCardProps {
  tier: ServiceTier;
  index: number;
  featured?: boolean;
}

const tierStyles: Record<string, { bg: string; text: string; muted: string; divider: string; btnBorder: string; btnHover: string }> = {
  essential: {
    bg: "bg-[hsl(30,10%,94%)]",
    text: "text-foreground",
    muted: "text-muted-foreground",
    divider: "bg-border",
    btnBorder: "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground",
    btnHover: "",
  },
  signature: {
    bg: "bg-[hsl(30,8%,85%)]",
    text: "text-foreground",
    muted: "text-muted-foreground",
    divider: "bg-foreground/20",
    btnBorder: "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground",
    btnHover: "",
  },
  legacy: {
    bg: "bg-[hsl(30,5%,28%)]",
    text: "text-white",
    muted: "text-white/60",
    divider: "bg-white/20",
    btnBorder: "border-white/40 text-white hover:bg-white/10",
    btnHover: "",
  },
};

const ServiceTierCard = ({ tier, index, featured = false }: ServiceTierCardProps) => {
  const style = tierStyles[tier.id] || tierStyles.essential;

  return (
    <FadeIn delay={index * 0.15}>
      <div className={`flex h-full flex-col border border-transparent p-8 text-center md:p-10 ${style.bg}`}>
        <p className={`text-label ${style.muted}`}>{tier.tagline}</p>
        <h3 className={`mt-4 font-serif text-2xl md:text-3xl ${style.text}`}>{tier.name}</h3>
        <p className={`mt-4 font-serif text-3xl md:text-4xl ${style.text}`}>{tier.price}</p>
        <div className={`mx-auto my-6 h-px w-12 ${style.divider}`} />
        <ul className="flex-1 space-y-3">
          {tier.features.map((feature, i) => (
            <li key={i} className={`text-sm ${style.muted}`}>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={`mailto:zhentingzheng@yahoo.com?subject=Inquiry — ${tier.name} Package`}
          className={`mt-8 inline-block border px-8 py-3 text-label transition-colors duration-300 ${style.btnBorder}`}
        >
          Inquire
        </a>
      </div>
    </FadeIn>
  );
};

export default ServiceTierCard;
