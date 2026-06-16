import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Scissors,
  Sparkles,
  Paintbrush,
  Hand,
  Crown,
  Award,
  Leaf,
  HeartHandshake,
  Instagram,
  Facebook,
  Menu,
  X,
  ArrowRight,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-salon.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gColor from "@/assets/gallery-color.jpg";
import gInterior from "@/assets/gallery-interior.jpg";
import gFacial from "@/assets/gallery-facial.jpg";
import gBridal from "@/assets/gallery-bridal.jpg";
import gNails from "@/assets/gallery-nails.jpg";

const PHONE = "+917490007445";
const PHONE_DISPLAY = "+91 74900 07445";
const WHATSAPP = `https://wa.me/917490007445?text=${encodeURIComponent(
  "Hi Adron Salon, I'd like to book an appointment."
)}`;
const ADDRESS =
  "Shop No 5, Orchid Center, Ground Floor, Opp. Safal Parisar 1, South Bopal, Ahmedabad, Gujarat 380058";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Adron Salon Pvt Ltd, South Bopal, Ahmedabad"
)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Adron Salon, Orchid Center, South Bopal, Ahmedabad"
)}&output=embed`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adron Salon Pvt Ltd — Premium Unisex Salon in South Bopal, Ahmedabad" },
      {
        name: "description",
        content:
          "Adron Salon in South Bopal, Ahmedabad — premium hair, beauty, nail and bridal makeup services. 4.6★ with 1088+ reviews. Book your appointment today.",
      },
      { property: "og:title", content: "Adron Salon Pvt Ltd — Luxury Beauty & Makeup Studio" },
      {
        property: "og:description",
        content:
          "Premium unisex salon in South Bopal, Ahmedabad. Hair, beauty, nails and bridal makeup by expert stylists.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Adron Salon Pvt Ltd",
          image: "/og.jpg",
          telephone: PHONE,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No 5, Orchid Center, Opp. Safal Parisar 1, South Bopal",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380058",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "1088",
          },
        }),
      },
    ],
  }),
  component: SalonPage,
});

const services = [
  {
    icon: Scissors,
    title: "Hair Services",
    desc: "Precision haircuts, expert styling, advanced colouring, hair spa and deep treatments tailored to your hair type.",
    items: ["Haircut", "Hair Styling", "Hair Color", "Hair Spa", "Hair Treatments"],
  },
  {
    icon: Sparkles,
    title: "Beauty Services",
    desc: "Glowing skin starts here — facials, deep cleanups, advanced skin treatments and gentle waxing.",
    items: ["Facial", "Cleanup", "Skin Care", "Waxing"],
  },
  {
    icon: Hand,
    title: "Nail Services",
    desc: "Polished, pampered hands and feet with luxurious manicure and pedicure rituals.",
    items: ["Manicure", "Pedicure"],
  },
  {
    icon: Crown,
    title: "Makeup Services",
    desc: "Look stunning on every occasion with signature bridal, party and event makeup by our artists.",
    items: ["Bridal Makeup", "Party Makeup", "Occasion Makeup"],
  },
];

const reviews = [
  {
    name: "Priya S.",
    text: "Great service, friendly staff, and a clean, relaxing atmosphere. My go-to salon in Bopal.",
  },
  {
    name: "Rhea M.",
    text: "I have been visiting Adron Salon for years because of their genuine care and professional service.",
  },
  {
    name: "Ananya P.",
    text: "The hair treatment results were amazing. Highly recommended for anyone who wants premium care.",
  },
];

const gallery = [
  { src: gHair, label: "Hair Transformations" },
  { src: gBridal, label: "Bridal Makeup" },
  { src: gInterior, label: "Salon Interior" },
  { src: gColor, label: "Hair Colouring" },
  { src: gFacial, label: "Beauty Treatments" },
  { src: gNails, label: "Nail Artistry" },
];

const why = [
  { icon: Award, label: "Experienced Stylists" },
  { icon: Leaf, label: "Premium Products" },
  { icon: HeartHandshake, label: "Personalized Consultation" },
  { icon: Sparkles, label: "Hygienic Environment" },
];

function SalonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FontPreload />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

function FontPreload() {
  // Inject Google Fonts link tags into <head>
  useEffect(() => {
    const links = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ];
    const els = links.map((l) => {
      const el = document.createElement("link");
      Object.entries(l).forEach(([k, v]) => v && el.setAttribute(k === "crossOrigin" ? "crossorigin" : k, String(v)));
      document.head.appendChild(el);
      return el;
    });
    return () => els.forEach((e) => e.remove());
  }, []);
  return null;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-display text-lg">
            A
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-wide">Adron Salon</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Pvt Ltd</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors"
          >
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Book Appointment <ArrowRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium"
            >
              <Phone size={16} /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury interior of Adron Salon in South Bopal, Ahmedabad"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="max-w-3xl text-white animate-float-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">
            <span className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-xs font-medium tracking-wide">
              4.6 · 1088+ Google Reviews
            </span>
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Transform Your Look With{" "}
            <span className="text-gradient-gold italic">Ahmedabad's</span> Trusted Salon
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Serving 1000+ happy clients with premium hair, beauty and makeup services in
            the heart of South Bopal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Book Appointment <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-foreground"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80">
            <Pill icon={<Star size={14} className="text-gold" fill="currentColor" strokeWidth={0} />}>
              4.6 Star Rating
            </Pill>
            <Pill icon={<Sparkles size={14} className="text-gold" />}>1088+ Reviews</Pill>
            <Pill icon={<MapPin size={14} className="text-gold" />}>South Bopal, Ahmedabad</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      {icon}
      <span>{children}</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-2xl ${center ? "text-center" : ""}`}>
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
        {center && <span className="h-px w-8 bg-gold/60" />}
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-gold/60" />
      </div>
      <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <img
            src={gInterior}
            alt="Adron Salon interior with marble counters and golden mirrors"
            loading="lazy"
            width={900}
            height={900}
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-luxe)]"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-sm bg-foreground p-6 text-background sm:-bottom-8 sm:-right-8 sm:block">
            <div className="font-display text-5xl text-gradient-gold">10+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
              Years of Trust
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Adron"
            title={
              <>
                Why Clients Choose <span className="text-gradient-gold italic">Adron Salon</span>
              </>
            }
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Adron Salon is a trusted beauty destination in South Bopal known for professional
            hair styling, beauty treatments, makeup services and customer-focused care. With
            over 1000 customer reviews and years of client trust, the salon delivers premium
            experiences in a welcoming, hygienic environment.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {why.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-sm border border-border bg-card p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-gold-foreground">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Crafted Rituals For <span className="text-gradient-gold italic">Every You</span>
            </>
          }
          desc="From precision haircuts to bridal glamour, every service at Adron is designed to make you feel cared for, confident and radiant."
          center
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-background transition-colors group-hover:bg-[image:var(--gradient-gold)] group-hover:text-gold-foreground">
                <s.icon size={22} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/85">
                    <span className="h-1 w-1 rounded-full bg-gold" /> {i}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-gold"
              >
                Book Now <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "1088+", l: "Google Reviews" },
    { v: "1000+", l: "Happy Clients" },
    { v: "4.6★", l: "Average Rating" },
    { v: "10+", l: "Expert Stylists" },
  ];
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(800px 300px at 50% 0%, oklch(0.74 0.12 78 / 0.4), transparent)" }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-5xl font-medium text-gradient-gold sm:text-6xl">
              {s.v}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/65">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Gallery"
          title={
            <>
              A Glimpse Of Our <span className="text-gradient-gold italic">Work</span>
            </>
          }
          desc="Real transformations, real moments — from runway-ready hair to flawless bridal artistry."
          center
        />

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((g, i) => (
            <figure
              key={g.label}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 ? "row-span-2 col-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-gold">Adron</div>
                <div className="font-display text-xl text-white">{g.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Client Love"
          title={
            <>
              Loved By <span className="text-gradient-gold italic">1000+ Clients</span>
            </>
          }
          desc="Honest words from the people who keep coming back to Adron."
          center
        />

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="font-medium text-foreground">4.6</span>
          <span>· 1088+ Google Reviews</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative flex flex-col rounded-sm border border-border bg-card p-8 shadow-sm transition hover:shadow-[var(--shadow-luxe)]"
            >
              <span className="absolute -top-5 left-7 grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-display text-2xl text-gold-foreground">
                "
              </span>
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">"{r.text}"</p>
              <div className="hairline my-5" />
              <div className="text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Verified Client
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Book Your <span className="text-gradient-gold italic">Appointment</span>
            </>
          }
          desc="Walk in, call us, or book instantly on WhatsApp — we can't wait to pamper you."
          center
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-sm border border-border bg-card p-7">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Address</div>
              <div className="mt-2 font-display text-xl">Adron Salon Pvt Ltd</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-gold"
              >
                <MapPin size={16} /> Get Directions <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InfoCard icon={<Phone size={18} />} label="Call" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
              <InfoCard icon={<Clock size={18} />} label="Hours" value="Open Daily" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                className="btn-gold inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/80 px-6 py-3.5 text-sm font-semibold transition hover:bg-foreground hover:text-background"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-border shadow-sm lg:col-span-3">
            <iframe
              src={MAPS_EMBED}
              title="Adron Salon location on Google Maps"
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 transition hover:border-gold">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-gold-foreground">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-gold-foreground font-display text-lg">
              A
            </span>
            <div>
              <div className="font-display text-xl">Adron Salon</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Pvt Ltd</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A premium unisex salon in South Bopal, Ahmedabad — delivering trusted hair,
            beauty, nail and bridal makeup services for over 1000 happy clients.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Quick Links</div>
          <ul className="mt-5 space-y-2.5 text-sm text-white/80">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>Shop No 5, Orchid Center, Opp. Safal Parisar 1, South Bopal, Ahmedabad 380058</span>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-gold">
                <Phone size={16} className="text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-gold" /> Open Daily
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/55 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Adron Salon Pvt Ltd. All rights reserved.</span>
          <span>Crafted with care in Ahmedabad.</span>
        </div>
      </div>
    </footer>
  );
}
