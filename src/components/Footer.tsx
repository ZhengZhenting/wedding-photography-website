import { siteContent } from "@/data/siteContent";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 text-center md:px-12">
      <p className="font-serif text-lg text-foreground">
        {siteContent.footer.copyright}
      </p>
      <p className="mt-2 text-label text-muted-foreground">
        {siteContent.footer.tagline}
      </p>
      <div className="divider-elegant mx-auto mt-6" />
      <div className="mt-4 flex items-center justify-center gap-6">
        <a
          href={siteContent.about.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-label text-muted-foreground transition-colors hover:text-foreground"
        >
          Instagram
        </a>
        <a
          href={`mailto:${siteContent.about.contact.email}`}
          className="text-label text-muted-foreground transition-colors hover:text-foreground"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
