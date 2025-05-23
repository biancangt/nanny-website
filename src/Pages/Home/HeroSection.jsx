export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Bianca!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Professional Nanny</span>
            <br />
          </h1>
          <p className="hero--section-description">
            Caring and experienced nanny who loves supporting families and helping children grow.
            Skilled with infants to school-aged kids, and always bringing patience and fun.
            Focused on creating a safe, loving, and engaging environment.
            Excited to become part of a wonderful family and make a real difference.
            <br /> You can find more details in my resume below!
          </p>
        </div>
        <a href="https://bold.pro/my/bngt-250522185721?vsid=37f435ed-b5d6-43d9-9695-f8094955b707" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Check Resume</button>
        </a>
      </div>

      <div className="hero--section--img">
        {/* Desktop Image */}
        <img
          src="./img/hero-img.png"
          alt="Hero Desktop"
          className="hero--img-desktop"
        />
        {/* Mobile Image */}
        <img
          src="./img/hero-mobile.png"
          alt="Hero Mobile"
          className="hero--img-mobile"
        />
      </div>
    </section>
  );
}
