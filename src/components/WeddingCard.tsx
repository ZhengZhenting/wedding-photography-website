import { Link } from "react-router-dom";
import { Wedding } from "@/data/weddings";
import { imageMap } from "@/data/imageMap";
import FadeIn from "./FadeIn";

interface WeddingCardProps {
  wedding: Wedding;
  index: number;
}

const WeddingCard = ({ wedding, index }: WeddingCardProps) => {
  return (
    <FadeIn delay={index * 0.1}>
      <Link
        to={`/portfolio/${wedding.slug}`}
        className="group block"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imageMap[wedding.coverImage]}
            alt={wedding.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="mt-5 text-center">
          <h3 className="font-serif text-xl text-foreground md:text-2xl">
            {wedding.title}
          </h3>
          <p className="text-label mt-2 text-muted-foreground">
            {wedding.location}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
};

export default WeddingCard;
