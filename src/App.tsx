import { useEffect, useMemo, useState } from "react";
import AcademyPage from "./AcademyPage";

type Item = {
  id: string;
  title: string;
  summary: string;
  details: string;
  status: string;
  statusClass: string;
};

type Sample = {
  title: string;
  description: string;
  src: string;
};

const businesses: Item[] = [
  {
    id: "techMore",
    title: "Technology Innovation",
    summary:
      "This business arm is being designed to build digital products, automation systems, and practical software tools for institutions, startups, and enterprise clients across Africa.",
    details:
      "Our model includes custom software support, process automation, website and business platform development, and enterprise technology advisory services. The focus is to create affordable and locally relevant solutions that improve productivity and digital access in African markets.",
    status: "Status: Under Construction",
    statusClass: "text-amber-700",
  },
  {
    id: "agriMore",
    title: "Agriculture",
    summary:
      "Our cassava farming business is active and focused on food security, dependable local supply, farmer collaboration, agribusiness growth, and value chain development.",
    details:
      "We are integrating blockchain traceability into our agriculture model so the full crop journey can be tracked transparently. This includes farm location records, cultivation timelines, and data about chemical inputs used during production.",
    status: "Status: Active",
    statusClass: "text-emerald-700",
  },
  {
    id: "eduMore",
    title: "Education (EduSense AI)",
    summary:
      "This business arm is under development to support early childhood education through smart learning systems, educator support tools, and stronger foundation-stage outcomes.",
    details:
      "EduSense AI is planned as an adaptive learning platform that identifies each student's study pattern and learning pace. It will monitor concentration behavior in real time and intelligently switch lesson styles or content flow when attention drops.",
    status: "Status: Under Construction",
    statusClass: "text-amber-700",
  },
  {
    id: "greebitMore",
    title: "Greebit Ecosystem",
    summary:
      "Greebit is a separate business entity within our broader vision, currently under development as a trusted blockchain-driven platform.",
    details:
      "Greebit will serve as a payment system inside the APT GOD ecosystem, enabling smoother digital transactions across our platforms and partner services.",
    status: "Status: Under Construction",
    statusClass: "text-amber-700",
  },
  {
    id: "transportMore",
    title: "Transport Solutions",
    summary:
      "This business unit is being prepared to improve mobility through structured transport models that increase access, improve reliability, and connect urban and rural communities more effectively.",
    details:
      "The long-term model includes route optimization, reliable service planning, and technology-assisted transport coordination that can reduce travel delays and improve movement for people, goods, and services.",
    status: "Status: Under Construction",
    statusClass: "text-amber-700",
  },
  {
    id: "realEstateMore",
    title: "Real Estate",
    summary:
      "This business unit is under development to deliver quality real estate projects that support modern living, business activity, infrastructure growth, and sustainable community expansion.",
    details:
      "Our real estate model is being shaped around practical development plans, including residential and mixed-use opportunities that align with community needs, investment value, and long-term urban growth.",
    status: "Status: Under Construction",
    statusClass: "text-amber-700",
  },
];

const services: Item[] = [
  {
    id: "cryptoServiceMore",
    title: "Crypto Consultancy",
    summary:
      "We provide trusted crypto consultancy for beginners, professionals, and businesses seeking clear direction on responsible participation, safety, and informed digital asset decision-making.",
    details:
      "Our consultancy covers wallet setup guidance, security best practices, scam-risk awareness, beginner onboarding, and practical explanations of blockchain use cases.",
    status: "Status: Active",
    statusClass: "text-emerald-700",
  },
  {
    id: "studentServiceMore",
    title: "University and College Tech Support",
    summary:
      "We offer dedicated technology assistance for university and college students to help them deliver better academic outputs with confidence and professional standards.",
    details:
      "Our support includes project structuring, document formatting, research presentation support, digital workflow guidance, and technical troubleshooting.",
    status: "Status: Active",
    statusClass: "text-emerald-700",
  },
  {
    id: "designServiceMore",
    title: "Presentation, Book and Project Design",
    summary:
      "We design polished presentations, books, and project documents that communicate ideas clearly and professionally for academic, corporate, and personal use.",
    details:
      "Our design service includes slide deck creation, project report layout, booklet and e-book formatting, visual branding consistency, and high-quality finishing for print or digital use.",
    status: "Status: Active",
    statusClass: "text-emerald-700",
  },
];

