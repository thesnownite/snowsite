import "./App.css";

const highlights = ["Games", "Art", "Coding", "Cozy chats"];

const socials = [
  { label: "Twitch", href: "https://www.twitch.tv/" },
  { label: "Discord", href: "https://discord.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

function App() {
  return (
    <div className="page-shell">
      <div className="snowfall" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="flake"
            style={{
              left: `${(index * 7) % 100}%`,
              animationDuration: `${8 + (index % 5)}s`,
              animationDelay: `${-index * 0.8}s`,
              width: `${8 + (index % 4) * 3}px`,
              height: `${8 + (index % 4) * 3}px`,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <a className="brand" href="#home">
          Snow Nite
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#stream">Stream</a>
        </nav>
      </header>

      <main id="home" className="hero-panel">
        <section className="hero-copy">
          <p className="eyebrow">Twitch • Variety • Cozy vibes</p>
          <h1>
            Hi! I&apos;m <span>Snow Nite</span>.
          </h1>
          <p className="intro">
            I&apos;m a variety streamer who loves games, art, coding, and
            creating comfy spaces.
          </p>
          <p className="tagline">
            Grab a hot chocolate, stay awhile, and enjoy the snow.
          </p>

          <div className="actions">
            <a
              className="btn btn-primary"
              href="https://www.twitch.tv/"
              target="_blank"
              rel="noreferrer"
            >
              Watch on Twitch
            </a>
            <a className="btn btn-secondary" href="#about">
              Discover more
            </a>
          </div>

          <ul className="highlights" aria-label="Snow Nite interests">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <aside className="hero-card" id="stream">
          <div className="status-pill">Live cozy streams</div>
          <h2>Come warm up with me</h2>
          <p>
            Expect soft lighting, playful energy, and a little seasonal magic.
          </p>
          <div className="card-meta">
            <span>Weekly sessions</span>
            <strong>Every Friday</strong>
          </div>
          <div className="card-meta">
            <span>Current vibe</span>
            <strong>Pixel art + chill music</strong>
          </div>
        </aside>
      </main>

      <section id="about" className="info-grid">
        <article className="info-card">
          <h3>What I stream</h3>
          <p>
            Game nights, creative experiments, coding sessions, and calm
            downtime.
          </p>
        </article>
        <article className="info-card">
          <h3>Why it feels special</h3>
          <p>
            The space is built to feel welcoming, bright, and a little bit
            magical.
          </p>
        </article>
        <article className="info-card">
          <h3>Stay connected</h3>
          <div className="social-links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
