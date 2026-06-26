import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type Program = {
  title: string;
  status: "ACTIVE" | "COMING SOON";
  description: string;
  points: string[];
  audience?: string;
  image: string;
};

type Feature = {
  title: string;
  text: string;
};

type GalleryItem = {
  title: string;
  image: string;
};

type Technology = {
  title: string;
  code: string;
  description: string;
  image: string;
};

const academyImages = {
  hero:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80",
  students:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  robotics:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  coding:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  arduino:
    "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1400&q=80",
  drone:
    "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=1400&q=80",
};

const whatsappLink = "https://wa.me/233550873047";
const roboticsInterestFormLink = "https://forms.gle/RKc3qeoFGTDKETUH9";

const programs: Program[] = [
  {
    title: "Robotics Masterclass",
    status: "ACTIVE",
    description: "Practical robotics training covering real build sessions, electronics, coding, and engineering habits.",
    points: [
      "Arduino Programming",
      "Electronics",
      "Sensors",
      "Motors",
      "Robot Building",
      "Engineering Design",
      "Problem Solving",
      "Coding",
    ],
    audience: "Kids, Teenagers, Adults",
    image: academyImages.robotics,
  },
  {
    title: "Robotics & AI Academy",
    status: "COMING SOON",
    description: "Comprehensive AI and robotics training for learners preparing for smart systems and future industries.",
    points: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Robotics Engineering",
      "Smart Systems",
      "AI Applications",
      "Automation",
      "Future Technologies",
    ],
    audience: "Kids, Teenagers, Adults",
    image: academyImages.coding,
  },
  {
    title: "STEM Innovation Academy",
    status: "COMING SOON",
    description: "Hands-on STEM education that turns classroom ideas into projects, experiments, and prototypes.",
    points: [
      "Science",
      "Technology",
      "Engineering",
      "Mathematics",
      "Innovation",
      "Design Thinking",
      "Research Projects",
      "Robotics Integration",
    ],
    image: academyImages.students,
  },
  {
    title: "Industrial Automation Program",
    status: "COMING SOON",
    description: "Professional automation training for adults and technical workers entering Industry 4.0.",
    points: [
      "PLC Programming",
      "Industrial Robotics",
      "Sensors",
      "Motor Control",
      "Industry 4.0",
      "Smart Manufacturing",
      "SCADA Systems",
    ],
    audience: "Adults and Professionals",
    image: academyImages.arduino,
  },
];

const features: Feature[] = [
  { title: "Hands-On Learning", text: "Students build, test, debug, and present real technology projects." },
  { title: "Industry-Relevant Skills", text: "Programs focus on practical tools used in modern engineering and automation." },
  { title: "African-Focused Training", text: "Lessons connect technology to local problems, schools, communities, and businesses." },
  { title: "Certified Instructors", text: "Training is led by educators with AI, robotics, STEM, and automation experience." },
  { title: "Real Projects", text: "Learners create robots, circuits, prototypes, and working demonstrations." },
  { title: "Innovation Challenges", text: "Students practice teamwork, design thinking, and problem solving under pressure." },
  { title: "Career Preparation", text: "The academy builds confidence for future study, entrepreneurship, and work." },
  { title: "Future Technology Skills", text: "AI, coding, robotics, IoT, and automation are taught as connected disciplines." },
];

const technologies: Technology[] = [
  {
    title: "Robotics",
    code: "RO",
    description: "Learners build moving robots, connect sensors and motors, and understand how machines sense, decide, and act.",
    image: academyImages.robotics,
  },
  {
    title: "Artificial Intelligence",
    code: "AI",
    description: "Students explore how smart systems learn patterns, make predictions, and support real-world problem solving.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Arduino",
    code: "AR",
    description: "We teach microcontroller programming, wiring, LEDs, sensors, and control projects using Arduino boards.",
    image: academyImages.arduino,
  },
  {
    title: "IoT",
    code: "IO",
    description: "Learners discover how devices connect to the internet, collect data, and communicate in smart environments.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "STEM",
    code: "ST",
    description: "We combine science, technology, engineering, and mathematics through experiments, challenges, and projects.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electronics",
    code: "EL",
    description: "Students learn circuits, components, breadboards, power, signals, troubleshooting, and practical safety habits.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automation",
    code: "AU",
    description: "We explain how systems can run tasks automatically using sensors, controllers, logic, and feedback.",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Coding",
    code: "CO",
    description: "Learners practice step-by-step programming, debugging, logic, and writing code that controls real projects.",
    image: academyImages.coding,
  },
  {
    title: "Engineering",
    code: "EN",
    description: "Students use design thinking, measurement, testing, teamwork, and improvement cycles to solve problems.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Drones",
    code: "DR",
    description: "We introduce flight basics, drone parts, control systems, responsible use, and future drone applications.",
    image: academyImages.drone,
  },
];

