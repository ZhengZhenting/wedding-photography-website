import { siteContent } from "@/data/siteContent";
import { imageMap } from "@/data/imageMap";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const About = () => {
  const { about } = siteContent;

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-16 md:grid-cols-2 md:gap-20">
          {/* Portrait */}
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={imageMap["about-portrait"]}
                alt="Aurélie Laurent"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.2}>
            <div className="md:pt-12">
              <p className="text-label text-muted-foreground">About</p>
              <h1 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                {about.headline}
              </h1>
              <div className="divider-elegant !mx-0" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {about.intro}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {about.philosophy}
              </p>

              {/* Contact */}
              <div className="mt-12">
                <p className="text-label text-muted-foreground">Say Hello</p>
                <a
                  href={`mailto:${about.contact.email}`}
                  className="mt-3 block font-serif text-lg text-foreground transition-colors hover:text-muted-foreground"
                >
                  {about.contact.email}
                </a>
                <div className="mt-6 flex gap-6">
                  <a
                    href={about.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                  <a
                    href={about.contact.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default About;