const samples: Sample[] = [
  {
    title: "PowerPoint Design Sample",
    description:
      "Professional presentation styling for school projects, business pitches, and branded slide decks.",
    src: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf#toolbar=0&navpanes=0&scrollbar=1",
  },
  {
    title: "Word Document Design Sample",
    description:
      "Clean and polished document formatting for reports, project work, books, and professional write-ups.",
    src: "https://www.africau.edu/images/default/sample.pdf#toolbar=0&navpanes=0&scrollbar=1",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
];

const whatsappLink = "https://wa.me/233550873047";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [activeSample, setActiveSample] = useState<Sample | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname);

    const handleRouteClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (
        link instanceof HTMLAnchorElement &&
        link.origin === window.location.origin &&
        !link.hash &&
        (link.pathname === "/" || link.pathname === "/academy")
      ) {
        event.preventDefault();
        window.history.pushState({}, "", link.pathname);
        syncPath();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", syncPath);
    document.addEventListener("click", handleRouteClick);

    return () => {
      window.removeEventListener("popstate", syncPath);
      document.removeEventListener("click", handleRouteClick);
    };
  }, []);

  useEffect(() => {
    const isAcademy = currentPath === "/academy";
    document.title = isAcademy
      ? "APT Automation Academy | Robotics, AI, STEM and Automation Training"
      : "APT GOD Enterprise | Technology, Agriculture and Innovation";

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = isAcademy
      ? "APT Automation Academy provides robotics, artificial intelligence, STEM, coding, Arduino, and automation training for African learners."
      : "APT GOD Enterprise is a Ghanaian enterprise building across technology, agriculture, education, transport, crypto ecosystems, and real estate.";
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === "/academy") {
      return;
    }

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentPath]);

  useEffect(() => {
    const handleNavState = () => setNavScrolled(window.scrollY > 24);
    handleNavState();
    window.addEventListener("scroll", handleNavState);
    return () => window.removeEventListener("scroll", handleNavState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeSample ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSample]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSample(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const toggleReadMore = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const closeMenuAfterClick = () => setMobileOpen(false);

  if (currentPath === "/academy") {
    return <AcademyPage />;
  }

  return (
    <div className="official-typography">
      <nav
        className={`site-nav fixed left-1/2 top-4 z-[1000] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 px-6 py-5 ${navScrolled ? "nav-scrolled" : ""}`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="brand-wrap text-lg font-bold tracking-wide md:text-xl">
            <span className="logo-shell nav-logo-shell">
              <img
                src="/logo.png"
                alt="APT GOD logo"
                className="brand-logo"
              />
            </span>
            <span>APT GOD Enterprise</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {[
              ["About", "#about"],
              ["Businesses", "#businesses"],
              ["Services", "#services"],
              ["Samples", "#samples"],
              ["CEO", "#ceo"],
              ["Academy", "/academy"],
              ["Founder Story", "#founder-story"],
              ["Vision", "#vision"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/40 transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div id="mobileMenu" className={`pb-1 pt-4 md:hidden ${mobileOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-3 rounded-md border border-white/20 bg-white/10 p-4 text-sm font-medium backdrop-blur-sm">
            {[
              ["About", "#about"],
              ["Businesses", "#businesses"],
              ["Services", "#services"],
              ["Samples", "#samples"],
              ["CEO", "#ceo"],
              ["Academy", "/academy"],
              ["Founder Story", "#founder-story"],
              ["Vision", "#vision"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="nav-link w-fit" onClick={closeMenuAfterClick}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="hero-bg relative flex min-h-screen flex-col text-white">
        <div className="hero-slideshow" aria-hidden="true">
          {heroImages.map((image, index) => (
            <span
              key={image}
              className={`hero-slide ${index === heroIndex ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <span className="hero-beam one" aria-hidden="true" />
        <span className="hero-beam two" aria-hidden="true" />

        <section id="home" className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 md:py-0">
          <div className="reveal max-w-3xl">
            <span className="logo-shell hero-logo-shell">
              <img
                src="/logo.png"
                alt="APT GOD Enterprise logo"
                className="hero-logo"
              />
            </span>
            <h1 className="hero-title mt-6 text-4xl font-black tracking-tight md:text-6xl">APT GOD Enterprise</h1>
            <p className="mt-5 text-lg font-semibold text-emerald-100 md:text-2xl">
              Building Africa Through Technology, Agriculture and Innovation
            </p>
            <p className="mt-5 max-w-2xl text-base text-emerald-50/95 md:text-lg">
              We are a future-focused Ghanaian enterprise working across digital transformation,
              agriculture, education, transport, crypto ecosystems, and real estate to create
              meaningful growth in Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="cta-primary inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-[var(--brand-green)] transition hover:bg-emerald-50"
              >
                Contact Us
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="blend-section blend-soft py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">
                About APT GOD Enterprise
              </h2>
              <p className="mt-5 leading-relaxed text-slate-700">
                Founded in 2022, APT GOD Enterprise was established to build practical and scalable
                ventures that solve real African problems. Our operations include active cassava
                farming and active technology service delivery, while we continue developing major
                business units in education, transport, Greebit ecosystem expansion, and real
                estate.
              </p>
            </div>
          </div>
        </section>

        <section id="businesses" className="blend-section py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Our Businesses</h2>
              <p className="mt-4 text-slate-600">
                APT GOD Enterprise is structured as a multi-sector enterprise with long-term
                business arms designed to create opportunities across Africa.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {businesses.map((item) => {
                const isExpanded = !!expandedItems[item.id];
                return (
                  <article key={item.id} className="service-card reveal rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--brand-green)]">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.summary}</p>
                    {isExpanded && <p className="more-content">{item.details}</p>}
                    <div className="card-footer">
                      <button
                        type="button"
                        className="read-more-link"
                        onClick={() => toggleReadMore(item.id)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                      <p className={`text-sm font-semibold ${item.statusClass}`}>{item.status}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="blend-section blend-soft py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Our Services</h2>
              <p className="mt-4 text-slate-600">
                Our service division is active and professionally structured to support
                individuals, students, and organizations with practical technology solutions.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => {
                const isExpanded = !!expandedItems[item.id];
                return (
                  <article key={item.id} className="service-card reveal rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--brand-green)]">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.summary}</p>
                    {isExpanded && <p className="more-content">{item.details}</p>}
                    <div className="card-footer">
                      <button
                        type="button"
                        className="read-more-link"
                        onClick={() => toggleReadMore(item.id)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                      <p className={`text-sm font-semibold ${item.statusClass}`}>{item.status}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="samples" className="blend-section py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Design Samples</h2>
              <p className="mt-4 text-slate-600">
                Explore sample PowerPoint and Word designs directly on the website. These are
                view-only previews prepared for clients to assess style and quality before ordering.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {samples.map((sample) => (
                <article key={sample.title} className="sample-item reveal">
                  <h3 className="text-xl font-semibold text-[var(--brand-green)]">{sample.title}</h3>
                  <p className="mt-3 text-slate-600">{sample.description}</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center justify-center rounded-md bg-[var(--touch-blue)] px-4 py-2.5 font-semibold text-white transition hover:bg-[#0b2253]"
                    onClick={() => setActiveSample(sample)}
                  >
                    View Sample
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ceo" className="blend-section blend-soft py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="ceo-photo-wrap reveal w-fit">
                <img
                  src="/ceo.png"
                  alt="Wordi Gabriel, Founder and CEO of APT GOD Enterprise"
                  className="ceo-photo"
                />
              </div>
              <div className="reveal max-w-3xl">
                <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Founder and CEO</h2>
                <p className="mt-6 text-2xl font-semibold text-slate-800">Wordi Gabriel</p>
                <p className="mt-1 font-medium text-[var(--touch-blue)]">
                  Founder & CEO, APT Automation
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Robotics Instructor",
                    "Artificial Intelligence (AI) Educator",
                    "Automation Specialist",
                    "STEM Education Advocate",
                    "Technology Trainer",
                  ].map((title) => (
                    <span
                      key={title}
                      className="rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-sm font-semibold text-[var(--brand-green)] shadow-sm"
                    >
                      {title}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-relaxed text-slate-700">
                  The Founder and CEO of APT Automation is passionate about empowering African
                  youth and professionals through Robotics, Artificial Intelligence, Automation,
                  and STEM education.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  He holds a Certificate in Artificial Intelligence and Robotics and is also
                  pursuing a degree in Early Childhood Education. He has dedicated his work to
                  training children, teenagers, and adults in practical technology skills that
                  prepare them for the future workforce.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  His vision is to make Robotics, AI, Automation, and STEM education accessible to
                  learners across Africa.
                </p>
                <div className="mt-6 rounded-lg border border-emerald-200 bg-white/85 p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--brand-green)]">Areas of Expertise</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Robotics",
                      "Artificial Intelligence",
                      "Arduino Programming",
                      "Automation Systems",
                      "Electronics",
                      "STEM Education",
                      "Early Childhood Education",
                      "Coding and Programming",
                      "Educational Robotics",
                      "Innovation Training",
                      "Technology Mentorship",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="founder-story" className="founder-hero reveal">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">The Journey Behind APT GOD</h2>
            <p className="mt-4 text-lg text-emerald-100">A story of vision, resilience, and purpose</p>
          </div>
        </section>

        <section className="section reveal story-container">
          <div className="story-image">
            <img src="/ceo.png" alt="Wordi Gabriel" />
          </div>

          <div className="story-text">
            <h2>From Humble Beginnings to Visionary Leadership</h2>

            <p>
              The story of APT GOD BUSINESSES begins with the journey of its founder, Wordi
              Gabriel, whose life experiences have shaped a deep understanding of Africa&apos;s economic
              realities and the urgent need for innovation-driven solutions.
            </p>

            <p>
              Born in Akatsi Zuta and raised in Dzamlome in the Oti Region of Ghana, he grew up in
              a community where agriculture was not just an occupation, but a way of life. Being
              raised by parents who were both farmers, he developed a strong work ethic early on,
              while also gaining firsthand experience in the challenges faced by local farmers and
              small-scale businesses.
            </p>

            <p>
              Beyond academics, he acquired practical skills in farming and carpentry, learning
              directly from his environment. These experiences gave him a unique perspective, one
              that blends real-world understanding with a desire to create long-term solutions.
            </p>
          </div>
        </section>

        <section className="section reveal story-container reverse">
          <div className="story-text">
            <h2>The Birth of a Vision</h2>

            <p>
              As he advanced in his education and exposure to technology, Wordi Gabriel began to
              recognize the immense potential of digital systems in solving Africa&apos;s structural
              challenges. This realization led to the creation of APT GOD BUSINESSES in 2022.
            </p>

            <p>
              The company was founded on a bold vision: to build an integrated ecosystem that
              leverages technology to improve financial inclusion, modernize agriculture, transform
              education, and create sustainable infrastructure across Africa.
            </p>

            <p>
              Through initiatives like Greebit, EduSense AI, and smart agriculture systems, the
              goal is not just innovation but meaningful, scalable impact.
            </p>
          </div>

          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Vision"
            />
          </div>
        </section>

        <section className="section reveal pb-20 text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Looking Ahead</h2>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-slate-700">
            Today, Wordi Gabriel continues to lead APT GOD BUSINESSES with a focus on long-term
            growth, innovation, and impact. His mission is to position the company as a leading
            force in Africa&apos;s technological transformation where solutions are built not only to
            solve problems, but to create opportunities for millions across the continent.
          </p>
        </section>

        <section id="vision" className="vision-hero reveal">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Building Africa&apos;s Tech Ecosystem
            </h2>
            <p className="mt-4 text-lg text-emerald-100">A Vision for Scalable Impact and Innovation</p>
          </div>
        </section>

        <section className="section reveal py-16 text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">APT GOD Ecosystem</h2>

          <div className="ecosystem">
            <div className="eco-item">Greebit (Blockchain)</div>
            <div className="eco-item">Agriculture</div>
            <div className="eco-item">EduSense AI</div>
            <div className="eco-item">Automation</div>
            <div className="eco-item">Transport</div>
            <div className="eco-item">Real Estate</div>
          </div>

          <p className="eco-text mx-auto max-w-3xl text-slate-700">
            Each component of APT GOD BUSINESSES is designed to work as part of an integrated
            ecosystem, where technology connects industries and creates efficiency across sectors.
          </p>
        </section>

        <section className="section reveal py-16">
          <h2 className="text-center text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Roadmap</h2>

          <div className="roadmap">
            <article className="road-item">
              <h3>Phase 1 (2022 - 2024)</h3>
              <p>Concept development, research, and foundation building.</p>
            </article>

            <article className="road-item">
              <h3>Phase 2 (2025 - 2026)</h3>
              <p>Product development (Greebit, agriculture systems, AI tools).</p>
            </article>

            <article className="road-item">
              <h3>Phase 3 (2026 - 2028)</h3>
              <p>Expansion, partnerships, and ecosystem integration.</p>
            </article>

            <article className="road-item">
              <h3>Phase 4 (Future)</h3>
              <p>Scaling across Africa and global positioning.</p>
            </article>
          </div>
        </section>

        <section className="section reveal pb-20 text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Why APT GOD?</h2>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-slate-700">
            APT GOD BUSINESSES is positioned at the intersection of multiple high-growth sectors in
            Africa. With a focus on real-world problem solving, scalable systems, and long-term
            impact, the company represents a unique opportunity to participate in Africa&apos;s
            technological transformation.
          </p>
        </section>

        <section id="contact" className="blend-section py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--brand-green)] md:text-4xl">Contact</h2>
              <p className="mt-4 text-slate-600">
                Get in touch for partnerships, collaboration, and service inquiries.
              </p>

              <div className="mt-8 space-y-3 text-slate-800">
                <p>
                  <span className="font-semibold text-[var(--brand-green)]">Email:</span>{" "}
                  <a
                    className="underline decoration-emerald-300 hover:text-[var(--touch-blue)]"
                    href="mailto:aptgodbusinesses@gmail.com"
                  >
                    aptgodbusinesses@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--brand-green)]">WhatsApp:</span>{" "}
                  <a
                    className="underline decoration-emerald-300 hover:text-[var(--touch-blue)]"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    0550873047
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--brand-green)]">Social:</span> @wordigabriel5-x
                </p>
              </div>

              <div className="contact-form-wrap">
                <h3 className="text-xl font-semibold text-[var(--brand-green)]">Send Us An Email</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in your details and send your message directly to APT GOD Enterprise.
                </p>

                <form
                  action="https://formsubmit.co/aptgodbusinesses@gmail.com"
                  className="mt-5 space-y-4"
                  method="POST"
                >
                  <input type="hidden" name="_subject" value="New Website Inquiry - APT GOD Enterprise" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="#contact" />

                  <div>
                    <label htmlFor="senderName" className="mb-1 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      id="senderName"
                      name="Name"
                      type="text"
                      className="form-field"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="senderEmail" className="mb-1 block text-sm font-semibold text-slate-700">
                      Your Email
                    </label>
                    <input
                      id="senderEmail"
                      name="Email"
                      type="email"
                      className="form-field"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="senderMessage" className="mb-1 block text-sm font-semibold text-slate-700">
                      Message (Optional)
                    </label>
                    <textarea
                      id="senderMessage"
                      name="Message"
                      rows={4}
                      className="form-field resize-y"
                      placeholder="Type your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-[var(--brand-green)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--brand-green-2)]"
                  >
                    Send Message
                  </button>
                  <a
                    href={`${whatsappLink}?text=Hello%20APT%20GOD%20Enterprise%2C%20I%20would%20like%20to%20make%20an%20inquiry.`}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-0 inline-flex items-center justify-center rounded-md border border-[var(--brand-green)] px-5 py-3 font-semibold text-[var(--brand-green)] transition hover:bg-emerald-50 sm:ml-3"
                  >
                    Message on WhatsApp
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {activeSample ? (
        <section className="sample-viewer" aria-hidden="false" onClick={() => setActiveSample(null)}>
          <div className="sample-panel" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">{activeSample.title}</h3>
              <button
                type="button"
                onClick={() => setActiveSample(null)}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-700 transition hover:bg-slate-100"
              >
                Close
              </button>
            </div>
            <iframe
              className="sample-frame"
              title={`${activeSample.title} preview`}
              src={activeSample.src}
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </section>
      ) : null}

      <footer className="bg-[var(--touch-blue)] py-6 text-emerald-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {year} APT GOD Enterprise. All rights reserved.</p>
          <a href="#home" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
