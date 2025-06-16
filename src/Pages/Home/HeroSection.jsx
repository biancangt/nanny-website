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
          Experienced Nanny/Educator with over 9 years specializing in infant and toddler care, adept at delivering attentive, developmentally appropriate care within dynamic, fully staffed households, including ROTA scheduling. Expert in managing daily routines, safety protocols, and personalized developmental activities rooted in Montessori principles. Proven ability to collaborate effectively with caregiving teams, provide clear, consistent communication, and update parents regularly on children’s progress, mood, and needs. Skilled in supporting family travel logistics and maintaining seamless care during domestic and international trips. Known for patience, empathy, discretion, and flexibility, including comfort with pets and extended shifts. Excellent references available upon request.
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