const gallery: GalleryItem[] = [
  { title: "Robotics classes", image: academyImages.robotics },
  { title: "Students building robots", image: academyImages.students },
  { title: "STEM workshops", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" },
  { title: "Coding lessons", image: academyImages.coding },
  { title: "Arduino projects", image: academyImages.arduino },
  { title: "Drone training", image: academyImages.drone },
  { title: "Automation systems", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80" },
  { title: "AI demonstrations", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" },
  { title: "Engineering projects", image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=80" },
  { title: "Innovation competitions", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" },
  { title: "STEM classrooms", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" },
  { title: "Future engineers", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80" },
];

const counters = [
  ["500+", "Students Trained"],
  ["100+", "Projects Built"],
  ["20+", "Workshops Conducted"],
  ["10+", "Schools Reached"],
  ["5+", "Technology Programs"],
];

const testimonials = [
  ["Ama Mensah", "Student", "The robotics class helped me understand coding because I could see my code move a real robot."],
  ["Mrs Agbeko Joyce", "Parent", "My son became more confident with electronics and now talks about becoming an engineer."],
  ["Efua Nyarko", "Teacher", "APT Automation makes STEM practical. Learners see science as something they can build with."],
  ["Kojo Asare", "Professional", "The automation lessons connected sensors, motors, and control systems in a very practical way."],
  ["Nana Yeboah", "Student", "I joined to learn Arduino and left with a working project I could explain proudly."],
  ["Abena Tetteh", "Parent", "The training is serious, modern, and still friendly enough for young learners to enjoy."],
];

const faqs = [
  ["Who can join the Robotics Training?", "Kids, teenagers, adults, schools, and beginner learners can join the Robotics Masterclass."],
  ["Will AI classes be available?", "Yes. The Robotics & AI Academy is planned to cover AI, machine learning, computer vision, and smart systems."],
  ["What do STEM Programs include?", "STEM programs include science, technology, engineering, mathematics, research projects, and robotics integration."],
  ["How do I register?", "Use the registration button or contact APT Automation to reserve a place in the active Robotics Masterclass."],
  ["Will learners receive certificates?", "Certificate options are planned for structured programs, workshops, and completed training tracks."],
  ["What are the age requirements?", "Programs are designed for kids, teenagers, adults, and professionals, with lessons adjusted by level."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AcademySection({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  return <section className={`academy-section ${className}`} {...props}>{children}</section>;
}

type AcademyPageProps = {
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

export default function AcademyPage({ theme, onThemeToggle }: AcademyPageProps) {
  return (
    <div className="academy-page bg-[#07111f] text-white">
      <header className="academy-hero">
        <nav className="academy-nav">
          <a href="/" className="academy-brand">
            <img src="/logo.png" alt="APT Automation logo" />
            <span>APT Automation Academy</span>
          </a>
          <div className="academy-nav-links">
            <a href="#programs">Programs</a>
            <a href="#gallery">Gallery</a>
            <a href="#faq">FAQ</a>
            <a href="#register">Register</a>
            <a href={roboticsInterestFormLink} target="_blank" rel="noreferrer">Interest Form</a>
            <button
              type="button"
              className="theme-toggle"
              onClick={onThemeToggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                )}
              </span>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        <div className="academy-hero-media" aria-hidden="true">
          <img src={academyImages.hero} alt="" />
        </div>
        <div className="academy-hero-grid" aria-hidden="true" />

        <motion.div
          className="academy-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <span className="academy-kicker">Robotics, AI, STEM and Automation Training in Africa</span>
          <h1>Transforming Africa Through Robotics, AI & Automation</h1>
          <p>
            Building the next generation of innovators, engineers, creators, and technology leaders
            through hands-on Robotics, Artificial Intelligence, STEM, and Automation training.
          </p>
          <div className="academy-actions">
            <a href="#register" className="academy-button primary">Join Robotics Masterclass</a>
            <a
              href={roboticsInterestFormLink}
              target="_blank"
              rel="noreferrer"
              className="academy-button secondary"
            >
              Interest Form
            </a>
            <a href="#programs" className="academy-button secondary">Learn More</a>
          </div>
        </motion.div>
      </header>

      <main>
        <AcademySection className="academy-visual-strip">
          {[academyImages.students, academyImages.coding, academyImages.arduino, academyImages.drone].map((image) => (
            <motion.img
              key={image}
              src={image}
              alt="African learners exploring robotics, coding, AI, and automation"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            />
          ))}
        </AcademySection>

        <AcademySection id="programs" className="academy-container">
          <motion.div className="academy-section-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span>Our Programs</span>
            <h2>Training pathways for every African learner</h2>
          </motion.div>
          <div className="academy-program-grid">
            {programs.map((program, index) => (
              <motion.article
                className="academy-program-card"
                key={program.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <img src={program.image} alt={`${program.title} training`} />
                <div className="academy-program-body">
                  <span className={`academy-status ${program.status === "ACTIVE" ? "active" : ""}`}>{program.status}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="academy-chip-list">
                    {program.points.map((point) => <span key={point}>{point}</span>)}
                  </div>
                  {program.audience ? <p className="academy-audience">Audience: {program.audience}</p> : null}
                  {program.status === "ACTIVE" ? (
                    <div className="academy-program-actions">
                      <a
                        href={`${whatsappLink}?text=Hello%20APT%20Automation%2C%20I%20want%20to%20register%20for%20the%20Robotics%20Masterclass.`}
                        target="_blank"
                        rel="noreferrer"
                        className="academy-register"
                      >
                        Register Now
                      </a>
                      <a
                        href={roboticsInterestFormLink}
                        target="_blank"
                        rel="noreferrer"
                        className="academy-register interest"
                      >
                        Interest Form
                      </a>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </AcademySection>

        <AcademySection className="academy-container">
          <div className="academy-section-head">
            <span>Why Choose APT Automation</span>
            <h2>Built for practical skills and future careers</h2>
          </div>
          <div className="academy-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="academy-feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </AcademySection>

        <AcademySection className="academy-container">
          <div className="academy-section-head">
            <span>Technology We Teach</span>
            <h2>Modern tools for robotics, AI, and engineering</h2>
          </div>
          <div className="academy-tech-grid">
            {technologies.map((tech) => (
              <motion.article key={tech.title} whileHover={{ y: -6, scale: 1.02 }} className="academy-tech-card">
                <img src={tech.image} alt={`${tech.title} training`} />
                <div className="academy-tech-body">
                  <span>{tech.code}</span>
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </AcademySection>

        <AcademySection id="gallery" className="academy-container">
          <div className="academy-section-head">
            <span>Gallery</span>
            <h2>Learning spaces, projects, and innovation moments</h2>
          </div>
          <div className="academy-gallery">
            {gallery.map((item, index) => (
              <motion.figure
                key={item.title}
                className={index % 5 === 0 ? "wide" : ""}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </motion.figure>
            ))}
          </div>
        </AcademySection>

        <AcademySection className="academy-impact">
          <div className="academy-container academy-impact-grid">
            {counters.map(([value, label]) => (
              <motion.article key={label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <strong>{value}</strong>
                <span>{label}</span>
              </motion.article>
            ))}
          </div>
        </AcademySection>

        <AcademySection className="academy-future">
          <div className="academy-container academy-future-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="academy-kicker">Africa's Future</span>
              <h2>Preparing Africa's Next Generation of Innovators</h2>
              <p>
                AI in Africa is creating new opportunities in education, healthcare, agriculture,
                finance, design, and entrepreneurship. Robotics in education helps learners move
                from memorizing concepts to building useful solutions, while STEM development gives
                young people the confidence to solve local problems with global tools.
              </p>
              <p>
                APT Automation Academy connects innovation, digital transformation, and future
                careers by helping learners understand how technology can become a business,
                profession, research path, or community solution.
              </p>
            </motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
              alt="African-focused technology collaboration and innovation training"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </AcademySection>

        <AcademySection className="academy-container">
          <div className="academy-section-head">
            <span>Testimonials</span>
            <h2>Voices from learners, parents, teachers, and professionals</h2>
          </div>
          <div className="academy-testimonial-grid">
            {testimonials.map(([name, role, quote]) => (
              <article key={name} className="academy-testimonial">
                <p>"{quote}"</p>
                <strong>{name}</strong>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </AcademySection>

        <AcademySection id="faq" className="academy-container">
          <div className="academy-section-head">
            <span>FAQ</span>
            <h2>Common questions about training and registration</h2>
          </div>
          <div className="academy-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </AcademySection>

        <AcademySection id="register" className="academy-final-cta">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>Ready to Build the Future?</h2>
            <p>Join APT Automation Academy and start learning the skills shaping Africa's next technology era.</p>
            <div className="academy-actions">
              <a
                href={`${whatsappLink}?text=Hello%20APT%20Automation%2C%20I%20want%20to%20register%20for%20the%20Robotics%20Masterclass.`}
                target="_blank"
                rel="noreferrer"
                className="academy-button primary"
              >
                Register for Robotics Masterclass
              </a>
              <a
                href={roboticsInterestFormLink}
                target="_blank"
                rel="noreferrer"
                className="academy-button secondary"
              >
                Interest Form
              </a>
              <a
                href={`${whatsappLink}?text=Hello%20APT%20Automation%2C%20I%20would%20like%20to%20make%20an%20inquiry.`}
                target="_blank"
                rel="noreferrer"
                className="academy-button secondary"
              >
                Contact APT Automation
              </a>
            </div>
          </motion.div>
        </AcademySection>
      </main>
    </div>
  );
}
